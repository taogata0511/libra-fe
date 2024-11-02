import { drawLottery } from "@/utils/lottery/lottery.ts";

describe("drawLottery", () => {
  const denominator = 10;
  const iterations = 10000;

  test("抽選が1/10の確率に収束する", () => {
    let successCount = 0;

    for (let i = 0; i < iterations; i++) {
      if (drawLottery(denominator)) {
        successCount++;
      }
    }

    // 期待する確率である1/10（0.1）に収束するかを確認
    const successRate = successCount / iterations;
    expect(successRate).toBeCloseTo(1 / denominator, 1);
  });

  test("関数がboolean値を返すかを確認", () => {
    const result = drawLottery(denominator);
    expect(typeof result).toBe("boolean");
  });

  test("分母が1の場合、常にtrueを返すか確認", () => {
    const result = drawLottery(1);
    expect(result).toBe(true);
  });

  test("分母が大きい場合、trueの頻度が少なくなることを確認", () => {
    const largeDenominator = 10000;
    let successCount = 0;

    for (let i = 0; i < iterations; i++) {
      if (drawLottery(largeDenominator)) {
        successCount++;
      }
    }

    // successCountが非常に少ないことを確認
    expect(successCount).toBeLessThan(iterations * 0.01);
  });
});
