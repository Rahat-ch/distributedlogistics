// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import { Bill } from "./Bill.sol";

contract BillFactory {
  Bill[] public bills;

  event BillCreated(
    address indexed creator,
    address billAddress
  );

  function createBill(
    address _buyer, 
    string memory _shippingAddress,
    string memory _originAddress, 
    uint256[] memory _inventoryIDs) 
    external returns (address) {
      Bill newBill = new Bill(msg.sender, _buyer, _shippingAddress, _originAddress, _inventoryIDs);
      bills.push(newBill);
      emit BillCreated(msg.sender, address(newBill));
      return address(newBill);
  }

  function getBills() external view returns (Bill[] memory) {
    return bills;
  }

}