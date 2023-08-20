const MintableMigrations = artifacts.require("./ERC20Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(MintableMigrations);
};
