import Navigation from "components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-[#F0E6CE]">
        <Navigation />
        <div className="flex flex-col md:flex-row items-center gap-16 p-4 max-w-screen-xl mx-auto">
          <div className="flex-[1_1_50%]">
            <h1 className="text-5xl mb-4">
              Manage Your Social Media Accounts in one place
            </h1>
            <p className="text-xl leading-8">
              A platform for managing your many social media accounts. Plan,
              analyze, and publish content in advance — saving you time and grow
              your business.
            </p>
            <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-6">
              <Link
                href="/trial"
                className="bg-[#212427] text-white font-bold py-3 px-4 whitespace-nowrap inline-block"
              >
                Start your free 14-day trial
              </Link>
              <Link
                href="/plans"
                className="whitespace-nowrap underline inline-block font-medium"
              >
                Compare plans
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_50%]">
            <Image
              src="/hero.png"
              alt="woman with a phone"
              height={599}
              width={525}
              priority
            />
          </div>
        </div>
      </header>
    </>
  );
}
