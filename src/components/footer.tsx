import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 Cyclops, Inc. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {FOOTER_LINKS.map(({ path, label }) => (
          <li key={path}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
