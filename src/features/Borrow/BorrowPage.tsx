import { useState } from "react";

import { Scanner } from "@/components/Scanner";
import { Borrow } from "@/features/Borrow/Borrow.tsx";
import { playLotteryReadSound } from "@/utils/lottery";
import { readBarcode } from "@/utils/read-barcode";

export const BorrowPage = () => {
  const [code, setCode] = useState("");

  return code ? (
    <Borrow code={code} />
  ) : (
    <Scanner
      onCodeRead={(code) => readBarcode(code, setCode, playLotteryReadSound)}
    />
  );
};
