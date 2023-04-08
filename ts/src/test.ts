import  {Wallet, Provider, ContractFactory} from "fuels"
import {readFileSync}  from "fs"
 
async  function  main() {
   // deploys the contract to the network

 const provider = new Provider("https://node-beta-2.fuel.network/graphql")
    const wallet = Wallet.fromMnemonic(( process.env.key as string), undefined, undefined, provider)
    // create a wallet from a mnemonic
    const byteCode = readFileSync("./bin.bin")
    // read the contract bytecode from a file
    const abi = JSON.parse(readFileSync("./abi.json").toString())
    // read the contract abi from a file
    let factory = new ContractFactory(byteCode, abi, wallet)
 
    // deploy the contract
    factory.deployContract()
}
main();