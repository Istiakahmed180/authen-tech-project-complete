import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Contexts/AuthProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer position="top-center" />
    <AuthProvider>
      <App />
    </AuthProvider>
  </>
);
