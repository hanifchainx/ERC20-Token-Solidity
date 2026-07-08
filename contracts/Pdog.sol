// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pdog is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 100_000_000;

    constructor() ERC20("Pdog", "PGOD") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY * (10 ** 18));
    }
}
