import React, { useState, useEffect } from "react";
import { useWeb3AuthContext } from "../contexts/SocialLoginContext";
import { useSmartAccountContext } from "../contexts/SmartAccountContext";
import Sidebar from "@/pages/home";
import { ethers } from "ethers";
import abi from "../utils/abi.json"

const Button = ({ children }) => {
  return (
    <button
      className="  bg-blue-900
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded"
    >
      {children}
    </button>
  );
};

const Form = ({ children, submitFn }) => {
  return (
    <form onSubmit={(e) => submitFn(e)}
      className=" bg-gray-100
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4"
    >
      {children}
    </form>
  );
};

const FormGroup = ({children}) => {
  return <div className="mb-4">{children}</div>;
};

const Label = ({ children }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};

const ClickOption = ({option}) => {
  return (
    <div className="mb-4 ml-4">
      <div className="flex items-center">
        <input
          className="mr-2 leading-tight w-{1/2}"
          type="checkbox"
          id="checkbox_id"
        />
        <label className="text-lg text-gray-700">{option}</label>
      </div>
    </div>
  );
}

const Input = ({name}) => {
  return (
    <input
      className="shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline"
  placeholder={name}
    />
  );
};

const InputNumber = ({ name }) => {
  return (
    <input
      className="shadow
  appearance-none
  border
  rounded
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline"
  type="number"
      placeholder={name}
    />
  );
};

const Contract = () => {
  const contractAddress = "0x1EE7D76Ae8de1EAc544Aa887d99325AdA5eE6507"

  const { web3Provider } = useWeb3AuthContext();
  const { state: walletState, wallet } = useSmartAccountContext();
  
  const getSellerContracts = async () => {
    if (!walletState || !web3Provider) return
    console.log({walletState})
    console.log("connecting to seller contracts")
    const billcontract = new ethers.Contract(
      contractAddress,
      abi,
      web3Provider
    )
    const allContracts = await billcontract.getSellerInventoryIds(walletState.address)
    console.log({ allContracts })
  }

  const handleClick = (e) => {
    e.preventDefault()
    alert(
      "bro"
    )
    console.log("hi clicky")
  }

  useEffect(() => {
    getSellerContracts()
  },[])
  return (
    <>
      <div className="mb-4 bg-white rounded content-evenly"></div>
      <Form submitFn={handleClick}>
        <label className="block text-gray-900 text-2xl font-bold mb-4">
          Create Contract
        </label>
        <FormGroup>
          <Label htmlFor="name">Client Address</Label>
          <Input id="name" name="123 Main St" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Return Address</Label>
          <Input id="name" name="321 Walnut St" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="MM/DD/YYYY" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="product">Product</Label>
          <div className="flex justify-evenly">
            <div className="flex-col justify-evenly">
              <ClickOption option="Barrel Chair" />
              <ClickOption option="Billiard Table" />
            </div>
            <div className="flex-col justify-evenly">
              <ClickOption option="Wicker Accent Cabinet" />
              <ClickOption option="Bathroom Vanity" />
            </div>
            <div className="flex-col justify-evenly">
              <ClickOption option="Shoe Storage" />
              <ClickOption option="Leather Sofa" />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="quantity">Quantity</Label>
          <InputNumber id="quantity" name="#" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
        </FormGroup>
        <Button onClick={() => console.log("click")} type="submit">Submit</Button>
      </Form>
    </>
  );
}

const TrackButton = ({ onClick }) => {
  return (
    <a href="https://track-9hb1.onrender.com/" target="_blank">
      <button
        className="bg-red-950 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md mt-4 mb-4 mr-2"
        onClick={onClick}
      >
        Track
      </button>
    </a>
  );
};

const ModifyButton = ({ onClick }) => {
  return (
    <button
      className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 mb-4 mr-2"
      onClick={onClick}
    >
      Modify
    </button>
  );
};

const ContractList = ({contractInfo}) => {

  return (
    <>
      <div className="mb-3 bg-white rounded h-20 ml-20 mr-20 flex place-content-between shadow-md">
        <div>
          <p className="text-lg font-bold ml-4">{contractInfo.buyer}</p>
          <p className="text-sm ml-4 font-bold">{contractInfo.buyerAddress}</p>
          {contractInfo.paid && (
            <div className="flex">
              <p className="text-sm ml-4 font-bold">Paid: </p>
              <p className="text-sm text-green-600 font-bold"> True</p>
            </div>
          )}

          {!contractInfo.paid && (
            <div className="flex ml-4 font-bold">
              <p className="text-sm font-bold">Paid: </p>
              <p className="text-sm text-red-600 font-bold"> False</p>
            </div>
          )}
        </div>
        <div>
          <ModifyButton />
          <TrackButton />
        </div>
      </div>
    </>
  );
}

const contractList = [
  {
    buyer: "Big Pete",
    buyerAddress: "abc123",
    paid: false,
  },

  {
    buyer: "Medium Pete",
    buyerAddress: "abc123",
    paid: true,
  },

  {
    buyer: "Little Pete",
    buyerAddress: "abc123",
    paid: false,
  },
];

const SellerPortal = () => {
  return (
    <div className="relative bg-gray-800 p-8">
      <div
        className=" bg-gray-100
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4"
      >
        <label className="block text-gray-900 text-2xl font-bold mb-5">
          Ongoing Contracts
        </label>
        {contractList.map((contract) => (
          <ContractList contractInfo={contract} />
        ))}
      </div>
      <hr className="border-dotted" />
      <Contract />
    </div>
  );
  };
export default SellerPortal;


// address buyer
// address seller
// string shipping address
// string origin address
// date created
// bool is paid
// array of items

// Item
// Number of units
// description
// price per unit