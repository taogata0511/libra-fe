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
      onCodeRead={(code) => readBarcode(code, setCode, playLotteryReadSound)}
    />
  );
};
