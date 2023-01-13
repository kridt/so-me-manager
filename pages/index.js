import { auth } from "public/firebase";
import { useEffect } from "react";

export default function Home() {
  function test() {}
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <>
      <main className={"bg-red-500"}>
        <h1 className="text-5xl">Hello world!</h1>
        <br />
        <button onClick={() => test()}>qwrefewfqawf</button>
      </main>
    </>
  );
}
