import Skeleton from "@/components/skeleton";
import SkeletonCard from "@/components/skeleton-card";
import React from "react";

export default function Loading() {
  return (
    <div className="max-w-[68.75rem] px-[1.25rem] flex flex-wrap gap-10 justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
