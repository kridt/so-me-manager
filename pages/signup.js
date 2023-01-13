import { auth } from "public/firebase";
import { useAuth } from "utils/user-context";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  const { setUser } = useAuth();

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password).then((user) => {
      setUser(user);
    });
  }

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center">
      <div className="md:order-1 my-10 md:my-56 md:ml-10">
        <div className="mb-10 md:my-4 text-center lg:mb-14">
          <h1 className="text-6xl font-serif mb-4">Signup</h1>
          <p className="text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatibus?
          </p>
        </div>
        <form onSubmit={(e) => handleLogin(e)}>
          <input
            type="email"
            name="email"
            className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
            placeholder="Email address"
            required
          />
          <input
            type="password"
            name="password"
            className="block w-full px-4 py-3 mb-4 border-2 border-gray-200 focus:ring focus:ring-beige focus:outline-none rounded-lg"
            placeholder="password"
            required
          />
          <button
            className="block w-full px-3 py-4 font-medium text-white bg-gray-500 rounded-lg"
            type="submit">
            Send
          </button>
        </form>
        <Link href="/login">login</Link>
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
  );
}
