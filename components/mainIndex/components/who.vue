<template>
  <div class="using-crust">
    <div class="using-crust-block">
      <div :class="{'using-title':true,iscenter:$store.state.locale === 'zh'?true:false}" v-html="$t(`who.title`)"></div>

      <div class="using-pc using-tab">
        <div
          @click="setActiveTab(index)"
          :class="{
            'using-tab-item': true,
            'using-tab-item-active': activeTab == index,
          }"
          v-for="(item, index) in listData"
          :key="index"
        >
          <span> {{ $t(`who.${item.name}`) }}</span>
        </div>
      </div>
      <div class="using-pc using-intro">
        <div class="using-intro-title">
          {{ $t(`who.${listData[activeTab].title}`) }}
        </div>
        <div class="using-intro-info" v-html=" $t(`who.${listData[activeTab].info}`)">
          <!-- {{ }} -->
        </div>
        <div class="using-intro-how-to" v-html=" $t(`who.${listData[activeTab].howTo}`)"></div>
      </div>
      <div class="using-pc swiperbox">
        <swiper
          class="swiper"
          ref="mySwiper"
          v-if="swiperVisable"
          :options="swiperOptions2"
        >
          <swiper-slide
            v-for="(item, index) in listData[activeTab].children"
            :key="index"
            class="image-wrapper"
          >
            <div class="using-content" ref="using-content">
              <template>
                <div class="using-content-item">
                  <div class="using-content-item-logo">
                    <img
                      :src="item.img"
                      alt=""
                      :style="item.style ? item.style : ''"
                      @click="routeTo(item.url)"
                    />
                  </div>
                  <div
                    class="using-content-item-info"
                    v-html="$t(`who.${item.title}`)"
                  ></div>
                  <div
                    class="using-content-item-button"
                    v-html="$t(`who.${item.button}`)"
                    @click="routeTo(item.createUrl ? item.createUrl : item.url)"
                  ></div>
                  <div
                    class="using-content-item-create"
                    v-if="item.create"
                    v-html="$t(`who.${item.create}`)"
                  ></div>
                </div>
              </template>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>
      <div class="using-pc using-trun usecase-prev2">
        <img src="../../../assets/img/arrow.svg" alt="" />
      </div>
      <div class="using-pc using-transition usecase-next2">
        <img src="../../../assets/img/arrow@3x.png" alt="" />
      </div>
      <div class="using-mobile">
        <div
          class="using-swiper-item"
          v-for="(item, index) in listData"
          :key="index"
        >
          <div
            class="using-swiper-item-name"
            v-html="$t(`who.${item.name}`)"
          ></div>
          <div
            class="using-swiper-item-title"
            v-html="$t(`who.${listData[activeTab].title}`)"
          ></div>
          <div
            class="using-swiper-item-subTitle"
            v-html="$t(`who.${listData[activeTab].info}`)"
          ></div>
          <swiper class="swiper" ref="swiper" :options="swiperOptions2">
            <swiper-slide
              v-for="(item1, index1) in item.children"
              :key="index1"
              class="image-wrapper"
            >
              <div class="using-content" ref="using-content">
                <template>
                  <div class="using-content-item">
                    <div class="using-content-item-logo">
                      <img
                        :src="item1.img"
                        alt=""
                        :style="item1.style ? item1.style : ''"
                        @click="routeTo(item1.url)"
                      />
                    </div>
                    <div
                      class="using-content-item-info"
                      v-html="$t(`who.${item1.title}`)"
                    ></div>
                    <div
                      class="using-content-item-button"
                      v-html="$t(`who.${item1.button}`)"
                      @click="
                        routeTo(item1.createUrl ? item1.createUrl : item1.url)
                      "
                    ></div>
                    <div
                      class="using-content-item-create"
                      v-if="item1.create"
                      v-html="$t(`who.${item1.create}`)"
                    ></div>
                  </div>
                </template>
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from "@/assets/img/arrow.svg?raw"
import triangle from "@/assets/img/triangle.svg?raw"
var timer
export default {
  data() {
    return {
      swiperVisable: true,
      swiperOptions2: {
        loop: true,
        slidesPerView: "auto",
        autoplay: {
          disableOnInteraction: false,
        },
        initialSlide: 1,
        centeredSlides: false,
        centeredSlidesBounds: false,
        navigation: {
          nextEl: ".usecase-next2",
          prevEl: ".usecase-prev2",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // breakpoints: {
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   800: {
        //     slidesPerView: 2,
        //   },
        //   1000: {
        //     slidesPerView: 3,
        //   },
        //   1280: {
        //     slidesPerView: 3,
        //   },
        // },
      },
      icons: [arrow, triangle],
      activeTab: 0,
      active: 1,
      listData: [
        {
          name: "tab1",
          title: "tabTitle1",
          info: "tabInfo1",
          howTo: 'howTo1',
          children: [
            {
              img: require(`../../../assets/img/5-Who are using Crust/Severless Dapp/UNISWAP@3x.png`),
              title: "dapp1",
              button: "learn",
              style: "width: 182px;height: 41px;",
              url: "https://uniswap.org/",
              createUrl:
                "https://medium.com/crustnetwork/decentralized-websites-with-ipfs-and-crust-9435b5810ae1",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/Severless Dapp/AAVE@3x.png`),
              title: "dapp2",
              button: "learn",
              style: "width: 133px;height: 29px;",
              url: "https://aave.com/",
              createUrl:
                "https://medium.com/crustnetwork/decentralized-aave-interface-hosting-on-ipfs-ed81cff1d3e2",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/Severless Dapp/polkadot@3x.png`),
              title: "dapp3",
              button: "learn",
              style: "width: 155px;height: 36px;",
              url: "https://polkadot.network/",
              createUrl:
                "https://medium.com/crustnetwork/decentralized-websites-with-ipfs-and-crust-9435b5810ae1",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/Severless Dapp/ipfs.png`),
              title: "dapp4",
              button: "vist",
              style: "width: 125px;height: 50px;",
              url: "https://docs.ipfs.io/",
              createUrl:
                "https://docs.ipfs.io/concepts/persistence/#pinning-services",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/Severless Dapp/Liquity@3x.png`),
              title: "dapp5",
              button: "vist",
              style: "width: 173px;height: 40px;",
              url: "https://www.liquity.org/",
              createUrl: "https://www.liquity.org/",
            },
          ],
        },
        {
          name: "tab2",
          title: "tabTitle2",
          info: "tabInfo2",
          howTo: 'howTo2',
          children: [
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/Nftscan@3x.png`),
              title: "net3",
              button: "vist",
              style: "width: 205px;height: 40px;",
              url: "https://nftscan.com/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/RMRK@3x.png`),
              title: "net4",
              button: "learn",
              style: "width: 169px;height: 56px;",
              url: "https://www.rmrk.app/",
              createUrl:
                "https://medium.com/crustnetwork/crust-network-partners-with-rmrk-in-constructing-the-next-generation-nfts-standard-d7f474431ff8",
            },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/NFT/swap.png`),
            //   title: "net1",
            //   button: "learn",
            //   create: "create",
            //   style: "width: 43px;height: 48px;",
            //   url: "https://switchswap.io/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/switchswap-nft-defi-platform-launching-soon-powered-by-crust-f7094e469dea",
            // },   
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/NFT/KAKA@3x.png`),
            //   title: "net5",
            //   button: "learn",
            //   style: "width: 146px;height: 50px;",
            //   url: "https://kakanft.com/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/crust-network-and-kaka-collaborate-for-nft-asset-decentralized-storage-71b45ab99335",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/NFT/REALY.png`),
            //   title: "net6",
            //   button: "vist",
            //   style: "width: 137px;height: 40px;",
            //   url: "https://realy.pro/",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/NFT/UniArts.png`),
            //   title: "net7",
            //   button: "learn",
            //   style: "width: 207px;height: 32px;",
            //   url: "https://uniarts.network/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/crust-network-and-uniarts-network-announce-strategic-partnership-crust-provides-decentralized-13af431c269b",
            // },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/Meet48.png`),
              title: "net8",
              button: "learn",
              style: "height: 40px;",
              url: "https://www.meet48.xyz/"
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/IPFS scan.png`),
              title: "net2",
              button: "learn",
              // create: "create",
              style: "width: 215px;height: 45px;",
              url: "https://ipfsscan.crustapps.net/",
              createUrl:
                "https://medium.com/crustnetwork/decentralized-websites-with-ipfs-and-crust-9435b5810ae1",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/logo-sandbox.png`),
              title: "sandbox",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "https://register.sandbox.game/",
              createUrl:
                "https://register.sandbox.game/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/xprotocol.png`),
              title: "xProtocal",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "https://metaverse.x-protocol.com/",
              createUrl:
                "https://metaverse.x-protocol.com/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/getaverse.svg`),
              title: "getaverse",
              button: "learn",
              // create: "create",
              style: "width: 215px;height: 45px;",
              url: "https://getaverses.com/",
              createUrl:
                "https://getaverses.com/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/ternoa.png`),
              title: "ternoa",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "https://www.ternoa.network/",
              createUrl:
                "https://www.ternoa.network/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/MetaPrints-logo.webp`),
              title: "metaprints",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "http://MonkeyingAround.io ",
              createUrl:
                "http://MonkeyingAround.io",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/oneland-with-color.png`),
              title: "oneland",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "https://oneland.world/",
              createUrl:
                "https://medium.com/crustnetwork/crust-network-partners-with-oneland-to-provide-decentralized-storage-for-the-metaverse-a795b6e21513",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/metamirror-logo.png`),
              title: "metaMirror",
              button: "learn",
              // create: "create",
              // style: "width: 215px;height: 45px;",
              url: "https://metamirror.space/",
              createUrl:
                "https://medium.com/crustnetwork/crust-network-partners-with-metamirror-to-explore-web-3-0-infrastructure-and-services-together-582875c4bf53",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/NFT/NFTGo.svg`),
              title: "nftGo",
              button: "learn",
              // create: "create",
              style: "width: 215px;height: 45px;",
              url: "https://nftgo.io/",
              createUrl:
                "https://nftgo.medium.com/strategic-partnership-announcement-crust-nft-x-nftgo-4d9f5a5cc364",
            },
          ],
        },
        {
          name: "tab3",
          title: "tabTitle3",
          info: "tabInfo3",
          howTo: 'howTo3',
          children: [
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/crust Files.png`),
            //   title: "ipfs1",
            //   button: "vist",
            //   create: "create",
            //   style: "width: 173px;height: 24px;",
            //   url: "https://crustfiles.io/",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/decoo.png`),
            //   title: "ipfs2",
            //   button: "vist",
            //   create: "create",
            //   style: "width: 151px;height: 51px;",
            //   url: "https://decoo.io/",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/SOCBAY@3x.png`),
            //   title: "ipfs3",
            //   button: "learn",
            //   create: "create",
            //   style: "width: 220px;height: 30px;",
            //   url: "https://socbay.io/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/how-does-socbay-io-use-crust-network-to-decentralize-videos-sharing-platform-81ce1f179694",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/cruTransfer@3x.png`),
            //   title: "ipfs4",
            //   button: "learn",
            //   create: "create",
            //   style: "width: 40px;height: 50px;",
            //   url: "https://crutransfer.me",
            //   createUrl:
            //     "https://medium.com/crustnetwork/whats-so-great-about-crutransfer-me-and-how-does-it-work-52fd873430ec",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/crato.png`),
            //   title: "ipfs5",
            //   button: "learn",
            //   create: "create",
            //   style: "width: 94px;height: 60px;",
            //   url: "https://pan.nashcloud.cn/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/a-brief-introduction-to-crato-the-cloud-storage-solution-of-the-new-era-ed3c0b95502",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/skyekiwi.png`),
            //   title: "ipfs6",
            //   button: "learn",
            //   create: "create",
            //   style: "width: 216px;height: 43px;",
            //   url: "https://skye.kiwi/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/skyekiwi-first-application-accepted-to-crust-grants-program-77071ab5481c",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/Coldstack@3x.png`),
            //   title: "ipfs7",
            //   button: "learn",
            //   style: "width: 187px;height: 31px;",
            //   url: "https://coldstack.io/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/crust-network-and-coldstack-collaborate-for-decentralized-storage-21b08462b053",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/Bluna@3x.png`),
            //   title: "ipfs8",
            //   button: "learn",
            //   style: "width: 145px;height: 41px;",
            //   url: "http://www.nftggg.com/#/First",
            //   createUrl:
            //     "https://medium.com/crustnetwork/crust-network-and-bluna-collaborate-for-metaverse-decentralized-storage-78f4833284b4",
            // },
            // {
            //   img: require(`../../../assets/img/5-Who are using Crust/IPFS/SINSO.png`),
            //   title: "ipfs9",
            //   button: "learn",
            //   style: "width: 140px;height: 61px;",
            //   url: "https://www.sinso.io/",
            //   createUrl:
            //     "https://medium.com/crustnetwork/distributed-image-cloud-based-on-crust-e5afcfd81c58",
            // },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/Litentry.png`),
              title: "ipfs10",
              button: "learn",
              style: "width: 204px;height: 48px;",
              url: "https://www.litentry.com/",
              createUrl:
                "https://medium.com/crustnetwork/crust-network-and-litentry-collaborates-for-decentralized-storage-and-data-security-1d870ade5a8e",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/KILT@3x.png`),
              title: "ipfs11",
              button: "vist",
              style: "width: 112px;height: 46px;",
              url: "https://www.kilt.io/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/robonomics-logo.svg`),
              title: "robonomics",
              button: "vist",
              style: "width: 112px;height: 46px;",
              url: "https://robonomics.network/",
              createUrl: 
                "https://medium.com/crustnetwork/robonomics-crust-networks-strategic-partnership-announced-f3a9a3b79f35"
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/XX_logo1.png`),
              title: "xxNetwork",
              button: "vist",
              // style: "width: 112px;height: 46px;",
              url: "https://xx.network/",
              createUrl: 
                "https://medium.com/crustnetwork/crust-network-partners-with-xx-network-to-offer-web3-industry-a-turn-key-solution-565c68731005"
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/ceramic.png`),
              title: "ceramic",
              button: "vist",
              // style: "width: 112px;height: 46px;",
              url: "https://ceramic.network/",
              createUrl: 
                "https://medium.com/crustnetwork/crust-network-enables-truly-decentralized-file-storage-services-on-ceramic-network-60e7a94a59ed"
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/chainlink.svg`),
              title: "chainlink",
              button: "vist",
              style: "width: 112px;height: 46px;",
              url: "https://chain.link/",
              createUrl: 
                'https://medium.com/crustnetwork/crust-network-brings-decentralized-storage-to-blockchains-through-chainlink-aaa15b27e29c'
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/matters.png`),
              title: "matters",
              button: "vist",
              style: "width: 144px;height: 30px;",
              url: "https://matters-lab.io/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/link3.svg`),
              title: "link3",
              button: "vist",
              style: "width: 112px;height: 46px;",
              url: "https://link3.to/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/gear.png`),
              title: "gear",
              button: "vist",
              // style: "width: 112px;height: 46px;",
              url: "https://www.gear-tech.io/",
              createUrl: 
                'https://medium.com/crustnetwork/announcing-crust-networks-integration-with-gear-a-substrate-based-wasm-smart-contract-platform-23a8d4609884'
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/apillon.svg`),
              title: "apillon",
              button: "vist",
              style: "width: 144px;height: 46px;",
              url: "https://apillon.io/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/subsocial.svg`),
              title: "subsocial",
              button: "vist",
              style: "width: 112px;height: 46px;",
              url: "https://subsocial.network/",
            },
            {
              img: require(`../../../assets/img/5-Who are using Crust/IPFS/relation-labs.png`),
              title: "relationLabs",
              button: "vist",
              // style: "width: 112px;height: 46px;",
              url: "https://relationlabs.ai/home",
              createUrl:
                "https://crustnetwork.medium.com/crust-network-x-relation-labs-collaborate-to-integrate-data-storage-solution-443e457293dc",
            }
          ],
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  methods: {
    routeTo(url) {
      window.open(url, "_blank")
    },
    setActiveTab(index) {
      this.activeTab = index
      this.active = 1
      this.$nextTick(() => {
        this.swiper.slideToLoop(0, 1000, false)
        this.swiper.update()
      })
    },
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 1140px) {
  .using-mobile {
    display: none !important;
  }
  .using-crust {
    background: #fdf7f3;
    .using-crust-block {
      padding-top: 137px;
      margin: 0 auto;
      width: 1140px;
      position: relative;
      .using-title {
        // width: 672px;
        height: 46px;
        font-size: 48px;
        line-height: 32px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        text-align: center;
      }
      .using-tab {
        margin: 32px 0 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 4px 10px;
        width: 1140px;
        height: 60px;
        background: #ffffff;
        border-radius: 10px;
        .using-tab-item {
          cursor: pointer;
          width: 30%;
          height: 60px;

          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
          }
        }
        .using-tab-item-active {
          span {
            border-radius: 8px;
            color: #fc7823;
            position: relative;
            &::after {
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: calc(-50% + 3px);
              height: 4px;
              background: #fc7823;
              border-radius: 2px;
              width: calc(100% - 6px);
              content: "";
            }
          }
        }
      }
      .using-intro {
        // display: flex;
        // justify-content: space-between;
        margin-bottom: 8px;
        .using-intro-title {
          width: 1140px;
          text-align: center;
          font-size: 36px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          line-height: 48px;

          height: 35px;
          margin-bottom: 25px;
        }
        .using-intro-info {
          width: 900px;
          margin: 0 auto;
          margin-bottom: 12px;
          text-align: center;
          min-height: 80px;
          font-size: 16px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #666666;
          line-height: 24px;
        }
        .using-intro-how-to {
          width: 1008px;
          margin: 0 auto;
          margin-bottom: 40px;
          text-align: center;
          font-size: 16px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #333333;
          line-height: 24px;
        }
      }
      .using-trun {
        z-index: 99;
        position: absolute;
        bottom: 0;
        left: 25%;
        margin-left: -20px;
        width: 40px;
        height: 40px;
        background: #ffffff;
        box-shadow: 0px 2px 5px 0px rgba(165, 131, 131, 0.15);
        border-radius: 20px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          pointer-events: none;
        }
        &:hover {
          border: 1px solid #fc7823;
          box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
        }
        &:first-child {
          margin-right: 56px;
        }
      }
      .using-transition {
        z-index: 99;
        position: absolute;
        bottom: 0;
        right: 25%;
        margin-right: -20px;
        width: 40px;
        height: 40px;
        background: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 2px 5px 0px rgba(165, 131, 131, 0.15);
        &:hover {
          border: 1px solid #fc7823;
          box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
      .swiper {
        width: 1140px;
        height: 400px;
        --swiper-pagination-color: #fc7823; /* ���ֶ����� */
      }
      .swiper-pagination {
        bottom: 10px;
      }
      .swiper-slide {
        width: 260px;
        margin-right: 34px !important;
      }
      .using-content {
        width: 1140px;
        display: flex;
        overflow: hidden;

        .using-content-item {
          flex-basis: 260px;
          flex-shrink: 0;
          height: 315px;
          background: #fffcfa;
          box-shadow: 0px 5px 5px 0px rgba(4, 0, 0, 0.02);
          border-radius: 15px;
          margin-right: 20px;
          margin-bottom: 40px;
          padding-bottom: 50px;
          // display: flex;
          // flex-direction: column;
          // justify-content: space-between;
          &:last-child {
            // margin-right: 20px;
          }
          .using-content-item-logo {
            margin: 30px auto 0;
            display: flex;
            height: 50px;
            justify-content: center;
            align-items: center;
            img {
              cursor: pointer;
              height: 50px;
            }
          }
          .using-content-item-info {
            margin: 0 auto;
            // width: 270px;
            height: 160px;
            display: flex;
            align-items: center;
            padding: 0 14px;
            width: 260px;
            flex: 1;
            font-size: 12px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #1f1f1f;
            line-height: 20px;
            text-align: center;
          }
          .using-content-item-button {
            cursor: pointer;
            margin: 0 auto;
            width: 160px;
            height: 36px;
            border: 2px solid #fc7823;
            border-radius: 8px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #fc7823;
          }
          .using-content-item-create {
            margin-top: 15px;
            padding-right: 10px;
            height: 13px;
            font-size: 12px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #1f1f1f;
            line-height: 20px;
            text-align: right;
          }
        }
        &:last-child {
          .using-content-item {
            margin-right: 0px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1140px) {
  .using-pc {
    display: none !important;
  }
  .using-crust {
    background: #fdf7f3;
    .using-crust-block {
      padding-top: 4.92rem;
      margin: 0 auto;
      position: relative;
      .using-title {
        width: 23.33rem;  
        height: 2rem;
        line-height: 2rem;
        font-size: 2rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        margin: 2.75rem auto 2.67rem;
      }
      .using-swiper-item {
        &:last-child{
          .swiper{
           margin-bottom: 0!important;
          }
        }
        .using-swiper-item-name {
          margin: 0 auto;
          width: 23.33rem;
          height: 1.33rem;
          line-height: 1.33rem;
          font-size: 1.33rem;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #1f1f1f;
        }
        .using-swiper-item-title {
          margin: 0.67rem auto 2.08rem;
          width: 23.33rem;
          height: 1.25rem;
          font-size: 1.17rem;
          font-family: Montserrat;
          font-weight: bold;
          color: #fc7823;
          line-height: 1.25rem;
        }
        .using-swiper-item-subTitle {
          margin: 0 auto;
          width: 23.33rem;
          font-size: 0.83rem;
          font-family: Montserrat;
          font-weight: 400;
          color: #666666;
          line-height: 1.25rem;
        }
        .swiper {
          margin: 3.33rem auto 4.58rem;
          height: 28rem;
          width: 26.67rem;
          --swiper-pagination-color: #fc7823; /* ���ֶ����� */
        }
        .swiper-pagination {
          bottom: 10px;
        }
        .swiper-slide {
          height: 23.42rem;
          width: 26.67rem;
          display: flex;
          justify-content: center;
        }
        .using-content {
          .using-content-item {
            width: 23.33rem;
            height: 23.42rem;
            background: #ffffff;
            box-shadow: 0rem 0rem 1rem 0rem rgba(252, 120, 35, 0.05);
            border-radius: 0.67rem;
            .using-content-item-logo {
              height: 7.83rem;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                cursor: pointer;
                height: 2.58rem;
              }
            }
            .using-content-item-info {
              margin: 0 auto;
              height: 8.33rem;
              display: flex;
              align-items: center;
              padding: 0 1.25rem;
              font-size: 0.83rem;
              font-family: Montserrat, "Source Han Sans CN";
              font-weight: 400;
              color: #1f1f1f;
              line-height: 1.25rem;
              text-align: center;
            }
            .using-content-item-button {
              cursor: pointer;
              margin: 0 auto;
              width: 10.67rem;
              height: 3rem;
              border: 0.17rem solid #fc7823;
              border-radius: 0.67rem;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 0.83rem;
              font-family: "Montserrat-blod", "Source Han Sans CN-blod";
              font-weight: bold;
              color: #fc7823;
            }
            .using-content-item-create {
              margin-top: 1rem;
              padding: 0 1.25rem;
              height:1rem;
             font-size: 0.83rem;
              font-family: Montserrat, "Source Han Sans CN";
              font-weight: 400;
              color: #1f1f1f;
              line-height:1rem;
              text-align: right;
              
            }
          }
          &:last-child {
            .using-content-item {
              margin-right: 0px;
            }
          }
        }
      }
    }
  }
}
</style>