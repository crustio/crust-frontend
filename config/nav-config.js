const currentHostname =
  window.location.hostname === "localhost" ? "" : window.location.hostname;
const outerDit = {
  "crust network": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  "crust network_zh": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  "crust wallet": `https://wiki.${currentHostname}/docs/en/crustWallet`,
  "crust wallet_zh": `https://wiki.${currentHostname}/docs/zh-CN/crustWallet`,
  "blockchain explorer": "https://crust.subscan.io/",
  "blockchain explorer_zh": "https://crust.subscan.io/",
  "token swap": "https://csm.crust.network/#/swap",
  "token swap_zh": "https://csm.crust.network/#/swap",
  "crust mainnet": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  "crust mainnet_en": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  "crust maxwell": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Fapi-maxwell.${currentHostname}#/`,
  "crust maxwellIndex": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/`,
  "crust maxwell_zh": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  "crust maxwell_en": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Frpc.${currentHostname}#/explorer`,
  github: "https://github.com/crustio",
  github_zh: "https://github.com/crustio",
  "build on crust": `https://wiki.${currentHostname}/docs/en/build101`,
  "build on crust_zh": `https://wiki.${currentHostname}/docs/en/build101`,
  "crust grants": "https://github.com/crustio/Crust-Grants-Program",
  "crust grants_zh": "https://github.com/crustio/Crust-Grants-Program",
  "crust bounty": "https://gitcoin.co/crustio",
  "crust bounty_zh": "https://gitcoin.co/crustio",
  "cru token": "https://csm.crust.network/#/swap",
  "cru token_zh": "https://csm.crust.network/#/swap",
  csmtoken: "https://csm.crust.network/#/cru/info",

  wiki: `https://wiki.${currentHostname}/zh-CN`,
  twitter: "https://twitter.com/CrustNetwork",
  medium: "https://medium.com/@CrustNetwork",
  telegram: "https://t.me/CrustNetwork",
  discord: "https://discord.gg/Jbw2PAUSCR",
  explorer: `http://explorer.${currentHostname}/`,
  "crust apps": `https://apps.${currentHostname}/?rpc=wss%3A%2F%2Fapi-maxwell.${currentHostname}#/explorer/`,
  "blockchain explorer": "https://crust.subscan.io/",
  "storage explorer": "https://crust.subscan.io/storage",
  "storage explorer_zh": "https://crust.subscan.io/storage",
  "crust cloud": "https://crustcloud.io/",
  "crust cloud_zh": "https://crustcloud.io/",
  "crust files": "https://crustfiles.io/",
  "crust files_zh": "https://crustfiles.io/",
  pdfBucket:
    "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/",
  extractDocs: "https://crust-data.oss-cn-shanghai.aliyuncs.com/external_docs/",
  download: `https://${currentHostname}/download/`,
  clouden: "https://github.com/crustio/crust/wiki/Crust-Cloud-Testing-Guide",
  cloud:
    "https://github.com/crustio/crust/wiki/Crust-Cloud-%E6%B5%8B%E8%AF%95%E6%89%8B%E5%86%8C",
  learnMore: "https://github.com/crustio/crust",
  wiki_en: `https://wiki.${currentHostname}/en`,
  wiki_zh: `https://wiki.${currentHostname}/zh-CN`,
  wallet_wiki_en: `https://wiki.${currentHostname}/docs/en/crustWallet`,
  wallet_wiki_zh: `https://wiki.${currentHostname}/docs/zh-CN/crustWallet`,
  "check our github_en": "https://github.com/crustio",
  "check our github": "https://github.com/crustio",
  "crust grants": "https://github.com/crustio/Crust-Grants-Program",
  "dev team": "https://www.linkedin.com/company/clouderium/mycompany/",
  "dcf grants": "https://www.decloudf.com?scrollto=description",
  csm_lightpaper_en:
    "https://ipfs.io/ipfs/QmYVRP7puUhGvQPuThHK2mtQgj2nUAoJYkBgXYxwiaC8Dq?filename=Crust%20Shadow%20lightpaper202105.pdf",
  csm_lightpaper_zh:
    "https://ipfs.io/ipfs/QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA?filename=Crust Shadow lightpaper中文版202105.pdf",
  rewards_plan_en:
    "https://crustnetwork.medium.com/crust-updates-kusama-parachain-slot-auction-rewards-2f6b32c682ec",
  rewards_plan_zh: "https://mp.weixin.qq.com/s/xtLCalg9fnvoierQTNFDfQ",
  "free storage": `https://fs.${currentHostname}`,
  mediamaterials:
    "https://ipfs.io/ipfs/Qme9uUpunio7heGDnnfsptYWzjLJgvD2hkbLGcvehPz5EK?filename=CrustLogo.zip",
  dotask: "https://www.coinask.io/n/crust",
  mainnet_plan_medium_zh: "https://www.yuque.com/qm003f/thyzgp/rs6o07",
  mainnet_plan_medium_en:
    "https://medium.com/crustnetwork/big-announcement-crust-mainnet-launch-timeline-c2bd2dc0d490",
  cru_claim_en: `https://wiki.${currentHostname}/docs/en/claims`,
  cru_claim_zh: `https://wiki.${currentHostname}/docs/zh-CN/claims`,
  analysis_of_economic_model_en:
    "https://ipfs.io/ipfs/QmPeoZuvhq8G5SQ95KJ35xGVLP3pHtF2hahrtFsjTaZbFk?filename=Analysis of Crust Network Economic Model.pdf",
  analysis_of_economic_model_zh:
    "https://ipfs.io/ipfs/QmTeYZVYucgF94cU9Bfuew6shWiTESYKYjDFntG9xK5Hru?filename=解析Crust Network经济模型.pdf",
  crust_mainnet: "https://swap.crust.network//#/swap",
  crust_mainnet_zh: "https://swap.crust.network//#/swap",

  Technology_WP:
    "https://ipfs.io/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t",

  enjoy_action:
    "https://twitter.com/CrustNetwork/status/1584431211417833472?s=20&t=C662BQ7jphV6l9D7F59b3Q",

  start_button1: `https://wiki.${currentHostname}/docs/en/build101`,
  start_button2: "https://github.com/crustio/free-storage#-apply-process",
  start_button3: `https://wiki.${currentHostname}/docs/en/build101`,
  start_button4: `https://wiki.${currentHostname}/docs/en/buildCrossChainSolution`,

  evm_storage:
    "https://ipfs.io/ipfs/QmSijA1yFvMxY2R6CxRzDNtrLA9h7v8hTxZqTvpgdSPsD3?filename=Crust EVM Storage.pdf",
  evm_storage_dev_wiki: `https://wiki.${currentHostname}/docs/en/evmBuildOverview`,
  "evm storage": "/evm",
};
const outerList = Object.keys(outerDit);

export { outerDit, outerList };
