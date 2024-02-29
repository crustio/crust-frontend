
            <template>
  <div class="platform-crust">
    <div class="platform-crust-block">
      <div class="platform-top">
        <div :class="{'platform-title':true,iscenter:$store.state.locale === 'zh'?true:false}"  v-html="$t(`web3.title`)"></div>
        <div class="platform-hadle">
          
        </div>
      </div>
      <!-- <div class="platform-content" ref="platform-content">
        <template v-for="(item, index) in listData">
          <div class="platform-content-item" :key="index">
            <div class="platform-content-item-logo">
              <img :src="item.img" alt="" />
            </div>
            <div class="platform-content-item-info">
              {{ item.title }}
            </div>
            <div class="platform-content-item-button">
              {{ item.button }}
            </div>
          </div>
        </template>
      </div> -->
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listData"
          :key="index"
          class="image-wrapper"
        >
          <div class="platform-content" ref="platform-content">
            <div class="platform-content-item" :key="index">
              <div class="platform-content-item-logo">
                <img
                  :src="item.img"
                  alt=""
                  :style="item.style ? item.style : ''"
                  @click="routeTo(item.url)"
                />
              </div>
              <div
                class="platform-content-item-info"
                v-html="$t(`web3.${item.title}`)"
              ></div>
              <div
                class="platform-content-item-button"
                v-html="$t(`web3.${item.button}`)"
                @click="routeTo(item.medium ? item.medium : item.url)"
              ></div>
            </div>
          </div>
        </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
       
               
      </swiper>
         <div class="swiper-tool">
           <div class="platform-trun usecase-prev">
             <img src="../../../assets/img/arrow.svg" alt="" />
          </div>
         
          <div class=" platform-transition usecase-next">
            <img src="../../../assets/img/arr_right.svg" alt="" />
          </div>
        </div>
    </div>
  </div>
</template>
     
