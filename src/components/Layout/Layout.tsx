import clsx from "clsx";
import { Outlet } from "react-router-dom";

import { AppBar } from "@/components/AppBar/AppBar.tsx";

export const Layout = () => {
  return (
    <>
      <AppBar />

      <main className={clsx("w-full", "h-[calc(100dvh_-_56px)]", "p-4")}>
        <Outlet />
      </main>
    </>
  );
};
