const UserAuth_Contract = artifacts.require("UserAuth.sol");

module.exports = function(deployer) {
  deployer.deploy(UserAuth_Contract);
};