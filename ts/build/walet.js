"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fuels_1 = require("fuels");
var wallet = fuels_1.Wallet.generate();
console.log("address", wallet.address.toString());
console.log("private key", wallet.privateKey);
