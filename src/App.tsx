import { BrowserRouter } from "react-router-dom";

import { Router } from "@/routers/router.tsx";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
