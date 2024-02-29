<template>
  <div>
    <div v-if="showVideo" class="m-video-container" @click="handleCloseDemoVideo">
      <dVideo :source="videoLink" />
    </div>
    <div class="container-fluid main-index">
      <div class="container main">
        <div id="global"></div>
        <div class="main-logo">
          <div class="new-link">
            <div class="new-link-box">{{ $t("indexBanner.new") }}</div>
            <div class="new-link-info" @click="routeTo('enjoy_action')">
              <span class="new-link-info-hover">{{
                $t("indexBanner.newTitle")
              }}</span>

              <div v-html="icons[0]"></div>
            </div>
          </div>
          <p class="logo" style="margin-top: 80px" v-html="$t('indexBanner.sub')"></p>
          <p class="logoMobile" v-html="$t('indexBanner.subMobile')"></p>
          <!-- <p class="logo logo-sub" v-html="$t('indexBanner.subTitle')"></p> -->
          <div class="buttons">
            <button class="btn-custom-yellow" @click="crustMacell()">
              {{ $t("Crust Maxwell") }}
            </button>
            <button class="btn-custom-common" @click="evmStorage()">
              {{ $t("EVM Storage") }}
            </button>
            <div class="ethdaimg" @click="openEthDA()">
              <img :src="require('~/assets/images/ethda.jpg')" class="ethdaimg" />
            </div>
          </div>
          <!-- <div class="system-point">
            <div class="point-icon"><div></div></div>
            <div
              class="point-icon-txt"
              v-html="$t('indexBanner.subInfo')"
            ></div>
          </div>
          <div class="desc">
            <div class="capacity">
              <Capacity class="number" />
              <span class="unit">TB</span>
            </div>
          
          </div> -->
        </div>
      </div>
      <!-- <div class="waht-crust">
        <div class="what-title">{{ $t("crustInfo.title") }}</div>
        <div class="what-subTitle">{{ $t("crustInfo.subTitle") }}</div>
      </div> -->

      <!-- <div class="back">
        <div class="container description">
          <div class="description-left">
            <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
            <p class="content color-main" :class="getZhcnCss()">
              {{ $t("crust.title") + $t(`crust.content.text1`) }}
            </p>
            <div class="btn-wrapper">
              <button class="btn-custom" @click="handleDemoVideoClick">
                <i class="icon-play" v-html="iconPlay"></i
                >{{ $t("button.introductionVideo") }}
              </button>
              <button
                class="btn-custom"
                @click="handleClick('Check Our Github')"
              >
                {{ $t("button.checkOnGithub") }}
              </button>
            </div>
          </div>
          <div class="description-right">
            <div class="description-right-left">
              <DescCard :idx="1" />
            </div>
            <div class="description-right-right">
              <DescCard :idx="2" />
              <DescCard :idx="0" />
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="numlist">
      <div class="numListBox">
        <div class="numListItem">
          <div class="numListItemName" v-html="$t('header.Storage_capacity')">
            Storage<br />capacity :
          </div>
          <div class="numListItemValue">
            <Capacity class="number" />
            <span class="unit">TB</span>
          </div>
        </div>
        <div class="numListItem">
          <div class="numListItemName" v-html="$t('header.Globally_distributed_storage_nodes')"></div>
          <div class="numListItemValue">
            <countTo :start-val="sVal" :end-val="nodesVal" :autoplay="true" :duration="3000" />
          </div>
        </div>
        <div class="numListItem">
          <div class="numListItemName" v-html="$t('header.Real-time_storage_fee')"></div>
          <div class="numListItemValue numListItemValuefee">
            $
            <countTo :start-val="sVal" :end-val="feeVal" :autoplay="true" :decimals="6" :duration="3000" /><span
              class="unit">/GB/Year</span>
          </div>
        </div>
        <div class="numListItem">
          <div class="numListItemName" v-html="$t('header.Storage_orders')"></div>
          <div class="numListItemValue">
            <countTo :start-val="sVal" :end-val="ordersVal" :autoplay="true" :duration="3000" />
          </div>
        </div>
        <!-- <div class="numListItem"></div>
      <div class="numListItem"></div>
      <div class="numListItem"></div> -->
      </div>
      <div class="numListSwiper">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide class="image-wrapper">
            <div class="numListItem">
              <div class="numListItemName" v-html="$t('header.Storage_capacity')">
                Storage<br />capacity :
              </div>
              <div class="numListItemValue">
                <Capacity class="number" /><span class="unit">TB</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="image-wrapper">
            <div class="numListItem">
              <div class="numListItemName" v-html="$t('header.Globally_distributed_storage_nodes')"></div>
              <div class="numListItemValue">
                <countTo :start-val="sVal" :end-val="nodesVal" :autoplay="true" :duration="3000" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="image-wrapper">
            <div class="numListItem">
              <div class="numListItemName" v-html="$t('header.Real-time_storage_fee')"></div>
              <div class="numListItemValue">
                $
                <countTo :start-val="sVal" :end-val="feeVal" :autoplay="true" :decimals="6" :duration="3000" /><span
                  class="unit">/GB /Year</span>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="image-wrapper">
            <div class="numListItem">
              <div class="numListItemName" v-html="$t('header.Storage_orders')"></div>
              <div class="numListItemValue">
                <countTo :start-val="sVal" :end-val="ordersVal" :autoplay="true" :duration="3000" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- <div class="container-fluid desc-mobile">
      <div class="description">
        <div class="description-left">
          <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
          <p class="content color-main" :class="getZhcnCss()">
            {{ $t("crust.title") + $t(`crust.content.text1`) }}
          </p>
          <div class="btn-wrapper">
            <button class="btn-custom" @click="handleClick('Check Our Github')">
              {{ $t("button.checkOnGithub") }}
            </button>
            <button class="btn-custom" @click="handleDemoVideoClick">
              <i class="icon-play" v-html="iconPlay"></i
              >{{ $t("button.introductionVideo") }}
            </button>
          </div>
        </div>
      </div>
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide>
          <DescCard :idx="1" />
        </swiper-slide>
        <swiper-slide>
          <DescCard :idx="2" />
        </swiper-slide>
        <swiper-slide>
          <DescCard :idx="0" />
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination swiper-pagination-desc"
        ></div>
      </swiper>
    </div> -->
  </div>
