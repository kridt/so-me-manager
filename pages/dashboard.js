import Navigation from "components/Navigation";
import Link from "next/link";
import { useAuth } from "utils/user-context";

export default function dashboard() {
  const { user } = useAuth();

  if (!user) {
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

  return (
    <>
      <Navigation dashboard />
      <h1>dashboard</h1>
    </>
  );
}
