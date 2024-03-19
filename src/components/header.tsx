import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { NAV_LINKS } from "@/constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-6 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href} className="text-white/50 hover:text-white transition-all">
              <Link href="/">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
