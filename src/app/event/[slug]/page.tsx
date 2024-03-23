import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { kebabToSentence } from "@/lib/utils";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const event = await getEvent(slug);
  return {
    title: event.name,
    description: event.description,
  };
}

export async function generateStaticParams() {
  return [
    {
      slug: "global-food-festival",
    },
    {
      slug: "dj-practive-session",
    },
  ];

} 

export default async function EventDetailPage({ params }: Props) {
  const { slug } = params;
  const event = await getEvent(slug);
  return (
    <>
      <Head>
        <title>{event.name}</title>
        <meta name="description" content={event.description} />
      </Head>
      <main>
        {/* intro */}
        <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
          <Image
            src={event.imageUrl}
            alt="Event background image"
            fill
            sizes="(max-width:1280px) 100vw, 1280px"
            quality={50}
            className="object-cover blur-3xl z-0"
            priority
          />
          <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
            <Image
              className="rounded-xl border-2 border-white/45 object-cover"
              src={event.imageUrl}
              alt={event.name}
              width={300}
              height={201}
            />
            <div className="flex flex-col">
              <p className="text-white/75">
                {new Date(event.date).toLocaleString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                {event.name}
              </H1>
              <p className="whitespace-nowrap text-xl text-white/75">
                Organized by{" "}
                <span className="italic">{event.organizerName}</span>
              </p>
              <button className="bg-white/10 border-2 border-white/10 bg-blur text-lg capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md state-effects">
                Get tickets
              </button>
            </div>
          </div>
        </section>

        {/* event detail */}
        <div className="text-center px-5 py-16 min-h-[75vh]">
          <Section>
            <SectionHeading>About this event</SectionHeading>
            <SectionContent>{event.description}</SectionContent>
          </Section>
          <Section>
            <SectionHeading>Location</SectionHeading>
            <SectionContent>{event.location}</SectionContent>
          </Section>
        </div>
      </main>
    </>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
