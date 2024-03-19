import Link from "next/link";
import React from "react";

const routes = [
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">&copy; 2024 Cyclops, Inc. All rights reserved.</small>
      <ul className="flex gap-3">
        {routes.map(({ href, name }) => (
          <li key={href}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
