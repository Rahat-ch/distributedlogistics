<<<<<<< HEAD
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Seller = () => {
  const DynamicIndex = dynamic(
    () => import("../dynamicpages/seller").then((res) => res.default),
    {
      ssr: false,
    }
  );
  
  
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicIndex />
      </Suspense>
    </div>
  );
};

export default Seller;
=======
import React, { useState } from "react";
import Sidebar from "@/pages/home";

const Button = ({ children, handleSubmit }) => {
  return (
    <button
      className="  bg-blue-900
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded"
  onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

const Form = ({ children }) => {
  return (
    <form
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

const Input = ({placeholder, name, handleChange}) => {
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
  name={name}
  onChange={handleChange}
  placeholder={placeholder}
    />
  );
};

const InputNumber = ({ placeholder, name, handleChange }) => {
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
  onChange={handleChange}
  placeholder={placeholder}
  name={name}
    />
  );
};

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

const Contract = ({handleChange, handleSubmit}) => {
  return (
    <>
      <div className="mb-4 bg-white rounded content-evenly"></div>
      <Form>
        <label className="block text-gray-900 text-2xl font-bold mb-4">
          Create Contract
        </label>
        <FormGroup>
          <Label htmlFor="name">Client Address</Label>
          <Input
            id="buyerPhysicalAddress"
            placeholder="123 Main St"
            type="text"
            name="buyerPhysicalAddress"
            handleChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Return Address</Label>
          <Input
            id="returnAddress"
            placeholder="321 Walnut St"
            type="text"
            name="returnAddress"
            handleChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            placeholder="MM/DD/YYYY"
            type="text"
            name="date"
            handleChange={handleChange}
          />
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
          <InputNumber
            id="quantity"
            placeholder="#"
            name="quantity"
            handleChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </FormGroup>
        <Button handleSubmit={handleSubmit}>Submit</Button>
      </Form>
    </>
  );
}

const AcceptContractList = ({ contractInfo, setContracts, contracts }) => {
  return (
    <>
      <div className="mb-3 bg-white rounded h-20 ml-20 mr-20 flex place-content-between shadow-md">
        <div>
          <p className="text-lg font-bold ml-4">{contractInfo.buyer}</p>
          <a href="https://sepolia.etherscan.io/${contractInfo.buyerAddress}">
            <p className="text-sm ml-4 font-bold">
              {contractInfo.buyerAddress}
            </p>
          </a>
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
          <AcceptButton
            contractInfo={contractInfo}
            setContracts={setContracts}
            contracts={contracts}
          />
          <RejectButton
            contractInfo={contractInfo}
            setContracts={setContracts}
            contracts={contracts}
          />
        </div>
      </div>
    </>
  );
};

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

const ContractList = ({contractInfo, showComponent, setCurrentContract}) => {

  return (
    <>
      <div className="mb-3 bg-white rounded h-20 ml-20 mr-20 flex place-content-between shadow-md">
        <div>
          <p className="text-lg font-bold ml-4">{contractInfo.buyer}</p>
          <a href="https://sepolia.etherscan.io/${contractInfo.buyerAddress}">
            <p className="text-sm ml-4 font-bold">
              {contractInfo.buyerAddress}
            </p>
          </a>
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
          <ModifyButton
            onClick={() => {
              showComponent("modify");
              setCurrentContract(contractInfo);
            }}
          />
          <TrackButton />
        </div>
      </div>
    </>
  );
}

function removeFromList(list, item) {
  return list.filter((listItem) => listItem !== item);
}

function replaceInList(list, item, newItem) {
  return list.map((listItem) => (listItem === item ? newItem : listItem));
}

const AcceptButton = ({ contractInfo, setContracts, contracts }) => {
  return (
    <a href="#">
      <button
        className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md mt-4 mb-4 mr-2"
        onClick={() => {
          let oldContract = contractInfo;
          contractInfo.status = "accepted";
          setContracts(replaceInList(contracts, oldContract, contractInfo));
        }}
      >
        Accept
      </button>
    </a>
  );
};

const RejectButton = ({ contractInfo, setContracts, contracts }) => {
  return (
    <a href="#">
      <button
        className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md mt-4 mb-4 mr-2"
        onClick={() => {
          setContracts(removeFromList(contracts, contractInfo));
        }}
      >
        Reject
      </button>
    </a>
  );
};

const SellerPortal = ({contracts, setContracts, showComponent, setCurrentContract, handleChange, handleSubmit}) => {
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
          Accept a Contract
        </label>
        <div className="on-going-contracts">
          {contracts.map((contract) =>
            contract.status == "unaccepted" ? (
              <AcceptContractList
                contractInfo={contract}
                setContracts={setContracts}
                contracts={contracts}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
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
        {contracts.map((contract) => (
          <ContractList
            contractInfo={contract}
            showComponent={showComponent}
            setCurrentContract={setCurrentContract}
          />
        ))}
      </div>
      <hr className="border-dotted" />
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
>>>>>>> d3194f17da7e6e1e9074cbecfccf693352074269

