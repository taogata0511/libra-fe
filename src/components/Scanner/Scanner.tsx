import { useZxing } from "react-zxing";

interface Props {
  onCodeRead: (code: string) => void;
}

export const Scanner = ({ onCodeRead }: Props) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      onCodeRead(result.getText());
    },
  });

  return <video ref={ref} width="500" height="500" />;
};
