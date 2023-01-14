import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Navigation from "components/Navigation";
import { useEffect } from "react";
import { auth } from "/firebase";

export default function signup() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push(from ? from : "/");
    }
  }, [status, router]);

  function handleLogin(e) {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        e.target.email.value,
        e.target.password.value
      )
      .then((user) => {
        console.log(user);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Navigation />
      <main className="flex-grow max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
        <div className="md:order-1 my-10 md:my-56 md:ml-10">
          <div className="mb-10 md:my-4 text-center lg:mb-14">
            <h1 className="text-6xl font-serif mb-4">Sign up</h1>
            <p className="text-xl leading-relaxed">
              A social media management tool for businesses, allowing them to
              schedule posts, track analytics, and manage multiple social media
              accounts.
            </p>
          </div>
          <form onSubmit={(e) => handleLogin(e)} className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
              placeholder="email@example.com"
              required
            />
            <label htmlFor="password" className="mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
              placeholder="password"
              required
            />
            <button
              className="block w-full px-3 py-4 font-medium text-white bg-gray-500 rounded-lg"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <p className="text-gray-800 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Log in
            </Link>{" "}
            now to get started.
          </p>
        </div>
        <div className="hidden md:block min-h-full relative -mx-4">
          <Image
            src="/vase.jpg"
            fill
            alt="en vase med hvide blomster"
            className="object-cover"
            priority
          />
        </div>
      </main>
    </>
  );
}
