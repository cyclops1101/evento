import React from "react";
import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex-col flex-1 gap-6 basis-80 h-[380px] max-w-[500px] lg:max-w-[326.6608px]">
      <div className="flex flex-col w-full h-full overflow-hidden rounded-xl bg-white/[10%]">
        <Skeleton className="w-[500px] h-[60%]" />
        <div className="flex flex-col flex-1 items-center justify-center gap-2">
          <Skeleton className="h-[2rem] w-[15.625rem]" />
          <Skeleton className="h-[1.5rem] w-[12.5rem]" />
          <Skeleton className="h-[20px] w-[12.5rem]" />
        </div>
      </div>
    </div>
  );
}
