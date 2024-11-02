import { useState } from "react";
import { toast } from "react-toastify";

import godSound from "@/assets/god.wav";
import defaultSound from "@/assets/read-barcode.mp3";
import { Scanner } from "@/components/Scanner";
import { BorrowDetail } from "@/features/Borrow/BorrowDetail.tsx";
import { drawLottery } from "@/utils/lottery.ts";

export const Borrow = () => {
  const [code, setCode] = useState("");

  const handleCodeRead = async (code: string) => {
    if (
      !code.startsWith("978") &&
      !code.startsWith("979") &&
      !code.startsWith("491")
    ) {
      return;
    }

    const isHit = drawLottery(8192);
    const sound = isHit ? godSound : defaultSound;

    const audio = new Audio(sound);

    audio.play().catch((error) => {
      toast.error(`音声の再生に失敗しました: ${error}`);
    });

    setCode(code);
  };

  return code ? (
    <BorrowDetail code={code} />
  ) : (
    <Scanner onCodeRead={handleCodeRead} />
  );
};
