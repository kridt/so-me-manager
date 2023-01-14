import Link from "next/link";
import { useAuth } from "utils/user-context";

export default function Navigation({ dashboard }) {
  const { user } = useAuth();

  if (dashboard) {
    return (
      <nav className="flex justify-between items-center flex-col md:flex-row gap-4 p-4 font-qucksand">
        <ul className="flex flex-col sm:flex-row items-center gap-8">
          <li>
            <Link href="/" className="whitespace-nowrap">
              LOGO
            </Link>
          </li>
          <li>
            <Link href="/upload" className="whitespace-nowrap">
              Make a post
            </Link>
          </li>
          <li>
            <Link href="/contact" className="whitespace-nowrap">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Link href="/login" className="whitespace-nowrap">
            Log out
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center flex-col md:flex-row gap-4 p-4 font-qucksand">
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
        {user ? (
          ""
        ) : (
          <Link href="/login" className="whitespace-nowrap">
            Log in
          </Link>
        )}
        <Link
          href="/trial"
          className="bg-[#212427] text-white font-bold py-3 px-4 whitespace-nowrap inline-block">
          Start free trial
        </Link>
      </div>
    </nav>
  );
}
