import gakoSound from "@/assets/gako.wav";
import godSound from "@/assets/god.wav";
import defaultSound from "@/assets/read-barcode.mp3";
import sevenFlashSound from "@/assets/seven-flash.mp3";

export const drawLottery = (denominator: number): boolean => {
  const randomNumber = Math.floor(Math.random() * denominator) + 1;

  return randomNumber === 1;
};

export const playLotteryReadSound = () => {
  const isHit = drawLottery(8192);
  const sound = isHit ? godSound : defaultSound;

  return new Audio(sound);
};

export const playLotteryDonateSound = () => {
  const isHit = drawLottery(65536);

  return isHit ? new Audio(sevenFlashSound) : null;
};

export const playLotteryReturnSound = () => {
  const isHit = drawLottery(161);

  return isHit ? new Audio(gakoSound) : null;
};
