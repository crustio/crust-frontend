<template>
  <default/>
    <Header class="" />
  <div id="content" class="main">
    <div class="bar_bg"></div>
    <section class="section1">
      <img class="bg" :src="imageSource" />
      <div class="content">
        <div class="slog">
          Scaling the storage of<br />EVM-compatible<br />ecosystem
        </div>
        <div class="btn_group">
          <div class="btn" @click="jumbTo('evm_storage')">Read the Docs</div>
          <a class="btn" href="https://crustfiles.io/" target="_blank"
            >Upload your files</a
          >
        </div>
      </div>
    </section>
    <section class="section2">
      <div class="title">Crust EVM storage protocol</div>
      <div class="content">
        <div class="left">
          <img :src="currentEvm.img" />
          <div class="item item1" @click="onClickEvm(0)" />
          <div class="item item2" @click="onClickEvm(1)" />
          <div class="item item3" @click="onClickEvm(2)" />
        </div>
        <div class="right">
          <div class="evm-title">{{ currentEvm.tit }}</div>
          <div class="evm-content">{{ currentEvm.content }}</div>
        </div>
      </div>
    </section>
    <section class="section3">
      <div class="title">Key Features</div>
      <div class="content features">
        <div class="item" v-for="(item, index) in features" :key="index">
          <img class="icon" :src="item.icon" />
          <div class="feat-tit">{{ item.tit }}</div>
          <div class="feat-content">{{ item.content }}</div>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="content">
        <div class="app">
          <div class="infos">
            <div class="app-tit">
              Upload your first file to EVM storage using Crustfiles
            </div>
            <div class="app-content">
              Store, manage, share, and own your data in a decentralized way,
              with a smooth user experience.
            </div>
            <a class="app-btn" href="https://crustfiles.io/" target="_blank"
              >Try it now</a
            >
          </div>
          <img class="app-img1" :src="app1" />
        </div>
        <div class="app">
          <img class="app-img2" :src="app2" />
          <div class="infos">
            <div class="app-tit">Mint W3Bucket on Crust Cloud</div>
            <div class="app-content">
              Crust Cloud provide S3-like storage service for professional users
            </div>
            <a class="app-btn" href="https://crustcloud.io/" target="_blank"
              >Try it now</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="section5">
      <div class="title">EVM storage is now available on</div>
      <div class="content">
        <img class="img-chain" :src="chain4" />
        <div class="dev-infos">
          <div class="dev-head">
            <div class="dev-tit">EVM Storage API</div>
            <div class="dev-tip" @click="jumbTo('evm_storage_dev_wiki')">
              <img class="icon" :src="dev" />
              <span>Dev Guidance</span>
            </div>
          </div>
          <div class="code-layout" v-html="code" />
          <!-- <img class="img-code" :src="require('~/assets/images/code.jpg')" /> -->
        </div>
      </div>
    </section>
    <section class="section6">
      <div class="title">More possibilities enabled by EVM storage</div>
      <div class="grid content">
        <div class="item" v-for="(item, index) in possList" :key="index">
          <img class="icon" :src="item.icon" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </section>
    <div class=""/>
    <newFooter />
  </div>
</template>
<script>
import evm1 from "./assets/images/evm-1.png"
import evm2 from "./assets/images/evm-2.png"
import evm3 from "./assets/images/evm-3.png"
import feat1 from "./assets/images/feat1.svg"
import feat2 from "./assets/images/feat2.svg"
import feat3 from "./assets/images/feat3.svg"
import poss1 from "@/assets/images/poss1.png";
import poss2 from "@/assets/images/poss2.png";
import poss3 from "@/assets/images/poss3.png";
import poss4 from "@/assets/images/poss4.png";
import poss5 from "@/assets/images/poss5.png";
import poss6 from "@/assets/images/poss6.png";
import home_bg from  "@/assets/images/home_bg.svg";
import app1 from  "@/assets/images/app1.jpg";
import app2 from  "@/assets/images/app2.jpg";
import chain4 from  "@/assets/images/chain4.png";
import dev from  "@/assets/images/dev.svg";




const evms = [
  {
    img: evm1,
    tit: "The Contract",
    content: `"The Contract" is a storage smart contract implemented by Crust Network within the Ethereum Virtual Machine (EVM) ecosystem, using the Solidity programming language. It provides developers with a storage interface that is natively compatible with the InterPlanetary File System (IPFS). Simultaneously, it offers tamper-proof, perpetual storage guaranteed by the Crust protocol, a payment settlement mechanism based on on-chain oracles, and an upgradable proxy mechanism. This arrangement seamlessly integrates Crust Network's decentralized storage resources into the entire EVM ecosystem.`,
  },
  {
    img: evm2,
    tit: "Orderer",
    content: `"Orderer" as a storage parsing service within the Crust Network 2.0 protocol, establishes a crucial bridge between EVM storage contracts and the Crust main network. It monitors the Storage Events from "The Contract" across various EVM chains, interprets the recorded order information, and bridges it to the Crust main network. Worth noting is that the Orderer in the Crust Network 2.0 protocol employs a semi-permissioned structure. With the consent of Crust Tech Commit, third-party Orderer services can freely join and exit, uniformly providing cross-chain storage parsing services for EVM contracts.`,
  },
  {
    img: evm3,
    tit: "Connector on Crust Network",
    content: `"Connector" is an important extension in the Crust Network 2.0 protocol DSM (Decentralized Storage Marketplace). It adopts a design similar to the RGB protocol to record EVM cross-chain storage information on the Crust mainnet. The Connector is also closely integrated with the Crust Developer Toolkit, which makes it easier for developers to parse contract interaction fields from the EVM chain when building Crust layer 2 applications.`,
  },
]


