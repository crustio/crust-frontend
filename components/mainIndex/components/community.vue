<template>
  <div>
    <div class="map-crust">
      <div class="map-crust-block">
        <div class="map-title">
          <div class="map-title-title" v-html="$t(`community.title`)"></div>
          <div class="map-title-info map-pc" v-html="$t(`community.subTitle`)"></div>
          <div class="map-title-info map-mobile" v-html="$t(`community.subTitle_mobile`)"></div>
        </div>
        <div class="map-dev">{{ $t(`community.dev`) }}</div>
        <div class="map-content">
          <div>
            <img
              src="../../../assets/img/6-The People behind  Crust/map.svg?"
              alt=""
            />
          </div>
          <div
            class="map-content-item"
            @click="
              routeTo(
                'https://www.linkedin.com/company/sediment-tech/?viewAsMember=true'
              )
            "
          >
            {{ $t(`community.team1`) }}
          </div>
          <div
            class="map-content-item"
            @click="routeTo('https://switchswap.io')"
          >
            {{ $t(`community.team2`) }}
          </div>
          <div
            class="map-content-item"
            @click="routeTo('https://www.linkedin.com/company/clouderium')"
          >
            {{ $t(`community.team3`) }}
          </div>
          <div class="map-content-item" @click="routeTo('https://skye.kiwi/')">
            {{ $t(`community.team4`) }}
          </div>
        </div>
        <div class="map-network-bottom">
          <div class="map-network">
            <div class="map-network-item">
              <div
                class="map-network-item-title"
                @click="routeTo('https://crust.network/')"
              >
                {{ $t(`community.netTitle`) }}
              </div>
              <div class="map-network-item-info">
                {{ $t(`community.netInfo`) }}
              </div>
            </div>
            <div class="map-network-item">
              <div
                class="map-network-item-title"
                @click="routeTo('https://github.com/crustio/encrypted-ipfs')"
              >
                {{ $t(`community.ipfsTitle`) }}
              </div>
              <div class="map-network-item-info">
                {{ $t(`community.ipfsInfo`) }}
              </div>
            </div>
          </div>
          <div
            class="map-github"
            @click="routeTo('https://github.com/crustio')"
          >
            <img class="map-pc" src="../../../assets/img/main/github-w.png" alt="" />
            <img  class="map-mobile" src="../../../assets/img/main/github@3x.png" alt="" />
            {{ $t(`community.github`) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapIcon from "@/assets/img/6-The People behind  Crust/map.svg?raw"
import github from "@/assets/img/8-foot/github.svg?raw"
export default {
  data() {
    return {
      icons: [mapIcon, github],
      active: 0,
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
@media screen and (max-width: 1140px) {
  .map-pc{
    display: none !important;
  }
.map-crust {
  background: #fdf7f3;
  .map-crust-block {
    margin: 0 auto;
    padding-bottom: 3.42rem;
    padding-top: 5.33rem;
    .map-title {
      margin: 0 auto 0;
      // padding-bottom: 118px;
      // display: flex;
      // justify-content: space-between;
      .map-title-title {
        // width: 222px;
        text-align: center;
       height: 2rem;
font-size: 2rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        line-height:  2rem;
        margin-bottom: 1.92rem;
      }
      .map-title-info {
        text-align: center;
        font-family: Montserrat, "Source Han Sans CN";
        font-size: 0.83rem;
        width: 23.33rem;
font-family: Montserrat;
font-weight: 400;
color: #666666;
line-height: 1.25rem;
     margin:0 auto 5.08rem;
      }
    }
    .map-dev {
     height: 1.33rem;
font-size: 1.33rem;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height:1.33rem;
      text-align: center;
      margin-bottom: 2.67rem;
    }
    .map-content {
     margin: 0 auto;
       width: 23.33rem;
height: 10.92rem;
      .map-content-item {
        display: none;
        position: absolute;
        width: 210px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ffffff;
        box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        font-size: 16px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 500;
        color: #1f1f1f;
        cursor: pointer;
        &:hover {
          border: 1px solid #fc7823;
          color: #fc7823;
        }
        &:nth-child(2) {
          top: 239px;
          left: 75px;
        }
        &:nth-child(3) {
          top: 126px;
          left: 528px;
        }
        &:nth-child(4) {
          top: 181px;
          left: 961px;
        }
        &:nth-child(5) {
          top: 376px;
          left: 885px;
        }
      }
      img {
       margin: 0 auto;
       width: 23.33rem;
height: 10.92rem;
      }
    }
    .map-network-bottom {
    
      margin: 2.25rem auto 0px;
    }
    .map-network {
      .map-network-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:first-child {
          margin-bottom: 2.08rem;
        }
        // padding-left: 50px;
        .map-network-item-title {
           margin: 0 auto;
          cursor: pointer;
        height: 1.25rem;
font-size: 1.17rem;
          font-family: "Montserrat-blod", "Source Han Sans CN";
          font-weight: bold;
          display: inline-block;
          // text-decoration: underline;
          border-bottom: 2px solid #fc7823;
          padding-bottom: 3px;
          color: #fc7823;
          line-height: 1.25rem;
          margin-bottom: 1rem;
          font-style: italic;
        }
        .map-network-item-info {
           margin: 0 auto;
          font-family: Montserrat, "Source Han Sans CN";
         width: 16.5rem;
font-size: 0.83rem;
font-weight: 400;
color: #666666;
line-height: 1.25rem;
text-align: center;
        }
      }
    }
    .map-github {
      cursor: pointer;
      margin: 1.67rem auto 0px;
     width: 20rem;
height: 3rem;
border: 0.17rem solid #FC7823;
border-radius: 0.67rem;
    font-size: 0.83rem;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: 400;
      color: #FC7823;
      line-height: 3rem;
      text-align: center;
      &:active {
        background: #ff6400;
        color:#fff;
      }
      div {
        display: inline-block;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      img {
      width: 1.75rem;
height: 1.75rem;
        margin-right:0.83rem;
      }
    }
  }
}
}
@media screen and (min-width: 1140px) {
   .map-mobile{
    display: none !important;
  }
.map-crust {
  background: #fdf7f3;
  .map-crust-block {
    padding-top: 38px;
    margin: 0 auto;
    width: 1240px;
    padding-bottom: 98px;
    .map-title {
      margin: 77px auto 0;
      // padding-bottom: 118px;
      // display: flex;
      // justify-content: space-between;
      .map-title-title {
        // width: 222px;
        text-align: center;
        font-size: 48px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        line-height: 48px;
        margin-bottom: 28px;
      }
      .map-title-info {
        // width: 1052px;
        height: 178px;
        text-align: center;
        font-size: 16px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        color: #666;
        line-height: 30px;
      }
    }
    .map-dev {
      height: 29px;
      font-size: 30px;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 7px;
      text-align: center;
      margin-bottom: 32px;
    }
    .map-content {
      width: 1280px;
      height: 600px;
      position: relative;
      .map-content-item {
        position: absolute;
        width: 210px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ffffff;
        box-shadow: 0px 6px 5px 1px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        font-size: 16px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 500;
        color: #1f1f1f;
        cursor: pointer;
        &:hover {
          border: 1px solid #fc7823;
          color: #fc7823;
        }
        &:nth-child(2) {
          top: 239px;
          left: 75px;
        }
        &:nth-child(3) {
          top: 126px;
          left: 528px;
        }
        &:nth-child(4) {
          top: 181px;
          left: 961px;
        }
        &:nth-child(5) {
          top: 376px;
          left: 885px;
        }
      }
      img {
        width: 1280px;
        height: 600px;
      }
    }
    .map-network-bottom {
      display: flex;
      align-items: center;
      width: 1140px;
      margin: 69px auto 0px;
    }
    .map-network {
      flex: 1;
      .map-network-item {
        &:first-child {
          margin-bottom: 32px;
        }
        // padding-left: 50px;
        .map-network-item-title {
          cursor: pointer;
          height: 40px;
          height: 30px;
          font-size: 24px;
          font-family: "Montserrat-blod", "Source Han Sans CN";
          font-weight: bold;
          display: inline-block;
          // text-decoration: underline;
          border-bottom: 2px solid #fc7823;
          padding-bottom: 3px;
          color: #fc7823;
          line-height: 30px;
          margin-bottom: 11px;
          font-style: italic;
        }
        .map-network-item-info {
          font-family: Montserrat, "Source Han Sans CN";
          height: 16px;
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          line-height: 24px;
        }
      }
    }
    .map-github {
      cursor: pointer;
      margin: 0 auto 0px;
      width: 360px;
      height: 50px;
      background: #fc7823;
      border-radius: 8px;
      font-size: 18px;
      font-family: Montserrat, "Source Han Sans CN";
      font-weight: 400;
      color: #ffffff;
      line-height: 50px;
      text-align: center;
      &:hover {
        background: #ff6400;
      }
      div {
        display: inline-block;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 21px;
        height: 21px;
        margin-right: 10px;
      }
    }
  }
}
}
</style>