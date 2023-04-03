import { Provider, Contract, ContractFactory } from "fuels";
// Byte code generated using: forc build
import bytecode from "./bin.bin";
import abi from "./abi.json";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
  async function test() {
const wallet = new Wallet(process.env.key); // private key with coins

const contract = await new ContractFactory(bytecode, abi, wallet).deployContract();
//const contract = await this.factory.deployContract(factory);
console.log(contract.id);
 
}