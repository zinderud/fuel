const { Wallet } = require("fuels");

const wallet = Wallet.generate();

console.log("address", wallet.address.toString());
console.log("private key", wallet.privateKey);
//fuel1tnvn9lum9g67jfz96l0q33n7pujexau5lkgwak9xky48j9p8eaqsgfgyd7