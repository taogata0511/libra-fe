import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

import { Spacer } from "@/components/Spacer";

export const BookSkeleton = () => {
  return (
    <div className={clsx("w-full")}>
      <Skeleton width="100%" height="48px" />

      <Spacer tag="div" />

      <Skeleton width="100%" height="500px" />
    </div>
  );
};
