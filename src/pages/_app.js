import '@/styles/globals.css'
import React, { useContext } from "react";
import { BillingProvider } from "../context/BillingContext";
import Sidebar from './home';
import "@biconomy/web3-auth/dist/src/style.css"
import dynamic from "next/dynamic";

const Web3AuthProvider = dynamic(
  () => import("../contexts/SocialLoginContext").then((res) => res.Web3AuthProvider),
  {
    ssr: false,
  }
);

const SmartAccountProvider = dynamic(
  () => import("../contexts/SmartAccountContext").then((res) => res.SmartAccountProvider),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }) {
  return (

    <Web3AuthProvider>
      <BillingProvider>
      <SmartAccountProvider>
    <Component {...pageProps} />
    </SmartAccountProvider>
    </BillingProvider>
    </Web3AuthProvider>
  );
}
