export const drawLottery = (denominator: number): boolean => {
  const randomNumber = Math.floor(Math.random() * denominator) + 1;

  return randomNumber === 1;
};
