import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  nextPath: string;
  prevPath: string;
};

const btnStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 text-sm opacity-75 hover:opacity-100 state-effects";

export default function PaginationControls({
  nextPath,
  prevPath,
}: PaginationControlsProps) {
  return (
    <div className="flex w-full justify-between items-center">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon />
          Prev
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
}
