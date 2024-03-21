import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  return (
    <Link
      className="flex-1 basis-80 h-[23.75rem] max-w-[31.25rem]"
      href={`/event/${event.slug}`}
    >
      <section className="flex flex-col w-full h-full overflow-hidden rounded-xl bg-white/[10%] relative state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col flex-1 items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[.75rem] top-[.75rem] h-[2.8125rem] w-[2.8125rem] bg-black/40 rounded-md">
          <p className="text-xl font-bold -mb-1">
            {date.toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-primary">
            {date.toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
