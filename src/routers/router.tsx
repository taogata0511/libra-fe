import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { BorrowFormPage, BorrowPage } from "@/features/Borrow/components";
import { DonatePage } from "@/features/Donate";
import { HomePage } from "@/features/Home/";
import { ReturnPage } from "@/features/Return";

export const Router = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/borrow" element={<BorrowPage />} />
      <Route path="/borrow/form" element={<BorrowFormPage />} />
      <Route path="/donate" element={<DonatePage />} />
      <Route path="/return" element={<ReturnPage />} />
    </Route>
  </Routes>
);
