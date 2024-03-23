import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { TailwindClassNames } from "./types";

export const cn = (...args: TailwindClassNames[]) => {
  return twMerge(clsx(...args));
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const capitalize = (str: string): string => {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

export const kebabToSentence = (str: string): string => {
  return capitalize(str.replace(/-/g, " "));
}