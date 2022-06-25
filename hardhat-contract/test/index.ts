import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import { beforeEach } from "mocha";

const toWei = (num: BigNumber) => ethers.utils.parseEther(num.toString())
const fromWei = (num: BigNumber) => ethers.utils.formatEther(num)

const BaseData = {}

const privateKey = process.env.PRIVATE_KEY

describe("", function () {

  let nft_contract: Contract
  let deployer: SignerWithAddress, addr1: SignerWithAddress, addr2: SignerWithAddress

  beforeEach(async function () {
  })
  describe("", function () {
  })
});
