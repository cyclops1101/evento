import "server-only"
import { capitalize } from "./utils";
import prisma from "./db";
import { notFound } from "next/navigation";
import { PER_PAGE } from "./constants";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: PER_PAGE,
    skip: (page - 1) * PER_PAGE,
  });

  const count = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, count };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
