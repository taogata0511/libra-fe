import Skeleton from "react-loading-skeleton";

import { BookSkeleton } from "@/components/Book";
import { Spacer } from "@/components/Spacer";

export const ReturnSkeleton = () => {
  return (
    <div>
      <BookSkeleton />

      <Spacer tag="div" />

      <Skeleton width="100%" height="48px" />
    </div>
  );
};
