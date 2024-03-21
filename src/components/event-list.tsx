import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

type EventListProps = {
  events: EventoEvent[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section className="max-w-[68.75rem] px-[1.25rem] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
