import React, { useContext } from "react";
import Buyer from "./buyer";
import Seller from "./seller";
import Modify from "./modify";

import { BillingContext } from "../context/BillingContext";

const Sidebar = () => {
  const { connectMetamask, currentAccount, contractData, createBill, handleChange } = useContext(BillingContext);
  if (!currentAccount) connectMetamask();

  const handleSubmit = (e) => {
    const {buyerPhysicalAddress, returnAddress, date, quantity, description} = contractData;
    e.preventDefault();
      createBill();
  
}
  const [contracts, setContracts] = React.useState([
    {
      buyer: "Big Pete",
      buyerAddress: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Barrel Chair", "Billiard Table"],
      quantity: 2,
      description: "some jargon",
      paid: false,
      status: "accepted",
    },

    {
      buyer: "Medium Pete",
      buyerAddress: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Wicker Accent Cabinet", "Bathroom Vanity"],
      quantity: 2,
      description: "some jargon",
      paid: true,
      status: "unaccepted",
    },

    {
      buyer: "Little Pete",
      buyerAddress: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Shoe Storage", "Leather Sofa"],
      quantity: 2,
      description: "some jargon",
      paid: false,
      status: "rejected",
    },

    {
      buyer: "James Bond",
      buyerAddress: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Shoe Storage", "Leather Sofa"],
      quantity: 2,
      description: "some jargon",
      paid: false,
      status: "accepted",
    },

    {
      buyer: "Steve Jobs",
      buyerAddress: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Shoe Storage", "Leather Sofa"],
      quantity: 2,
      description: "some jargon",
      paid: true,
      status: "accepted",
    },
  ]);

  function showComponent(nameComponent) {
    switch (nameComponent) {
      case "seller":
        setSeller(true);
        setBuyer(false);
        setTracker(false);
        setModify(false);
        break;
      case "buyer":
        setBuyer(true);
        setSeller(false);
        setTracker(false);
        setModify(false);
        break;
      case "tracking":
        setTracker(true);
        setBuyer(false);
        setSeller(false);
        setTracker(false);
      case "modify":
        setModify(true);
        setBuyer(false);
        setSeller(false);
        setTracker(false);
      default:
        null;
    }
  }

  const [showSeller, setSeller] = React.useState(false);
  const [showBuyer, setBuyer] = React.useState(false);
  const [showTracker, setTracker] = React.useState(false);
  const [showModify, setModify] = React.useState(false);
  const [currentContract, setCurrentContract] = React.useState({
    id: "abc123",
  });
  return (
    <div className="fixed inset-0 flex z-50">
      <div className="flex-shrink-0 w-64 bg-gray-800">
        <div className="h-full py-4 px-6 flex flex-col justify-between">
          <div>
            <div className="text-white font-semibold text-lg mb-6">
              Distributed Logistics
            </div>
            <nav>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
                onClick={() => showComponent("seller")}
              >
                Seller
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
                onClick={() => showComponent("buyer")}
              >
                Buyer
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded"
              >
                Carrier
              </a>
            </nav>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; Distributed Logistics
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {showBuyer && (
          <Buyer contracts={contracts} setContracts={setContracts} />
        )}
        {showSeller && (
          <Seller
            contracts={contracts}
            setContracts={setContracts}
            showComponent={showComponent}
            setCurrentContract={setCurrentContract}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        {showModify && (
          <Modify
            contracts={contracts}
            setContracts={setContracts}
            contract={currentContract}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
