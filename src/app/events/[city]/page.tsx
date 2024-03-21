import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import { getEvents } from "@/lib/server-utils";
import React from "react";
type EventsPageParams = {
  params: { city: string };
};

export default async function EventsPage({ params }: EventsPageParams) {
  const { city } = params;
  const events: EventoEvent[] = await getEvents(city);

  return (
    <main className="flex flex-col py-24 px-[1.25rem] items-center min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && (
          <span>
            Events in <span className="capitalize">{city}</span>
          </span>
        )}
      </H1>
      <EventList events={events} />      
    </main>
  );
}
