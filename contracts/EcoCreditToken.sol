// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EcoCreditToken is ERC20 {
    address payable public EcoChainPlatformOwner;
    uint public tokenPrice;

    mapping(address => bool) public GovernmentAccounts;
    mapping(address => bool) public IndustryAccounts;

    constructor(uint256 initTokenPrice) ERC20("EcoCredit", "ECR") {
        EcoChainPlatformOwner = payable(msg.sender);
        tokenPrice = initTokenPrice;
        _mint(EcoChainPlatformOwner, 100 * 10**decimals());
    }

    modifier onlyPlatformOwner() {
        require(
            msg.sender != EcoChainPlatformOwner,
            "you are not a platform owner"
        );
        _;
    }

    function burnToken(address _address, uint _tokenCount) public {
        require(
            balanceOf(_address) >= _tokenCount * 10 ** decimals(),
            "token count is not enough"
        );
        _burn(_address, _tokenCount * 10**decimals());
    }

    //Gov functionalities
    function grantGovernmentPrivilege(address _account) public {
        GovernmentAccounts[_account] = true;
        _mint(msg.sender, 100 * 10**decimals());
    }

    modifier onlyGovernment() {
        require(
            GovernmentAccounts[msg.sender] == true,
            "only government authority can change the token price"
        );
        _;
    }

    function setTokenPrice(uint newPrice) public onlyGovernment {
        tokenPrice = newPrice;
    }

    // initial
    function initialAllowance(address _industry, uint _amount)
        public
        onlyGovernment
    {
        require(_industry != address(0), "Invalid addresses");
        require(
            IndustryAccounts[_industry] != true,
            "Seller must be an industry"
        );
        require(_amount > 0, "Amount must be greater than 0");
        _transfer(msg.sender, _industry, _amount * 10**decimals());
    }

    //Industry functionalities
    function grantIndustryPrivilege(address _account) public {
        IndustryAccounts[_account] = true;
    }

    modifier onlyIndustry() {
        require(
            IndustryAccounts[msg.sender] == true,
            "only industry authority can change the token price"
        );
        _;
    }

    function buyToken(
        address _to,
        uint _tokenCount,
        address payable _govAddress,
        uint _taxFee
    ) public payable onlyIndustry {
        require(tokenPrice == msg.value, "insufficient amount");
        _mint(_to, _tokenCount * 10**decimals());
        _govAddress.transfer(_taxFee);
    }

    // Carbon credit trading
    function tradeCarbonCredits(address _to, uint _amount)
        public
        onlyIndustry
    {
        require(_to != address(0), "Invalid address");
        require(_amount > 0, "Amount must be greater than 0");
        _transfer(msg.sender, _to, _amount * 10**decimals());
    }
}