const features = [
  {
    icon: feat1,
    tit: "Petabyte-level capacity",
    content: `With the power of Crust Network's petabyte-level storage capacity, more possibilities are brought to the EVM-compatible ecosystem.`,
  },
  {
    icon: feat2,
    tit: "Optional permanent storage",
    content: `According to different usage requirements, EVM storage provides temporary and permanent storage options.`,
  },
  {
    icon: feat3,
    tit: "EVM Native Smart-contract",
    content: `EVM storage can be easily integrated into the thriving smart contract-enabled EVM-compatible ecosystem.`,
  },
]

const possList = [
  {
    icon: poss1,
    name: "Dapp Hosting",
  },
  {
    icon: poss2,
    name: "Personal Cloud",
  },
  {
    icon: poss3,
    name: "Blockchain storage",
  },
  {
    icon: poss4,
    name: "Data Market",
  },
  {
    icon: poss5,
    name: "Social network",
  },
  {
    icon: poss6,
    name: "NFT metadata storage",
  },
];

const code = `<span class="docs">// Take order on Ethereum as an example</span>
<span>const</span> { <span>ethers</span> } = require("ethers");

<span class="docs">// 1. Get signer</span>
<span>const</span> provider = new ethers.providers.<span class="fun">JsonRpcProvider</span>("https://mainnet.infura.io/v3/");
<span>const</span> signer = new ethers.<span class="fun">Wallet</span>(YOUR_PRIVATE_KEY, provider);

<span class="docs">// 2. Get storage contract instance</span>
<span>const</span> StorageOrderABI = [
  "function getPrice(uint size, bool isPermanent) public view returns (uint)",
  "function placeOrder(string memory cid, uint size, bool isPermanent) external payable",
  "function placeOrderWithNode(string memory cid, uint size, address nodeAddress, bool isPermanent) public payable"
]
<span>const</span> storageOrder = new ethers.<span class="fun">Contract</span>("0xE391613d2056e47F74ED5eF1d443d4CDB21AAAd9", StorageOrderABI, signer);

<span class="docs">// 3. Get price by size and isPermanent</span>
<span>const</span> fileCid = "QmfH5zLmBtptUxRSGWazaumGwSsCW3n6P164eRXpbFatmJ";
<span>const</span> fileSize = 5246268;
<span>const</span> isPermanent = false;
<span>const</span> price = <span>await</span> storageOrder.<span class="fun">getPrice</span>(fileSize, isPermanent);

<span class="docs">// 4. Place storage order</span>
<span>await</span> storageOrder.<span class="fun">placeOrder</span>(fileCid, fileSize, isPermanent, {value: price});
`

export default {
  data() {
    return {
      evms: evms,
      currentEvm: evms[0],
      features: features,
      possList: possList,
      code: code,
      imageSource: home_bg,
      app1,
      app2,
      chain4,
      dev
    }
  },
  methods: {
    onClickEvm(index) {
      this.currentEvm = this.evms[index]
    },
    jumbTo(url){
      window.open(url, '_blank')
    }
  },
}
</script>

