import { forwardRef, ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const Image = forwardRef<HTMLImageElement, Props>((props, ref) => {
  return <img ref={ref} {...props} alt={props.alt} />;
});
