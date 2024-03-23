import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: { city: string };
};

type EventPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
    description: `Find the best events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventPageProps) {
  const { city } = params;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col py-24 px-[1.25rem] items-center min-h-[110vh] actual">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && <span>Events in {capitalize(city)}</span>}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
