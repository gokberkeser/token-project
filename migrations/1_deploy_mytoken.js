const myCryptoContract = artifacts.require("MyToken");

module.exports = function(deployer) {
   deployer.deploy(myCryptoContract);
};