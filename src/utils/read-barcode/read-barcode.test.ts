import { Dispatch, SetStateAction } from "react";
import { Mock, vi } from "vitest";

import { readBarcode } from "@/utils/read-barcode/read-barcode";

describe("readBarcode", () => {
  let setterMock: Mock;
  let playLotteryMock: Mock;

  beforeEach(() => {
    setterMock = vi.fn() as Mock<Dispatch<SetStateAction<string>>>;
    playLotteryMock = vi.fn(() => {
      return { play: vi.fn().mockResolvedValue(undefined) };
    }) as Mock;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("書籍バーコードの場合、playLotteryを呼び出し、setterにcodeをセットする", async () => {
    const code = "9781234567890";

    await readBarcode(code, setterMock, playLotteryMock);

    expect(playLotteryMock).toHaveBeenCalled();
    expect(setterMock).toHaveBeenCalledWith(code);
  });

  it("書籍バーコードでない場合、playLotteryは呼ばれず、setterも呼ばれない", async () => {
    const code = "1234567890";

    await readBarcode(code, setterMock, playLotteryMock);

    expect(playLotteryMock).not.toHaveBeenCalled();
    expect(setterMock).not.toHaveBeenCalled();
  });

  it("playLotteryが提供されていない場合、setterにcodeをセットするが、音声再生はされない", async () => {
    const code = "9781234567890";

    await readBarcode(code, setterMock);

    expect(playLotteryMock).not.toHaveBeenCalled();
    expect(setterMock).toHaveBeenCalledWith(code);
  });
});
