"use client";
// https://dev.to/koyablue/how-to-use-react-toastify-with-app-router-447n
import "react-toastify/dist/ReactToastify.css";
// import "../../app/globals.css";
// import "/app/globals.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
