const RoleMigrations = artifacts.require("./Roles.sol");

module.exports = function(deployer) {
  deployer.deploy(RoleMigrations);
};
