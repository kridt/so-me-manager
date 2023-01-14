import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center flex-col md:flex-row gap-4 p-4 font-qucksand max-w-screen-xl mx-auto">
      <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <li>
          <Link href="/" className="whitespace-nowrap">
            LOGO
          </Link>
        </li>
        <li>
          <Link href="/WhyXXX" className="whitespace-nowrap">
            Why XXX
          </Link>
        </li>
        <li>
          <Link href="/WhatWeDo" className="whitespace-nowrap">
            What we do
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="whitespace-nowrap">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="whitespace-nowrap">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <button
          onClick={!session ? signIn : signOut}
          className="whitespace-nowrap"
        >
          {session ? "Log out" : "Log in"}
        </button>
        <Link
          href="/trial"
          className="bg-[#212427] text-white font-bold py-3 px-4 whitespace-nowrap inline-block"
        >
          Start free trial
        </Link>
      </div>
    </nav>
  );
}
