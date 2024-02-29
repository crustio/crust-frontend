<template>
  <div class="what-crust">
    <div
      v-if="showVideo"
      class="m-video-container"
      @click="handleCloseDemoVideo"
    >
      <dVideo :source="videoLink" />
    </div>
    <div class="what-block">
      <div class="what-title" v-html="$t('crustInfo.title')"></div>
      <div class="what-subTitle" v-html="$t('crustInfo.subTitle')"></div>
      <div
        class="what-subTitleMobile"
        v-html="$t('crustInfo.subTitleMobile')"
      ></div>
      <div class="what-button" @click="handleDemoVideoClick">
        {{ $t("crustInfo.button") }}<span></span>
      </div>
      <div class="what-info what-info-pc">
        <div class="what-item" v-for="(item, index) in infoData" :key="index">
          <div class="what-item-icon">
            <!-- <div v-html="item.icon"></div> -->
            <div class="what-item-icon-bg">
              <img :src="item.icon" alt="" />
            </div>
          </div>
          <div class="what-item-subTitle">
            {{ $t(`crustInfo.${item.subTitle}`) }}
          </div>
          <div class="what-item-title">{{ $t(`crustInfo.${item.title}`) }}</div>
          <div
            class="what-item-info"
            v-html="$t(`crustInfo.${item.info}`)"
          ></div>
        </div>
      </div>
      <div class="what-info what-info-mobile">
        <div class="what-item" v-for="(item, index) in infoDataMobile" :key="index">
          <div class="what-item-icon">
            <!-- <div v-html="item.icon"></div> -->
            <div class="what-item-icon-bg">
              <img :src="item.icon" alt="" />
            </div>
          </div>
          <div class="what-item-subTitle">
            {{ $t(`crustInfo.${item.subTitle}`) }}
          </div>
          <div class="what-item-title">{{ $t(`crustInfo.${item.title}`) }}</div>
          <div
            class="what-item-info"
            v-html="$t(`crustInfo.${item.info}`)"
          ></div>
        </div>
      </div>
      <div class="what-bg">
        <div class="what-bg-button-yellow" @click="routeTo('github')">
          <img src="../../../assets/img/main/github-w.png" alt="" />
          {{ $t("crustInfo.github") }}
        </div>
        <div class="what-bg-button-black" @click="routerUrl()">
          {{ $t("crustInfo.tech") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTo from "../../../utils"
import github from "@/assets/img/8-foot/github.svg?raw"
import dVideo from "../../decentralized/dVideo"
export default {
  computed: {
    videoLink() {
      return this.$store.state.locale === "en"
        ? "https://crustwebsites.net/ipfs/QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4?filename=English new.MP4"
        : "https://crustwebsites.net/ipfs/QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4"
    },
  },
  components: { dVideo },
  data() {
    return {
      github: github,
      showVideo: false,
      infoData: [
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Privacy.svg`),
          title: "title1",
          subTitle: "subTitle1",
          info: "subInfo1",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Decentralization.svg`),
          title: "title2",
          subTitle: "subTitle2",
          info: "subInfo2",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Assurance.svg`),
          title: "title3",
          subTitle: "subTitle3",
          info: "subInfo3",
        },
      ],
       infoDataMobile: [
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Privacy.svg`),
          title: "title1",
          subTitle: "subTitle1",
          info: "mobile_subInfo1",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Decentralization.svg`),
          title: "title2",
          subTitle: "subTitle2",
          info: "mobile_subInfo2",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Assurance.svg`),
          title: "title3",
          subTitle: "subTitle3",
          info: "mobile_subInfo3",
        },
      ],
    }
  },
  methods: {
    handleDemoVideoClick() {
      this.showVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    routeTo(url) {
      jumpTo(url)
    },
    routerUrl() {
      let url =
        this.$store.state.locale === "en"
          ? "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper_en.pdf"
          : "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper.pdf"
      window.open(url)
    },
  },
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
  .what-crust {
    background: #fdf7f3;
    .what-block {
      padding-top: 2.67rem;
      margin: 0 auto;
      // width: 1240px;
      // height: 1247px;
      width: 100%;
      .what-title {
        margin: 0px auto 1.92rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 2rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        text-align: center;
      }
      .what-subTitle {
        display: none !important;
      }
      .what-subTitleMobile {
        margin: 0 auto;
        width: 100%;
        padding: 0 1.67rem;
        font-family: 'Montserrat', "Source Han Sans CN";
        font-weight: 400;
        line-height: 3em;
        text-align: center;
        font-size: 0.83rem;
        color: #666666;
        line-height: 1.25rem;
      }
      .what-button {
        margin: 3.17rem auto 5.67rem;
      width: 10.67rem;
height: 3rem;
background: #FC7823;
border-radius: 0.67rem;
        line-height: 3rem;
        text-align: center;
        font-size: 0.83rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #ffffff;
        span {
          margin-left: 11px;
        display: inline-block;
        vertical-align: middle;
              width: 0;
              height: 0;
              border-top: 0.46rem solid transparent;
              border-left: 0.58rem solid #fff;
              border-bottom: 0.46rem solid transparent;
        }
      }
      .what-info-pc{
        display: none;
      }
      .what-info {
        // display: flex;
        // justify-content: space-between;
        .what-item {
          margin: 0 auto;
          position: relative;
          width: 23.33rem;
          background: #ffffff;
          box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.05);
          border-radius: 10px;
          margin-bottom: 5.67rem;
          padding-top: 4.67rem;
          &:active {
            .what-item-icon-bg {
              background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.2),
                rgba(252, 120, 35, 0.2)
              );
              border: 1px solid rgba(252, 120, 35, 0.2);
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
            }
            .what-item-title {
              color: #fc7823;
              &::after {
                background: #fc7823;
              }
            }
          }
          .what-item-icon {
            .what-item-icon-bg {
              width: 5rem;
              height: 5rem;
              background: #ffffff;
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            position: absolute;
            top: -2.5rem;
            left: 50%;
            margin-left: -2.5rem;
            width: 5rem;
            height: 5rem;
            background: #ffffff;
            box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 2.67rem;
              height: 2.67rem;
            }
            svg {
              width: 2.67rem;
              height: 2.67rem;
            }
          }
          .what-item-subTitle {
            margin: 0 auto;
            text-align: center;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            height: 1rem;
            font-size: 1rem;
            color: #666666;
            line-height: 1rem;
          }
          .what-item-title {
            height: 1.5rem;
            font-size: 1.5rem;
            color: #fc7823;
            line-height: 2rem;
            text-align: center;
            margin: 0.42rem auto 1.66rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            position: relative;
            &::after {
              position: absolute;
              width: 56px;
              height: 3px;
              background: #fc7823;
              border-radius: 2px;
              bottom: -22px;
              left: 50%;
              margin-left: -28px;
              content: "";
            }
          }
          .what-item-info {
            padding: 2.58rem 1rem 3.67rem;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.83rem;
            -webkit-text-size-adjust: none;
            font-family: Montserrat;
            font-weight: 400;
            color: #666666;
            line-height: 1.25rem;
          }
        }
      }
      .what-bg {
        margin-top: 5.33rem;
       
        .what-bg-button-yellow {
          text-align: center;
          margin: 0 auto;
         width: 18.83rem;
height: 3.17rem;
          line-height:  3.17rem;
          background: #fc7823;
          border-radius: 0.67rem;
          font-size: 0.83rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 1.92rem;
          img {
           width: 1.75rem;
height: 1.75rem;
            margin-right: 0.83rem;
          }
          &:active {
            background: #ff6400;
          }
        }
        .what-bg-button-black {
          text-align: center;
         margin: 0 auto;
        width: 18.83rem;
height: 3.17rem;
          line-height:  3.17rem;
          border: 0.17rem solid #ff6400;
          border-radius: 0.67rem;
          font-size: 0.83rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ff6400;
          &:active {
            background: #ff6400;
            color: #fff;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1140px) {
  .what-crust {
    background: #fdf7f3;
    .what-block {
      padding-top: 82px;
      margin: 0 auto;
      width: 1140px;
      // height: 1247px;
      .what-title {
        margin: 0px auto 30px;
        line-height: 38px;
        height: 38px;
        font-size: 48px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        text-align: center;
      }
      .what-subTitle {
        margin: 0 auto;
        width: 1130px;
        // height: 78px;
        text-align: center;
        font-family: Montserrat, "Source Han Sans CN";
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        line-height: 24px;
      }
      .what-subTitleMobile,.what-info-mobile {
        display: none !important;
      }
      .what-button {
        cursor: pointer;
        margin: 39px auto 120px;
        width: 180px;
        height: 50px;
        background: #fc7823;
        border-radius: 8px;
        line-height: 50px;
        background: #fc7823;
        border-radius: 8px;
        text-align: center;
        color: #ffffff;
        font-size: 18px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        span {
          margin-left: 10px;
          display: inline-block;
              width: 0;
              height: 0;
              border-top: 0.46rem solid transparent;
              border-left: 0.58rem solid #fff;
              border-bottom: 0.46rem solid transparent;
        }
        &:hover {
          background: #ff6400;
        }
      }
      .what-info-mobile{
        display: none;
      }
      .what-info {
        display: flex;
        justify-content: center;
        .what-item {
          &:nth-child(2) {
            margin: 0 20px;
          }
          cursor: pointer;
          width: 360px;
          // height: 360px;
          background: #ffffff;
          box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.05);
          border-radius: 10px;
          &:hover {
            .what-item-icon {
              .what-item-icon-bg {
                background: radial-gradient(
                  circle,
                  rgba(255, 255, 255, 0.2),
                  rgba(255, 255, 255, 0.2),
                  rgba(252, 120, 35, 0.2)
                );
                border: 1px solid rgba(252, 120, 35, 0.2);
                box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
                border-radius: 50%;
              }
            }

            .what-item-title {
              color: #fc7823;
              &::after {
                background: #fc7823;
              }
            }
          }
          .what-item-icon {
            .what-item-icon-bg {
              width: 80px;
              height: 80px;
              background: #ffffff;
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            margin: -40px auto 32px;
            width: 80px;
            height: 80px;
            background: #ffffff;
            box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg,
            img {
              width: 30px;
              height: 30px;
              // background-color: #fff;
            }
          }
          .what-item-subTitle {
            margin: 0 auto;
            text-align: center;
            height: 12px;
            font-size: 12px;
            font-family: Montserrat, "Source Han Sans CN";
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            line-height: 12px;
          }
          .what-item-title {
            margin: 16px auto 59px;

            height: 21px;
            font-size: 22px;
            font-family: Montserrat-blod, "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 21px;

            width: 343px;
            position: relative;
            text-align: center;
            &::after {
              position: absolute;
              width: 56px;
              height: 3px;
              background: #cccccc;
              border-radius: 2px;
              bottom: -25px;
              left: 50%;
              margin-left: -28px;
              content: "";
            }
          }
          .what-item-info {
            margin: 0 auto;
            padding-bottom: 20px;
            width: 344px;
            font-size: 13px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666666;
            line-height: 20px;
            text-align: center;
          }
        }
      }
      .what-bg {
        margin-top: 88px;
        width: 1140px;
        height: 120px;
        // background: url("../../../assets/img/12/bg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .what-bg-button-yellow {
          cursor: pointer;
          text-align: center;
          margin: 0 20px;
          width: 280px;
          height: 50px;
          line-height: 50px;
          background: #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            display: inline-block;
            width: 21px;
            height: 21px;
          }
          img {
            width: 21px;
            height: 21px;
            margin-right: 10px;
          }
          &:hover {
            background: #ff6400;
          }
        }
        .what-bg-button-black {
          cursor: pointer;
          text-align: center;
          margin: 0 20px;
          width: 280px;
          height: 50px;
          line-height: 50px;
          border: 2px solid #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #fc7823;
          &:hover {
            &:hover {
              background: #fc7823;
              border: 2px solid #fc7823;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
.m-video-container {
  position: fixed;
  z-index: 99999999;
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
</style>