import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const BillingContext = React.createContext({});

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};


export const BillingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  //     address sellerAddress,
  // address receiverAddress,
  // string buyerPhysicalAddress,
  // string returnAddress,
  // string date,
  // string[] products,
  // uint256 quantity,
  // string description,
  // uint256 price,
  // uint256 transactionID
  const [contractData, setContractData] = useState({
    sellerAddress: "",
    receiverAddress: "0x03602F0376F806f32d2ABC2924B95b3e4E643129",
    buyerPhysicalAddress: "",
    returnAddress: "",
    date: "",
    products: [],
    quantity: 0,
    description: "",
    price: 0,
    transactionID: 0,
  });
  const handleChange = (e) => {
    setContractData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const checkMetamask = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const connectMetamask = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const createBill = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const {
        sellerAddress,
        receiverAddress,
        buyerPhysicalAddress,
        returnAddress,
        date,
        products,
        quantity,
        description,
        price,
        transactionID,
      } = contractData;
      const billingContract = getEthereumContract();
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: receiverAddress,
            gas: "0x5208",
            value: ethers.utils.parseEther("0.000001")._hex,
          },
        ],
      });
      //             address receiverAddress,
      // string memory buyerPhysicalAddress,
      // string memory returnAddress,
      // string memory date,
      // string[] memory products,
      // uint256 quantity,
      // string memory description,
      // uint256 price,
      // uint256 transactionID
      const billingHash = await billingContract.addToBlockchain(
        receiverAddress,
        buyerPhysicalAddress,
        returnAddress,
        date,
        products,
        quantity,
        description,
        price,
        transactionID
      );

      setIsLoading(true);
      console.log(`Loading... ${billingHash}`);
      await billingHash.wait();
      setIsLoading(false);
      console.log(`Succcess ${billingHash}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkMetamask();
  }, []);
  return (
    <BillingContext.Provider
      value={{
        connectMetamask,
        currentAccount,
        contractData,
        setContractData,
        handleChange,
        createBill,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
};
