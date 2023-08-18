const Emission_Contract = artifacts.require("Emission");

module.exports = function(deployer) {
  deployer.deploy(Emission_Contract);
};