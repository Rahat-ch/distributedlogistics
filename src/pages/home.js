import React from "react";
import Buyer from "./buyer";
import Seller from "./seller";
import Modify from "./modify";

const Sidebar = () => {
  const [contracts, setContracts] = React.useState([
    {
      buyer: "Big Pete",
      buyerAddress: "abc123",
      buyerPhysicalAddress: "123 Main St",
      paid: false,
      status: "accepted",
    },

    {
      buyer: "Medium Pete",
      buyerAddress: "abc123",
      buyerPhysicalAddress: "123 Main St",
      paid: true,
      status: "unaccepted",
    },

    {
      buyer: "Little Pete",
      buyerAddress: "abc123",
      buyerPhysicalAddress: "123 Main St",
      paid: false,
      status: "rejected",
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
  const [currentContract, setCurrentContract] = React.useState({id: "abc123"});
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
        {showBuyer && <Buyer contracts={contracts} setContracts={setContracts}/>}
        {showSeller && <Seller contracts={contracts} setContracts={setContracts} showComponent={showComponent} setCurrentContract={setCurrentContract}/>}
        {showModify && <Modify contracts={contracts} setContracts={setContracts} contract={currentContract}/>}
      </div>
    </div>
  );
};

export default Sidebar;
