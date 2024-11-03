import { useState } from "react";

import { Scanner } from "@/components/Scanner";
import { Donate } from "@/features/Donate/Donate.tsx";
import { playLotteryReadSound } from "@/utils/lottery";
import { readBarcode } from "@/utils/read-barcode";

export const DonatePage = () => {
  const [code, setCode] = useState("");

  return code ? (
    <Donate code={code} />
  ) : (
    <Scanner
      onCodeRead={(code) => readBarcode(code, setCode, playLotteryReadSound)}
    />
  );
};
