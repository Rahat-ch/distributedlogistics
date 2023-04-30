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
    const newContract = {buyer: "Peter Li", buyerAddress: currentAccount, buyerPhysicalAddress: buyerPhysicalAddress, returnAddress: returnAddress, date: date, products: ["Billiard Table"], quantity: quantity, description: description, paid: false, status: "unaccepted"};
    setContracts([...contracts, newContract]);
    e.preventDefault();
      createBill();
  
}
  const [contracts, setContracts] = React.useState([
    {
      buyer: "James Hill",
      buyerAddress: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Barrel Chair", "Billiard Table"],
      quantity: 2,
      description: "Some really really good furniture.",
      paid: false,
      status: "accepted",
    },

    {
      buyer: "Koval Smith",
      buyerAddress: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Wicker Accent Cabinet", "Bathroom Vanity"],
      quantity: 2,
      description: "Amazing furniture.",
      paid: true,
      status: "unaccepted",
    },

    {
      buyer: "Tim Cook",
      buyerAddress: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Shoe Storage", "Leather Sofa"],
      quantity: 5,
      description: "Fantastic furniture.",
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
      quantity: 8,
      description: "Couldn't be better furniture.",
      paid: false,
      status: "unaccepted",
    },

    {
      buyer: "Steve Jobs",
      buyerAddress: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
      buyerPhysicalAddress: "123 Main St",
      returnAddress: "321 Walnut St",
      date: "12/12/2020",
      products: ["Shoe Storage", "Leather Sofa"],
      quantity: 2,
      description: "The next iPad of furniture.",
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
          <Buyer contracts={contracts} 
          setContracts={setContracts}
          showComponent={showComponent}
          setCurrentContract={setCurrentContract}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
           />
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
