// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EcoCreditToken is ERC20 {
    address payable public EcoChainPlatformOwner;
    uint public tokenPrice;

    constructor(uint initTokenPrice) ERC20("EcoCredit", "ECR") {
        EcoChainPlatformOwner = payable(msg.sender);
        tokenPrice = initTokenPrice;
        _mint(EcoChainPlatformOwner, 1 * 10 ** decimals());
    }

    modifier onlyPlatformOwner{
        require(msg.sender != EcoChainPlatformOwner,"you are not a platform owner");
        _;
    }

    function mintToken(address _to,uint _tokenCount) public payable {
        require(tokenPrice == msg.value,"insufficient amount");
        _mint(_to,_tokenCount * 10 ** decimals());
    }

    function burnToken(address _address,uint _tokenCount) public {
        require(balanceOf(_address) <= _tokenCount * 10 ** decimals(),"token count is not enough" );
        _burn(_address, _tokenCount * 10 ** decimals());
    }
}