<style lang="scss">
.main {
  .bar_bg {
    background: #141414;
    height: 50px;
  }
  .title {
    color: #1f1f1f;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 60px;
  }

  .content {
    max-width: 1200px;
    width: 84%;
    margin: auto;
  }

  .section1 {
    height: 738px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .bg {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        135deg,
        #ff5f53,
        #fc7823,
        #ff9040,
        #ff9d3b,
        #ffa139
      );
    }
    .content {
      z-index: 1;
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 60px;
      .slog {
        color: #fff;
        font-size: 48px;
        font-weight: 600;
        line-height: normal;
      }
      .btn_group {
        display: flex;
        gap: 20px;
        .btn {
          padding: 12px 30px;
          background: white;
          border-radius: 8px;
          color: #fc7823;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }

  .section2 {
    /* height: 788px; */
    width: 100%;
    padding: 60px 20px 120px 20px;
    background: white;
    .content {
      display: flex;
      gap: 9.0625rem;
      align-items: center;
      margin: auto;

      .left {
        aspect-ratio: 383/515;
        flex-shrink: 1;
        flex: 1;
        max-width: 383px;
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;

        img {
          z-index: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .item {
          position: absolute;
          flex-shrink: 0;
          z-index: 1;
          width: 67.88%;
          aspect-ratio: 1;
          cursor: pointer;
          /* background: rgba($color: #000000, $alpha: 0.3); */
          transform: rotateX(54deg) rotateZ(45deg);
          &.item1 {
            z-index: 3;
            top: 7.76%;
          }
          &.item2 {
            z-index: 2;
            top: 33%;
          }
          &.item3 {
            top: 58.25%;
            z-index: 1;
          }
        }
      }
      .right {
        flex-shrink: 3;
        display: flex;
        flex: 3;
        flex-direction: column;
        gap: 1.25rem;
        .evm-title {
          color: #000;
          font-size: 24px;
          font-weight: 600;
          line-height: normal;
        }
        .evm-content {
          color: #666;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  .section3 {
    /* height: 788px; */
    width: 100%;
    padding: 148px 20px;
    background: #fdf7f3;
    .features {
      display: flex;
      gap: 40px;
      justify-content: center;
      .item {
        display: inline-flex;
        flex-direction: column;
        padding: 60px 20px;
        width: 360px;
        align-items: center;
        gap: 10px;
        border-radius: 16px;
        background: #fff;
        .icon {
          width: 80px;
          aspect-ratio: 1;
        }
        .feat-tit {
          color: #000;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          line-height: normal;
        }
        .feat-content {
          margin-top: 10px;
          color: #666;
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  .section4 {
    background: white;
    padding: 80px 20px;
    .content {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 100px;

      .app {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 120px;
        .app-img1 {
          flex: 1;
          width: 0;
          object-fit: contain;
          max-width: 516px;
        }
        .app-img2 {
          flex: 1;
          width: 0;
          object-fit: contain;
          max-width: 578px;
        }
        .infos {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          .app-tit {
            color: #1f1f1f;
            font-size: 48px;
            font-weight: 600;
            line-height: normal;
          }
          .app-content {
            color: #000;
            font-size: 24px;
            font-weight: 400;
            line-height: normal;
          }
          .app-btn {
            display: inline-flex;
            white-space: nowrap;
            cursor: pointer;
            width: min-content;
            padding: 12px 30px;
            align-items: flex-start;
            gap: 10px;
            border-radius: 8px;
            background: #fc7823;
            color: #fff;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
  }
  .section5 {
    background: #fdf7f3;
    padding: 80px 20px 120px 20px;

    .content {
      display: flex;
      margin: auto;
      justify-content: space-between;
      gap: 20px;
      .img-chain {
        flex: 1;
        width: 0;
        max-width: 338px;
        object-fit: contain;
      }

      .dev-infos {
        width: 0;
        max-width: 580px;
        flex: 2;
        .dev-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .dev-tit {
            color: #000;
            font-size: 24px;
            font-weight: 600;
            line-height: normal;
          }
          .dev-tip {
            display: flex;
            gap: 20px;
            cursor: pointer;
            .icon {
              width: 20px;
              object-fit: contain;
            }
            .text {
              color: #fc7823;
              font-size: 18px;
              font-weight: 400;
              line-height: normal;
            }
          }
        }
      }

      .code-layout {
        overflow: auto;
        margin-top: 20px;
        padding: 10px;
        border-radius: 8px;
        border: 2px solid #e5e5e5;
        background: #fff;
        max-height: 363px;
        width: 100%;
        font-size: 13px;
        white-space: break-spaces;
        span {
          color: #c0392b;
        }
        .docs {
          color: #27ae60 !important;
        }
        .fun {
          color: #2980b9 !important;
        }
      }
    }
  }

  .section6 {
    background: white;
    padding: 80px 20px;
    .content {
      margin: auto;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(380px,1fr));

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        padding: 35px 20px;
        color: #fc7823;
        font-size: 24px;
        font-weight: 600;
        line-height: normal;
        border-radius: 8px;
        background: #fdf7f3;
        .icon {
          width: 50px;
          aspect-ratio: 1;
          object-fit: contain;
        }
      }
    }
  }
}
@media screen and (max-width: 1140px) and (min-width: 640px) {
  html {
    font-size: 14px !important;
  }
}
@media screen and (max-width: 640px) and (min-width: 320px) {
  html {
    font-size: 12px !important;
  }
}
@media screen and (max-width: 960px) {
  .main {
    .title {
      font-size: 8vw !important;
      line-height: 1.2 !important;
    }
    .content {
      width: calc(100% - 40px) !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 20px !important;
      .left {
        width: 300px !important;
      }
      img {
        width: auto !important;
        max-width: 100% !important;
      }
      .app {
        gap: 10px !important;
        align-self: flex-start;
        flex-direction: column !important;
        align-items: flex-start !important;
      }
      .app:nth-child(2){
        flex-direction: column-reverse !important;
      }

      .dev-infos {
        width: 100% !important;
      }


    }
  }
}
</style>
