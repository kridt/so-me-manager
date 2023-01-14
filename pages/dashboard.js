import Navigation from "components/Navigation";
import { useSession } from "next-auth/react";

export default function dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <Navigation />
      <h1 className="text-4xl">dashboard</h1>
      {session ? <p>Hello, {session.user.name}</p> : ""}
      <a
        href={`https://www.tiktok.com/auth/authorize/?client_key=${process.env.NEXT_PUBLIC_tiktok_client_key}&response_type=code&scope=user.info.basic&redirect_uri=https://so-me-manager.vercel.app/dashboard&state=${process.env.NEXT_PUBLIC_RS}`}
      >
        connect your tiktok account
      </a>
    </>
  );
}
