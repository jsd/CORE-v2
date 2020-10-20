usePlugin("@nomiclabs/buidler-truffle5");
usePlugin('buidler-log-remover');

module.exports = {
  solc: {
    version: "0.5.0",
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  networks: {
    buidlerevm: {
      allowUnlimitedContractSize: true,
      settings: {
        evmVersion: "byzantium"
      }
    },
  },
  paths: {
    sources: "./contracts/v500",
  }
};
