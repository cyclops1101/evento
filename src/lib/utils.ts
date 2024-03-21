import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { TailwindClassNames } from "./types";

export const cn = (...args: TailwindClassNames[]) => {
  return twMerge(clsx(...args));
};


