import React from "react";
import Buyer from "./buyer";
import Seller from "./seller";

import SellerImage from "./icons/seller.svg";

const Sidebar = () => {
  function hideComponent(nameComponent) {
  switch (nameComponent) {
    case "seller":
      setSeller(false);
      break;
    case "buyer":
      setBuyer(false);
      break;
    case "tracking":
      setTracker(false);
      break;
    default:
      null;
}
  }

    function showComponent(nameComponent) {
      switch (nameComponent) {
        case "seller":
          setSeller(true);
          setBuyer(false);
          break;
        case "buyer":
          setBuyer(true);
          setSeller(false);
          break;
        case "tracking":
          setTracker(true);
          setTracker(false);
        default:
          null;
      }
    }

  const [showSeller, setSeller] = React.useState(false);
  const [showBuyer, setBuyer] = React.useState(false);
  const [showTracker, setTracker] = React.useState(false);
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
                <img src={SellerImage} />
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
        {showBuyer && <Buyer />}
        {showSeller && <Seller />}
      </div>
    </div>
  );
};

export default Sidebar;
