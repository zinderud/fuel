
//fuel1tnvn9lum9g67jfz96l0q33n7pujexau5lkgwak9xky48j9p8eaqsgfgyd7 */

import { Provider, Contract, ContractFactory, Wallet, NativeAssetId, CreateTransactionRequest, BN } from "fuels";
import { generateTestWallet } from '@fuel-ts/wallet/test-utils';

// Byte code generated using: forc build
import { readFileSync } from "fs";
import { join } from "path";
import abi from "./abi.json";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
  async function test() {
    const provider = new Provider('https://beta-3.fuel.network/graphql');
   const wallet =   Wallet.fromPrivateKey(( process.env.key as string),provider); // private key with coins
    //const wallet = await generateTestWallet(provider, [[5_000_000, NativeAssetId]]);
    console.log("address", wallet.address.toString());
console.log("private key", wallet.privateKey);
  console.log(wallet);
  console.log(provider);
 console.log(1);
const byteCode = readFileSync(
  join(__dirname, './../bin.bin')
);
console.log(2);
const cr:CreateTransactionRequest=new CreateTransactionRequest()
cr.gasPrice=new BN(1);
const contract = await new ContractFactory(byteCode, abi, wallet);
const contracta = await contract.deployContract({gasPrice:new BN(1)})
 console.log(contracta.id);
 
}  

test();
 