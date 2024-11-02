import { useState } from "react";

import { Scanner } from "@/components/Scanner";
import { BorrowDetail } from "@/features/Borrow/BorrowDetail.tsx";
export const Borrow = () => {
  const [code, setCode] = useState("");

  const handleCodeRead = (code: string) => {
    if (
      !code.startsWith("978") &&
      !code.startsWith("979") &&
      !code.startsWith("491")
    ) {
      return;
    }

    setCode(code);
  };

  return code ? (
    <BorrowDetail code={code} />
  ) : (
    <Scanner onCodeRead={handleCodeRead} />
  );
};
