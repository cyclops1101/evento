import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";
import { PER_PAGE } from "@/lib/constants";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, count } = await getEvents(city, page);
  const limit = count / PER_PAGE;

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";

  const nextPath = page < limit ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[68.75rem] px-[1.25rem] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}
