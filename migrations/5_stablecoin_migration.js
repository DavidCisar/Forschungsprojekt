const StableCoin = artifacts.require("StableCoin");

module.exports = function (deployer) {
  deployer.deploy(StableCoin, "Euro", "EUR");
};
