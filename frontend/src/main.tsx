import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import './index.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
