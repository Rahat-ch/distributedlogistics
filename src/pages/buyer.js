import React, { useState } from "react";
import Sidebar from "@/pages/home";

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
        onClick={() => {setContracts(removeFromList(contracts, contractInfo))}}
      >
        Reject
      </button>
    </a>
  );
};

const AcceptContractList = ({ contractInfo, setContracts, contracts }) => {
  return (
    <>
      <div className="mb-3 bg-white rounded h-20 ml-20 mr-20 flex place-content-between shadow-md">
        <div>
          <p className="text-lg font-bold ml-4">{contractInfo.products[0]}</p>
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
          <AcceptButton contractInfo={contractInfo} setContracts={setContracts} contracts={contracts}/>
          <RejectButton contractInfo={contractInfo} setContracts={setContracts} contracts={contracts}/>
        </div>
      </div>
    </>
  );
};

const ContractList = ({ contractInfo }) => {
  return (
    <>
      <div className="mb-3 bg-white rounded h-20 ml-20 mr-20 flex place-content-between shadow-md">
        <div>
          
            <p className="text-lg font-bold ml-4">{contractInfo.products[0]}</p>
          <a href="https://sepolia.etherscan.io/${contractInfo.buyerAddress}">
          <p className="text-sm ml-4 font-bold">{contractInfo.buyerAddress}</p></a>
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
          <TrackButton />
        </div>
      </div>
    </>
  );
};

const SellerPortal = ({contracts, setContracts, handleChange}) => {
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
        {contracts.map((contract) =>
          contract.status == "accepted" ? (
            <ContractList
              contractInfo={contract}
            />
          ) : (
            <></>
          )
        )}
      </div>
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
