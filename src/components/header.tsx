"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Header() {
  const activePathName = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-6 text-sm h-full">
          {NAV_LINKS.map(({ path, label }) => (
            <li
              key={path}
              className={clsx(
                "hover:text-white flex items-center relative transition-all",
                {
                  "text-white": activePathName === path,
                  "text-white/50": activePathName !== path,
                }
              )}
            >
              <Link href={path}>{label}</Link>
              {activePathName === path && (
                <motion.div layoutId="nav-active-link" className="bg-primary h-1 w-full absolute bottom-0" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
