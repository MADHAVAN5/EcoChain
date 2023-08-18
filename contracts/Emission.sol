// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Emission {
    uint256 public dataCount = 0;
    
    struct Data {
        address wallet_id;
        string carbon;
        string date;
        uint fees;
    }

    event EmissionData(address wallet_id, string carbon, string date, uint fees);

    mapping(uint256 => Data) public emmis;

    function createEmissionData(address _walletID, string memory _carbon, string memory _date, uint _fees) public {
        dataCount++;
        emmis[dataCount] = Data(_walletID, _carbon, _date, _fees);
        emit EmissionData(_walletID, _carbon, _date, _fees);
    }

    receive() external payable {
        
    }

}