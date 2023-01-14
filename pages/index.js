import Navigation from "components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-[#F0E6CE]">
        <Navigation />
        <div className="flex flex-col md:flex-row items-center gap-12 p-4 max-w-screen-2xl mx-auto">
          <div className="flex-[1_1_50%]">
            <h1 className="text-5xl mb-4">Manage Your Social Media Accounts in one place</h1>
            <p className="text-xl leading-8">
              xxx allows you to manage all of your social media accounts in one place. With its
              advanced scheduling and analytics features, you can easily plan, analyze, and publish
              content in advance, freeing up valuable time to focus on growing your business
            </p>
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-6">
              <Link
                href="/trial"
                className="bg-[#212427] text-white font-bold py-3 px-4 whitespace-nowrap inline-block">
                Start your free 14-day trial
              </Link>
              <Link href="/trial" className="whitespace-nowrap underline inline-block font-medium">
                Compare plans
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_50%]">
            <Image src="/hero.png" alt="woman with a phone" height={900} width={700} />
          </div>
        </div>
      </header>
      <main className="bg-red-500">
        <h1 className="text-5xl">Hello world!</h1>
      </main>
    </>
  );
}
