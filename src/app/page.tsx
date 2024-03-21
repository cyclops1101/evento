import CitySearchForm from "@/components/city-search-form";
import H1 from "@/components/h1";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events near you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="underline italic font-bold text-primary">
          10,000 events
        </span>{" "}
        around you
      </p>

      <CitySearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50 ">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
