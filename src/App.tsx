import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Router } from "@/routers/router.tsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  );
}

export default App;
