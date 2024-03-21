export type EventoEvent = {
  id: string;
  name: string;
  slug: string;
  city: string;
  date: Date;
  location: string;
  imageUrl: string;
  description: string;
  organizerName: string;
};

export type TailwindClassNames =
  | string
  | string[]
  | { [className: string]: boolean }
  | undefined;