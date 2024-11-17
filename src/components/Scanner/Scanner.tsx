import { useZxing } from "react-zxing";

interface Props {
  className?: string;
  onCodeRead: (code: string) => void;
}

export const Scanner = ({ className, onCodeRead }: Props) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      onCodeRead(result.getText());
    },
  });

  return <video className={className} ref={ref} />;
};
