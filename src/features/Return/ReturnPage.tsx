import clsx from "clsx";
import { useState } from "react";

import { Scanner } from "@/components/Scanner";
import { Return } from "@/features/Return/Return.tsx";
import { playLotteryReadSound } from "@/utils/lottery";
import { readBarcode } from "@/utils/read-barcode";

export const ReturnPage = () => {
  const [code, setCode] = useState("");

  return code ? (
    <Return code={code} />
  ) : (
    <Scanner
      className={clsx("w-full", "max-h-28", "object-cover")}
      onCodeRead={(code) => readBarcode(code, setCode, playLotteryReadSound)}
    />
  );
};
