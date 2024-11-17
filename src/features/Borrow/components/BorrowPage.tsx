import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Scanner } from "@/components/Scanner";
import { Borrow } from "@/features/Borrow/components/Borrow.tsx";
import { playLotteryReadSound } from "@/utils/lottery";
import { readBarcode } from "@/utils/read-barcode";

export const BorrowPage = () => {
  const [code, setCode] = useState("");

  return (
    <>
      {code ? (
        <Borrow code={code} />
      ) : (
        <>
          <Scanner
            // className={clsx("w-full", "max-h-28", "object-cover")}
            className={clsx("w-full", "h-96", "object-cover")}
            onCodeRead={(code) =>
              readBarcode(code, setCode, playLotteryReadSound)
            }
          />

          <Link to="/borrow/form">バーコードがない場合はこちら</Link>
        </>
      )}
    </>
  );
};
