import Navigation from "components/Navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <Navigation />
      <main className="max-w-screen-xl mx-auto p-4 space-y-4">
        <h1 className="text-4xl">dashboard</h1>
        {session ? <p>Hello, {session.user.name}</p> : ""}
        <Link href="/api/tiktok">connect your tiktok account</Link>
      </main>
    </>
  );
}