<script>
var timer
export default {
  data() {
    return {
      swiperOptions: {
       loop: true,
        slidesPerView: "auto",
        autoplay:true,
        // spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
        navigation: {
          nextEl: ".usecase-next",
          prevEl: ".usecase-prev",
        },
        pagination: {
    el: '.swiper-pagination',
    clickable:true
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
      active: 1,
      listData: [
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/ethereum-logo-landscape-black.png`),
          title: "info0",
          button: "more",
          style: "height: 49px;",
          url: "https://ethereum.org/",
          medium:
            "https://medium.com/crustnetwork/crust-is-now-included-in-the-ethereum-docs-as-a-decentralized-storage-solution-3731032d00e",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/Polygon.svg`),
          title: "info3",
          button: "more",
          style: "width: 168px;height: 40px;",
          url: "https://polygon.technology/",
          medium:
            "https://medium.com/crustnetwork/crust-network-brings-decentralized-storage-solution-package-to-polygon-with-seamless-ipfs-dbb2e71a822b",
        },
        {
          // polkadot
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/logo-polkadot.svg`),
          title: "info11",
          button: "more",
          style: "width: 168px;height: 40px;",
          url: "https://polkadot.network/",
          medium:
            "https://medium.com/crustnetwork/how-to-claim-crowdloan-rewards-both-for-kusama-and-polkadot-664b0746b3b9",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/Aptos_wordmark_transparent_BLK.png`),
          title: "info10",
          button: "more",
          style: "height: 80px;",
          url: "https://aptoslabs.com/",
          medium:"https://medium.com/crustnetwork/crust-network-integrates-with-aptos-to-introduce-decentralized-storage-solutions-to-more-users-1495dd668e39"
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/elrond.png`),
          title: "info1",
          button: "more",
          style: "width: 175px;height: 32px;",
          url: "https://elrond.com/",
          medium:
            "https://medium.com/crustnetwork/2-000-petabytes-of-unstoppable-ipfs-storage-will-be-available-for-elrond-nfts-and-dapps-via-22a81805818",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/SOLANA@3x.png`),
          title: "info2",
          button: "more",
          style: "width: 200px;height: 26px;",
          url: "https://solana.com/",
          medium:"https://medium.com/crustnetwork/crust-network-brings-decentralized-storage-solution-package-to-solana-290ececc21b2"
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/NEAR@3x.png`),
          title: "info5",
          button: "more",
          style: "width: 152px;height: 40px;",
          url: "https://near.org/",
          medium:
            "https://medium.com/crustnetwork/crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions-dc9b90f7e175",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/BINANCE.png`),
          title: "info4",
          button: "more",
          style: "width: 150px;height: 40px;",
          url: "https://www.binance.org/en/smartChain",
          medium:
            "https://medium.com/crustnetwork/crust-network-partners-with-bsc-to-introduce-decentralized-storage-solutions-838721942783",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/fiow@3x.png`),
          title: "info6",
          button: "more",
          style: "width: 120px;height: 50px;",
          url: "https://www.onflow.org/",
          medium:
            "https://medium.com/crustnetwork/crust-network-partners-with-flow-to-introduce-decentralized-storage-solutions-bc0edc9c15f7",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/okex.svg`),
          title: "info9",
          button: "more",
          style: "width: 180px;",
          url: "https://www.okex.com/oec",
          medium:
          "https://medium.com/okex-blog",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/HECO@3x.png`),
          title: "info7",
          button: "more",
          style: "width: 145px;height: 36px;",
          url: "https://www.hecochain.com/",
          medium:
            "https://medium.com/crustnetwork/crust-network-partners-with-heco-chain-to-introduce-decentralized-storage-solutions-to-more-users-3d8bf2deca87",
        },
        {
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/moonbeam-logo-500.png`),
          title: "info8",
          button: "more",
          style: "width: 180px;",
          url: "https://moonbeam.network/networks/moonbeam/",
          medium:
            "https://medium.com/crustnetwork/crust-network-integrates-with-moonriver-to-bring-web3-ipfs-storage-to-the-kusama-ecosystem-b73d934293bf",
        },
        {
          // Acala
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/Acala.svg`),
          title: "info12",
          button: "more",
          url: "https://acala.network/"
        },
        {
          // Astar
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/brand-logo-astar.png`),
          title: "info13",
          button: "more",
          url: "https://astar.network/"

        },
        {
          // Bifrost
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/bifrost.svg`),
          title: "info14",
          button: "more",
          url: "https://bifrost.finance/"

        },
        {
          // Phala
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/phala_network.png`),
          title: "info15",
          button: "more",
          url: "https://www.phala.network"

        },
        {
          // Oak
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/oak.png`),
          title: "info16",
          button: "more",
          url: "https://oak.tech/"

        },
        {
          // Robonomics
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/robonomics-logo.svg`),
          title: "info17",
          button: "more",
          url: "https://robonomics.network/"

        },
        {
          // Darwinia
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/Darwinia-Text.svg`),
          style: "width: 200px;",
          title: "info18",
          button: "more",
          url: "https://darwinia.network/"
        },
        {
          // Equilibrium
          img: require(`../../../assets/img/4-Start using Crust storage interfaces/Equilibrium.png`),
          style: "width: 200px;",
          title: "info19",
          button: "more",
          url: "https://medium.com/crustnetwork/the-equilibrium-crust-network-xcm-integration-adds-an-eqd-use-case-402dd383afd1"
        },
      ],
    }
  },
  methods: {
    routeTo(url) {
      window.open(url, "_blank")
    },
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 1140px) {
.platform-crust {
  background: #fdf7f3;
  .platform-crust-block {
    padding-top: 72px;
    margin: 0 auto;
    width: 1140px;
    position: relative;
    // height: 1247px;
    .platform-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 56px;
      .platform-title {
        height: 45px;
        line-height: 45px;
        font-size: 48px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
      }
      
    }
    .swiper-tool {
        .platform-trun {
          z-index: 99;
          position: absolute;
          bottom:0;
          left: 25%;
          margin-left: -20px;
          width: 40px;
          height: 40px;
          background: #ffffff;
          box-shadow: 0px 2px 5px 0px rgba(4, 0, 0, 0.15);
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            border: 1px solid #fc7823;
            box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
          }
          &:first-child {
            // margin-right: 56px;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .platform-transition {
          z-index: 99;
          position: absolute;
          bottom:0;
          right: 25%;
          margin-right: -20px;
          width: 40px;
          height: 40px;
          background: #ffffff;
          box-shadow: 0px 2px 5px 0px rgba(4, 0, 0, 0.15);
          border-radius: 20px;
          cursor: pointer;
             display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            border: 1px solid #fc7823;
            box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
          }
          img {
            width: 20px;
            height: 20px;
            //  transform: rotate(180deg);
          }
        }
      }
    .swiper {
      width: 1140px;
      height: 390px;
       --swiper-pagination-color: #fc7823;
    }
    .swiper-pagination{
      bottom: 10px;
    }
    .swiper-slide {
      width: 260px;
      margin-right: 34px !important;
    }
    .platform-content {
      width: 1140px;
      display: flex;
      overflow: hidden;
      // flex-wrap: wrap;
      .platform-content-item {
        flex-basis: 260px;
        flex-shrink: 0;
        height: 305px;
        background: #fffcfa;
        box-shadow: 0px 5px 5px 0px rgba(4, 0, 0, 0.02);
        border-radius: 15px;
        margin-right: 34px;
        margin-bottom: 40px;
        padding-bottom: 50px;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        // &:last-child {
        //   margin-right: 0px;
        // }

        .platform-content-item-logo {
          margin: 30px auto 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          img {
            height: 50px;
            max-width: 248px;
            cursor: pointer;
          }
        }
        &:nth-child(2) {
          .platform-content-item-logo {
            img {
              width: 248px;
              height: 30px;
            }
          }
        }
        .platform-content-item-info {
          margin: 0 auto;
          // width: 270px;
          height: 170px;
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
        .platform-content-item-button {
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
      }
      &:last-child {
        .platform-content-item {
          margin-right: 0px;
        }
      }
    }
  }
}
}
@media screen and (max-width: 1140px) {
.platform-crust {
  background: #fdf7f3;
  .platform-crust-block {
    padding-top: 3.33rem;
    margin: 0 auto;
    position: relative;
    // height: 1247px;
    .platform-top {
       width: 23.33rem;
           margin: 0 auto 2rem;
      .platform-title {
         
     height: 1.5rem;
 
font-size: 1.5rem;
        line-height:1.5rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
      }
      
    }
    .swiper-tool {
      display: none;
        .platform-trun {
          z-index: 99;
          position: absolute;
          bottom:0;
          left: 25%;
          margin-left: -20px;
          width: 40px;
          height: 40px;
          background: #ffffff;
          box-shadow: 0px 2px 5px 0px rgba(4, 0, 0, 0.15);
          border-radius: 20px;
          cursor: pointer;
          &:hover {
            border: 1px solid #fc7823;
            box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
          }
          &:first-child {
            // margin-right: 56px;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            width: 20px;
            height: 20px;
          }
        }
        .platform-transition {
          z-index: 99;
          position: absolute;
          bottom:0;
          right: 25%;
          margin-right: -20px;
          width: 40px;
          height: 40px;
          background: #ffffff;
          box-shadow: 0px 2px 5px 0px rgba(4, 0, 0, 0.15);
          border-radius: 20px;
          cursor: pointer;
             display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            border: 1px solid #fc7823;
            box-shadow: 0px 2px 5px 0px rgba(252, 120, 35, 0.15);
          }
          img {
            width: 20px;
            height: 20px;
            //  transform: rotate(180deg);
          }
        }
      }
    .swiper {
      // width: 1140px;
      height: 28rem;
      width: 26.67rem;
       --swiper-pagination-color: #fc7823;
    }
    .swiper-pagination{
      bottom: 10px;
    }
    .swiper-slide {
    width: 26.67rem;
    height: 27rem;
      display:flex;
      justify-content: center;
      // margin-right: 34px !important;
    }
    .platform-content {
      // width: 1140px;
      display: flex;
      overflow: hidden;
      // flex-wrap: wrap;
      .platform-content-item {
       width: 23.33rem;
height: 23.42rem;
       background: #FFFFFF;
box-shadow: 0rem 0rem 1rem 0rem rgba(252, 120, 35, 0.05);
border-radius: 0.67rem;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        // &:last-child {
        //   margin-right: 0px;
        // }

        .platform-content-item-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 7.83rem;
          img {
            height: 2.5rem;
            max-width: 23.33rem;
            cursor: pointer;
          }
        }
        &:nth-child(2) {
          .platform-content-item-logo {
            img {
              width: 248px;
              height: 30px;
            }
          }
        }
        .platform-content-item-info {
          margin: 0 auto;
          // width: 270px;
          height: 8.83rem;
          display: flex;
          align-items: center;
          padding: 0 0.92rem;
         font-size: 0.83rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
         line-height: 1.25rem;
           text-align: center;
        }
        .platform-content-item-button {
          cursor: pointer;
          margin: 0 auto;
        width: 10.67rem;
height: 3rem;
border: 0.17rem solid #FC7823;
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
      }
      &:last-child {
        .platform-content-item {
          margin-right: 0px;
        }
      }
    }
  }
}
}
</style>