</template>

<script>
import { outerDit } from "@/config/nav-config"
import IconPlay from "@/assets/svgs/icon-play.svg?raw"
import jumpTo from "../../utils"
import * as THREE from "../../static/script/three"
import * as globalScript from "../../static/script/global"
import * as TrackballControls from "../../static/script/TrackballControls"
import dVideo from "../decentralized/dVideo"
import DescCard from "./descCard"
import Capacity from "./Capacity"
import triangle from "@/assets/img/triangle.svg?raw"
import countTo from "vue-count-to"
export default {
  components: {
    DescCard,
    dVideo,
    Capacity,
    countTo,
  },
  data() {
    return {
      sVal: 0,
      endList: [0, 0, 0, 0],
      nodesVal: 0,
      feeVal: 0,
      ordersVal: 0,
      icons: [triangle],
      showVideo: false,
      iconPlay: IconPlay,
      swiperOptions: {
        loop: true,
        slidesPerView: "auto",
        autoplay: {
          disableOnInteraction: false,
        },
        // spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
      },
      num: 0
    }
  },
  computed: {
    videoLink() {
      return this.$store.state.locale === "en"
        ? "https://crustwebsites.net/ipfs/QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4?filename=English new.MP4"
        : "https://crustwebsites.net/ipfs/QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4"
    },
  },
  mounted() {
    TrackballControls.initControl(THREE)
    globalScript.runGlobal(THREE)
    this.$nextTick(() => {
      setTimeout(() => {
        // this.endList = [2000000.56, 2000, 0, 0]
        this.getOrderPrice()
        this.getOrderTotal()
        this.getNodes()
      }, 1000)
    })
  },
  methods: {
    getOrderPrice() {
      // this.endList[2]=0.003
      this.$axios
        .$get("https://sd.crustcode.com/api/filePrice", {
          auth: {
            username: "crust",
            password: "654321",
          },
        })
        .then((res) => {
          if (res.status === "success") {
            this.feeVal = res.data
            console.log(this.endList[2])
          } else {
            throw new Error("FAILED")
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getOrderTotal() {
      // this.endList[3]=123000
      this.$axios
        .$get("https://sd.crustcode.com/api/orderCount", {
          auth: {
            username: "crust",
            password: "654321",
          },
        })
        .then((res) => {
          if (res.status === "success") {
            this.ordersVal = res.data
          } else {
            throw new Error("FAILED")
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getNodes() {
      // this.endList[3]=123000
      this.$axios
        .$get("https://sd.crustcode.com/api/totalValidNodes", {
          auth: {
            username: "crust",
            password: "654321",
          },
        })
        .then((res) => {
          if (res.status === "success") {
            this.nodesVal = res.data
          } else {
            throw new Error("FAILED")
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    routeTo(url) {
      jumpTo(url)
    },
    handleDemoVideoClick() {
      this.showVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    handleMainnetPlanClick() {
      const linkName =
        this.$store.state.locale === "en"
          ? "mainnet_plan_medium_en"
          : "mainnet_plan_medium_zh"
      jumpTo(linkName)
    },
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ""
      } else {
        return "zh-cn"
      }
    },
    crustMainnet() {
      if (this.$store.state.locale === "en") {
        window.open(outerDit.crust_mainnet, "_blank")
      } else {
        window.open(outerDit.crust_mainnet_zh, "_blank")
      }
    },

    evmStorage() {
      window.open('/evm', "_self")
    },

    openEthDA() {
      window.open('https://ethda.io', "_self")
    },

    crustMacell() {
      window.open(outerDit["crust maxwellIndex"], "_blank")
    },
    handleClick(name) {
      if (this.$store.state.locale === "en") {
        name += "_en"
      }
      jumpTo(name)
    },
    handleClickCheck() {
      window.open(outerDit.learnMore, "_blank")
    },
  },
  head: {
    script: [
      // { src: "/script/three.js" },
    ],
  },
}
</script>

<style lang="scss" scoped>
.icon-play {
  /deep/ svg {
    margin-right: 8px;
    margin-bottom: 2px;
    width: 16px;
    height: 16px;
    fill: white;

    &:hover {
      fill: #000;
    }
  }
}

.pointer {
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 1440px) and (min-width: 1140px) {
  .numlist {
    padding: 0 !important;
  }
}

@media screen and (min-width: 1140px) {
  .numlist {
    padding: 0 20px;
    position: absolute;
    top: 710px;
    left: 0;
    width: 100%;
    height: 100px;
    background: #fc7823;
    z-index: 999999;

    .numListBox {
      margin: 0 auto;
      max-width: 1440px;
      height: 100px;
      display: flex;
      justify-content: space-between;
    }

    .numListSwiper {
      display: none;
    }

    .numListItem {
      border-right: 2px solid #131313;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      justify-content: center;
      // padding: 0 28px;
      width: 29%;

      &:nth-child(2) {
        width: 23%;
      }

      &:nth-child(3) {
        width: 27%;
      }

      &:nth-child(4) {
        width: 21%;
        border-right: 0;
      }

      .numListItemName {
        font-size: 14px;
        font-family: Montserrat;
        font-weight: 400;
        color: #131313;
        line-height: 18px;
        margin-right: 20px;
        white-space: nowrap;
      }

      .numListItemValue {
        height: 36px;
        line-height: 36px;
        font-size: 36px;
        font-family: "Montserrat-blod";
        font-weight: bold;
        color: #131313;

        // white-space: nowrap;
        .unit {
          font-size: 16px;
        }
      }

      .numListItemValuefee {
        font-size: 32px;

        span {
          font-size: 32px;
        }

        .unit {
          font-size: 12px;
        }
      }
    }
  }

  .main-index {
    margin-top: -60px;
    width: 100%;
    // height: calc(100vh + 553px);
    background-color: #141414;
    position: relative;
    overflow: hidden;

    .main {
      width: 100%;
      height: 810px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;

      .new-link {
        width: 520px;
        margin-bottom: 80px;
        height: 30px;

        display: flex;
        // align-items: center;
        // padding: 10px 16px 8px 4px;
        cursor: pointer;

        .new-link-box {
          width: 80px;
          height: 30px;
          line-height: 30px;
          background: #fc7823;
          border-radius: 5px 0px 0px 5px;
          font-size: 14px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          // margin-right: 15px;'
          display: inline-block;
        }

        .new-link-info {
          background: #343434;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #999999;
          padding: 0 15px;
          display: inline-block;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;

          span {
            &:first-child {
              margin-right: 15px;
            }
          }

          div {
            display: inline-block;
            width: 6px;
            height: 11px;
          }

          .new-link-info-hover {
            height: 11px;
            font-size: 14px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #999999;
          }
        }

        &:hover {
          .new-link-info-hover {
            text-decoration: underline;
            color: #ffffff;

            span {
              text-decoration: none;
            }
          }
        }
      }

      .main-logo {
        z-index: 9999;
        width: 50%;
        animation: fadeInUp;
        /* referring directly to the animation's @keyframe declaration */
        animation-duration: 0.5s;

        /* don't forget to set a duration! */
        .logo {
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          font-size: 60px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          line-height: 70px;
          margin-bottom: 85px;
          width: 630px;
        }

        .logoMobile {
          display: none;
        }

        .desc {
          padding: 0px 0 0 5px;
          font-size: 14px;
          font-family: Montserrat;
          font-weight: bold;
          color: #ffffff;
          line-height: 2em;

          // margin-top: 20px;
          .capacity {
            font-family: Montserrat-blod, "Source Han Sans CN-blod";
            padding-bottom: 10px;

            .number {
              font-size: 60px;
            }

            .unit {
              font-size: 60px;
            }

            .intro {
              font-size: 18px;
            }
          }
        }

        .buttons {
          display: flex;
          justify-content: flex-start;
          gap: 30px;

          .btn-custom-yellow {
            width: 140px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fc7823;
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            font-family: Montserrat-blod, "Source Han Sans CN-blod";
            font-weight: bold;
            color: #ffffff;
          }

          .btn-custom-common {
            width: 200px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #ffffff;
            border-radius: 5px;
            font-size: 16px;
            font-family: Montserrat-blod, "Source Han Sans CN-blod";
            font-weight: bold;
            color: #ffffff;
            background: none;

            &:hover {
              background: #ffffff;
              border: 2px solid #ffffff;
              color: #1f1f1f;
              border-radius: 8px;
            }
          }
        }
      }

      #global {
        margin-left: -228px;
        margin-top: 940px;
      }

      .margin-left-25 {
        margin-left: 25px;
      }

      .button-width {
        width: 200px;
        padding: 0.5rem 0;
      }
    }

    .back {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: calc(553px + 35vh);
      background-color: $secondary;
      clip-path: polygon(0 35vh, 100% 0%, 100% 100%, 0 100%);

      .description {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .description-left {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .sub-title {
            margin-bottom: 56px;
          }

          .content {
            margin-bottom: 40px;
            max-width: 474px;

            &.zh-cn {
              line-height: 26px;
            }
          }

          .btn-wrapper {
            display: flex;
            margin-bottom: 137px;
            justify-content: space-around;

            .btn-custom {
              padding-left: 20px;
              padding-right: 20px;
              min-width: 200px;
            }
          }
        }

        .description-right {
          display: flex;
          align-items: center;
          padding-top: 50px;

          .description-right-right {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }


  .ethdaimg {
    display: flex;
    width: 8rem;
    height: 3.8rem;
    cursor: pointer;
  }

  .desc-mobile {
    display: none;

    .video {
      display: none;
    }
  }

  .system-point {
    display: flex;
    height: 20px;
    align-items: center;
    margin: 80px 0 37px;

    .point-icon {
      width: 16px;
      height: 16px;
      background: rgba(252, 120, 35, 0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        width: 8px;
        height: 8px;
        background: #fc7823;
        border-radius: 50%;
      }
    }

    .point-icon-txt {
      margin-left: 16px;
      height: 14px;
      line-height: 14px;
      font-size: 14px;
      font-family: "Montserrat", "Source Han Sans CN";
      font-weight: 400;
      color: #ffffff;
    }
  }
}

@media screen and (max-width: 1139px) {
  .numlist {
    width: 100%;
    background: #fc7823;
    z-index: 999999;

    .numListItem {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      justify-content: center;
      padding: 1rem 0;
      // padding: 0 28px;

      // width: 29%;
      // &:nth-child(2) {
      //   width: 23%;
      // }
      // &:nth-child(3) {
      //   width: 27%;
      // }
      // &:nth-child(4) {
      //   width: 21%;
      //   border-right: 0;
      // }
      .numListItemName {
        font-size: 1rem;
        font-family: Montserrat;
        font-weight: 400;
        color: #131313;
        line-height: 1.2rem;
        margin-right: 1rem;
        text-align: right;
      }

      .numListItemValue {
        height: 2rem;
        line-height: 2rem;
        font-size: 2rem;
        font-family: "Montserrat-blod";
        font-weight: bold;
        color: #131313;
        white-space: nowrap;

        .unit {
          font-size: 1rem;
        }
      }

      //  .numListItemValuefee{
      //   font-size: 23px;
      //   span{
      //     font-size: 23px;
      //   }
      //   .unit{
      //     font-size: 12px;
      //   }
      // }
    }

    .numListBox {
      display: none;
    }

    .numListSwiper {}
  }

  .main-index {
    padding-top: 7.5rem;
    width: 100%;
    // height: 100vh;
    background-color: #1f1f1f;
    position: relative;
    overflow: hidden;

    .main {
      width: 100%;
      // height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      // justify-content: flex-end;
      align-items: center;
      padding: 0;
      padding-bottom: 25px;

      .new-link {
        display: flex;
        // align-items: center;
        // padding: 10px 16px 8px 4px;
        cursor: pointer;
        width: 22rem;
        height: 1.67rem;
        background: #343434;
        border-radius: 0px 5px 5px 0px;
        margin-bottom: 6.25rem;

        .new-link-box {
          width: 2.86rem;
          height: 1.67rem;
          line-height: 1.67rem;
          background: #fc7823;
          border-radius: 5px 0px 0px 5px;
          font-size: 10px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          // margin-right: 15px;'
          display: inline-block;
        }

        .new-link-info {
          background: #343434;
          width: 18.6rem;
          height: 1.67rem;
          font-size: 10/14rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #999999;
          padding-left: 0.75rem;
          display: inline-block;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;

          span {
            &:first-child {
              margin-right: 0.5rem;
            }
          }

          div {
            display: inline-block;
            width: 0.5rem;
            height: 1.67rem;
            line-height: 1.67rem;
            vertical-align: top;
          }

          .new-link-info-hover {
            display: inline-block;
            width: 16.42rem;
            font-size: 0.83rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all; //Ӣ�Ļ���
            height: 1.67rem;
            line-height: 1.67rem;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #999999;
          }
        }

        &:active {
          .new-link-info-hover {
            text-decoration: underline;
            color: #ffffff;

            span {
              text-decoration: none;
            }
          }
        }
      }

      .main-logo {
        width: 100%;
        display: flex;
        flex-direction: column;

        .logo {
          display: none;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          margin-bottom: 16px;
          opacity: 0.99;
          width: 23.33rem;
          height: 9.92rem;
          font-size: 2.5rem;
          line-height: 4rem;
        }

        .logoMobile {
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          margin-bottom: 4.58rem;
          opacity: 0.99;
          width: 23.33rem;
          height: 10.92rem;
          font-size: 2rem;
          line-height: 4rem;
        }

        .desc {
          padding: 11px 0 0 5px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          line-height: 2em;
          z-index: 10;

          .capacity {
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            padding-bottom: 10px;

            .number {
              font-size: 2rem;
            }

            .unit {
              font-size: 2rem;
            }

            .intro {
              font-size: 2rem;
            }
          }
        }

        .test-net-title {
          opacity: 0.53;
          font-family: Inter-Regular;
          font-size: 12px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: left;
          margin-bottom: 20px;
          max-width: 200px;
          margin-top: -40px;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;

          .btn-custom-yellow {
            margin: 0 auto;
            margin-bottom: 2rem;
            width: 13.33rem;
            height: 6rem;
            background: #fc7823;
            border-radius: 0.67rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0;
            font-size: 1.17rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #ffffff;
          }

          .btn-custom-common {
            margin: 0 auto;
            width: 13.33rem;
            height: 3rem;
            border: 0.17rem solid #ffffff;
            border-radius: 0.67rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.17rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #ffffff;
            background: none;

            &:active {
              background: #ffffff;
              border: 0.17rem solid #ffffff;
              color: #1f1f1f;
              border-radius: 8px;
            }
          }
        }

        .system-point {
          display: flex;
          height: 20px;
          align-items: center;
          margin-top: 40px;

          .point-icon {
            flex-basis: 16px;
            flex-shrink: 0;
            height: 16px;
            background: rgba(252, 120, 35, 0.5);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            div {
              width: 8px;
              height: 8px;
              background: #fc7823;
              border-radius: 50%;
            }
          }

          .point-icon-txt {
            margin-left: 0.42rem;
            line-height: 0.83rem;
            font-family: "Montserrat", "Source Han Sans CN";
            font-weight: 400;
            color: #ffffff;
            height: 0.83rem;
            transform: scale(0.83);
            transform-origin: 0 0;
            font-size: 1rem;
            white-space: nowrap;
          }
        }
      }

      #global {
        display: none;
        position: absolute;
        margin-left: 80px;
        top: -70px;
        left: 0px;
      }

      .margin-left-25 {
        margin-left: 25px;
      }

      .button-width {
        width: 121px;
      }
    }
  }

  .desc-mobile {
    background-color: $secondary;
    padding-bottom: 45px;

    .description {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .description-left {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .sub-title {
          margin-bottom: 31px;
          margin-top: 45px;
        }

        .content {
          margin-bottom: 34px;
          max-width: 474px;
          font-size: 12px;
          line-height: 16px;

          &.zh-cn {
            line-height: 26px;
          }
        }

        .btn-wrapper {
          margin-bottom: 20px;

          .btn-custom {
            margin-bottom: 10px;
            min-width: 128px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      }

      .description-right {
        display: none;
      }
    }

    .swiper-slide {
      height: auto;
    }

    .swiper-container {
      padding-bottom: 45px;
    }

    .swiper-pagination-bullets {
      bottom: 0;
    }

    /deep/ .swiper-pagination-bullet {
      background-color: #efedea;
      border: 1px solid $mainColor;
    }

    /deep/ .swiper-pagination-bullet-active {
      background-color: $mainColor;
    }
  }
}

.m-video-container {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
  background: rgba(33, 33, 33, 0.2);
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container {
  z-index: 9999;

  @media (min-width: 1270px) {
    max-width: 1270px;
  }
}

.waht-crust {
  background: #fdf7f3;
}
</style>

