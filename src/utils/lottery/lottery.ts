import godSound from "@/assets/god.wav";
import defaultSound from "@/assets/read-barcode.mp3";

export const drawLottery = (denominator: number): boolean => {
  const randomNumber = Math.floor(Math.random() * denominator) + 1;

  return randomNumber === 1;
};

export const playLotteryReadSound = () => {
  const isHit = drawLottery(8192);
  const sound = isHit ? godSound : defaultSound;

  return new Audio(sound);
};
