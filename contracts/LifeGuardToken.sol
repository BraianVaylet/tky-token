// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract LifeGuardToken is ERC20("Lifeguard Token", "LIGU") {
    uint cotizacionTokenEth;

    constructor(uint cotizacion) {
        cotizacionTokenEth = cotizacion;
    }
}
