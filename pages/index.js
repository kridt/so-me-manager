import Navigation from "components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={"bg-red-500"}>
        <h1 className="text-5xl">Hello world!</h1>
        <br />
      </main>
    </>
  );
}
