import { Route, Routes } from "react-router-dom";
import { BorrowPage } from "src/features/Borrow";

import { Layout } from "@/components/Layout";
import { DonatePage } from "@/features/Donate";
import { HomePage } from "@/features/Home/";
import { ReturnPage } from "@/features/Return";

export const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/rent" element={<BorrowPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/return" element={<ReturnPage />} />
    </Route>
  </Routes>
);
