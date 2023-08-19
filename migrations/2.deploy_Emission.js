const Emission_Contract = artifacts.require("Emission.sol");

module.exports = function(deployer) {
  deployer.deploy(Emission_Contract);
};