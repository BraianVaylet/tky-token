// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Token is ERC20("ThankYou Token", "TKY") {
    uint cotizacionTokenEth;

    constructor(uint cotizacion) {
        cotizacionTokenEth = cotizacion;
    }
}
