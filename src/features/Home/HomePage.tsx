import clsx from "clsx";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={clsx("flex", "flex-col", "gap-4")}>
      <Link to="/borrow">借りる</Link>

      <Link to="/return">返す</Link>

      <Link to="/donate">寄贈する</Link>
    </div>
  );
};
