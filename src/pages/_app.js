import '@/styles/globals.css'
import React, { useContext } from "react";
import { BillingProvider } from "../context/BillingContext";
import Sidebar from './home';

export default function App({ Component, pageProps }) {
  return (
    <>
    <BillingProvider>
    <Component {...pageProps} />
      </BillingProvider>
    </>
  );
}
