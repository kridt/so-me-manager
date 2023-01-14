import Link from "next/link";
import { useAuth } from "utils/user-context";

export default function Navigation({ dashboard }) {
  const { user } = useAuth();

  if (dashboard) {
    return (
      <nav className="flex justify-between items-center p-4 font-qucksand">
        <ul className="flex">
          <li>
            <Link href="/" className="py-4 px-8 whitespace-nowrap">
              LOGO
            </Link>
          </li>
          <li>
            <Link href="/upload" className="py-4 px-8 whitespace-nowrap">
              Make a post
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-4 px-8 whitespace-nowrap">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/login" className="py-4 px-8 whitespace-nowrap">
            Log out
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center p-4 font-qucksand">
      <ul className="flex">
        <li>
          <Link href="/" className="py-4 px-8 whitespace-nowrap">
            LOGO
          </Link>
        </li>
        <li>
          <Link href="/WhyXXX" className="py-4 px-8 whitespace-nowrap">
            Why XXX
          </Link>
        </li>
        <li>
          <Link href="/WhatWeDo" className="py-4 px-8 whitespace-nowrap">
            What we do
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="py-4 px-8 whitespace-nowrap">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="py-4 px-8 whitespace-nowrap">
            Contact
          </Link>
        </li>
      </ul>
      <div>
        {user ? (
          ""
        ) : (
          <Link href="/login" className="py-4 px-8 whitespace-nowrap">
            Log in
          </Link>
        )}
        <Link
          href="/trial"
          className="bg-[#212427] text-white font-bold py-4 px-8 whitespace-nowrap inline-block">
          Start free trial
        </Link>
      </div>
    </nav>
  );
}
