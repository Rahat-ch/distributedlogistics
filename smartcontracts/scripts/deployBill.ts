import { ethers } from "hardhat";

async function main() {
  const BillFactory = await ethers.getContractFactory("TestBill");
  const billFactory = await BillFactory.deploy("0x322Af0da66D00be980C7aa006377FCaaEee3BDFD", "0xd2f8ed343386FB042178c7e133A837CB8043d0dc", "123 imaginary lane", "123 other imaginary lane");

  await billFactory.deployed();

  console.log(
    `Contract deployed to ${billFactory.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
