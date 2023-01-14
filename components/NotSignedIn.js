import Navigation from "components/Navigation";
import Link from "next/link";

export default function NotSignedIn() {
  return (
    <>
      <Navigation />
      <div className="text-center my-32">
        <p className="text-4xl mb-2">you are not signed in!</p>
        <Link href="/login" className="font-xl">
          Login
        </Link>
      </div>
    </>
  );
}
