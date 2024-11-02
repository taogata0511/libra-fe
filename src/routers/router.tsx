import { Route, Routes } from "react-router-dom";
import { Borrow } from "src/features/Borrow";

import { Layout } from "@/components/Layout";
import { Donate } from "@/features/Donate";
import { Home } from "@/features/Home/";
import { Return } from "@/features/Return";

export const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/rent" element={<Borrow />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/return" element={<Return />} />
    </Route>
  </Routes>
);
