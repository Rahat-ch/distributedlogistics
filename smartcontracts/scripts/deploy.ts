import { ethers } from "hardhat";

async function main() {
  const BillFactory = await ethers.getContractFactory("BillFactory");
  const billFactory = await BillFactory.deploy();

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
