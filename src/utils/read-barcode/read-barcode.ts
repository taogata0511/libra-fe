import { Dispatch, SetStateAction } from "react";

export const readBarcode = async (
  code: string,
  setter: Dispatch<SetStateAction<string>>,
  playLottery?: () => HTMLAudioElement,
) => {
  if (!isBookBarcode(code)) return;

  const audio = playLottery?.();

  if (audio) {
    await audio.play();
  }

  setter(code);
};

const isBookBarcode = (code: string) => {
  return (
    code.startsWith("978") || code.startsWith("979") || code.startsWith("491")
  );
};
