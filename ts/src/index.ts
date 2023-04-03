/* const { Wallet } = require("fuels");

const wallet = Wallet.generate();

console.log("address", wallet.address.toString());
console.log("private key", wallet.privateKey);
//fuel1tnvn9lum9g67jfz96l0q33n7pujexau5lkgwak9xky48j9p8eaqsgfgyd7 */

import { Provider, Contract, ContractFactory, Wallet } from "fuels";
 
// Byte code generated using: forc build
import { readFileSync } from "fs";
import { join } from "path";
import abi from "./abi.json";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
  async function test() {
    const provider = new Provider('https://node-beta-2.fuel.network/graphql');
     
 const wallet =   Wallet.fromSeed((process.env.key as string)  ); // private key with coins
 console.log(1);
const byteCode = readFileSync(
  join(__dirname, './../bin.bin')
);
console.log(2);
const contract = await new ContractFactory(byteCode, abi, wallet).deployContract();
//const contract = await this.factory.deployContract(factory);
console.log(contract.id);
 
}  

test();
/* import { Provider, ContractFactory } from 'fuels';
import { generateTestWallet } from '@fuel-ts/wallet/test-utils';
import { readFileSync } from "fs";
import { join } from "path"; */
    // basic setup

 
/* 
  const provider = new Provider('http://127.0.0.1:4000/graphql');
  const wallet = await generateTestWallet(provider, [[5_000_000, NativeAssetId]]);

  // load the byteCode of the contract, generated from Sway source
  const byteCode = readFileSync(
    join(__dirname, '../test-projects/storage-test-contract/out/debug/storage-test.bin')
  );

  // load the JSON abi of the contract, generated from Sway source
  const abi = JSON.parse(
    readFileSync(
      join(__dirname, '../test-projects/storage-test-contract/out/debug/storage-test-abi.json')
    ).toString()
  );

  // send byteCode and ABI to ContractFactory to load
  const factory = new ContractFactory(byteCode, abi, wallet);

  */