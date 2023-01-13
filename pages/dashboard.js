import Link from "next/link";
import { auth } from "public/firebase";
import { useEffect } from "react";
import { useAuth } from "utils/user-context";

export default function dashboard() {
  const { user } = useAuth();
  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth.currentUser]);
  console.log(user);
  console.log(auth.currentUser);

  if (!user) {
    return (
      <div className="text-center">
        <p className="">you are not signed in!</p>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return <div>dashboard</div>;
}
