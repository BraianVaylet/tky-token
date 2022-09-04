import { ethers } from "hardhat";

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", deployer.address);

  const LifeGuardAvatar = await ethers.getContractFactory("LifeGuardAvatar");
  const deployed = await LifeGuardAvatar.deploy();
  console.log("LifeGuardAvatar contract address: ", deployed.address);
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