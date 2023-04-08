import { Provider, Contract, ContractFactory, Wallet, NativeAssetId, CreateTransactionRequest, BN } from "fuels";

const wallet = Wallet.generate();

console.log("address", wallet.address.toString());
console.log("private key", wallet.privateKey);
