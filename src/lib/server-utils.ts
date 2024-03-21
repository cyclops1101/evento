import { API_URL } from "./constants";
import { EventoEvent } from "./types";

export const getEvents = async (city: string): Promise<EventoEvent[]> => {
  const res = await fetch(`${API_URL}?city=${city}`);
  const events: EventoEvent[] = await res.json();
  return events;
};

export const getEvent = async (slug: string): Promise<EventoEvent> => {
  const res = await fetch(`${API_URL}/${slug}`);
  const event: EventoEvent = await res.json();
  return event;
};
