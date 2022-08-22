import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const cotizacion = 100;
  const lockedAmount = ethers.utils.parseEther("1"); //> Financio el contrato.

  const tokenContractFactory = await ethers.getContractFactory("Token");
  const tokenContract = await tokenContractFactory.deploy(cotizacion);
  await tokenContract.deployed();

  console.log("Token contract address: ", tokenContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();