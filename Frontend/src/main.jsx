import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import PaymentSuccess from "./PaymentSuccess";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "paymentsucess",
    element: <PaymentSuccess />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
