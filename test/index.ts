import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";

const toWei = (num: BigNumber) => ethers.utils.parseEther(num.toString());
const fromWei = (num: BigNumber) => ethers.utils.formatEther(num)


describe("Greeter", function () {
  // contract
  let vestingToken: Contract;
  // test account
  let deployer: SignerWithAddress, addr1: SignerWithAddress, addr2: SignerWithAddress;
  // before
  beforeEach(async function () {
    const VestingContract = await ethers.getContractFactory("DMTToken");
    [deployer, addr1, addr2] = await ethers.getSigners();
    vestingToken = await VestingContract.deploy();
  })
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
