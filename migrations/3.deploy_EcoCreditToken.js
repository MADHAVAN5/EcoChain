const EcoCreditToken_Contract = artifacts.require("EcoCreditToken.sol");

module.exports = function(deployer) {
  deployer.deploy(EcoCreditToken_Contract, 10000000);
};