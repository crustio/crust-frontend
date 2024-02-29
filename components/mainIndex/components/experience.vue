<template>
  <div class="experience-crust">
    <div
      v-if="showVideo"
      class="m-video-container"
      @click="handleCloseDemoVideo"
    >
      <dVideo></dVideo>
    </div>
    <div
      v-if="showSwitchswapVideo"
      class="m-video-container"
      @click="handleCloseSwitchswapVideo"
    >
      <sVideo :source="switchswapVideoSource"></sVideo>
    </div>
    <div
      v-if="showFilesVideo"
      class="m-video-container"
      @click="handleCloseFilesVideo"
    >
      <sVideo :source="fileVideoSource"></sVideo>
    </div>
    <div class="experience-crust-block">
      <div class="experience-title" v-html="$t('express.title')"></div>
      <div class="experience-item">
        <div
          class="experience-item-block"
          v-for="(item, index) in listData"
          :key="item.title"
        >
          <div class="experience-item-title" @click="routeTo(item.url)">
            {{ $t(`express.${item.title}`) }}
            <img src="../../../assets/img/click.png" alt="" />
          </div>
          <div class="experience-item-img" @click="routeTo(item.url)">
            <img :src="item.img" alt="" />
          </div>
          <div
            class="experience-item-subTitle"
            v-html="$t(`express.${item.subTitle}`)"
          ></div>
          <div
            class="experience-item-buttom"
            v-if="index == 0"
            @click="handleDemoVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div>
          <div
            class="experience-item-buttom"
            v-if="index == 1"
            @click="handleFileVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div>
          <!-- <div
            class="experience-item-buttom"
            v-if="index == 2"
            @click="handleSwitchswapVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div> -->
          <div class="experience-item-create" v-if="item.create">
            {{ $t(`express.${item.create}`) }}
          </div>
        </div>
      </div>
       <swiper class="experience-swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listData"
          :key="index"
          class="image-wrapper"
        >
          <div
          class="experience-item-block"
        >
         <div class="experience-item-img" @click="routeTo(item.url)">
            <img :src="item.img" alt="" />
          </div>
          <div class="experience-item-title" @click="routeTo(item.url)">
            {{ $t(`express.${item.title}`) }}
            <img src="../../../assets/img/click.png" alt="" />
          </div>
         
          <div
            class="experience-item-subTitle"
            v-html="$t(`express.${item.subTitle}`)"
          ></div>
          <div
            class="experience-item-buttom"
            v-if="index == 0"
            @click="handleDemoVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div>
          <div
            class="experience-item-buttom"
            v-if="index == 1"
            @click="handleFileVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div>
          <!-- <div
            class="experience-item-buttom"
            v-if="index == 2"
            @click="handleSwitchswapVideoClick()"
          >
            {{ $t(`express.${item.button}`) }}<span></span>
          </div> -->
          <div class="experience-item-create" v-if="item.create">
            {{ $t(`express.${item.create}`) }}
          </div>
        </div>
        </swiper-slide>
               <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import dVideo from "./dVideo"
import sVideo from "./sVideo"
export default {
  components: { dVideo, sVideo },
  data() {
    return {
        swiperOptions: {
       loop: true,
        slidesPerView: "auto",
        // autoplay:true,
        // spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
        pagination: {
    el: '.swiper-pagination',
  }},
      showVideo: false,
      showSwitchswapVideo: false,
      showFilesVideo: false,
      listData: [
        {
          img: require(`../../../assets/img/3-Experience now/market.png`),
          title: "cardTitle1",
          subTitle: "cardSubTitle1",
          button: "cardButton1",
          url: "https://apps.crust.network/#/storage",
        },
        {
          img: require(`../../../assets/img/3-Experience now/crust files.png`),
          title: "cardTitle2",
          subTitle: "cardSubTitle2",
          button: "cardButton2",
          create: "cardTip2",
          url: "https://crustfiles.io",
        },
        {
          img: require(`../../../assets/img/3-Experience now/ipfscloud.png`),
          title: "cardTitle3",
          subTitle: "cardSubTitle3",
          button: "cardButton3",
          create: "cardTip3",
          url: "https://crustcloud.io/",
        },
      ],
    }
  },
  methods: {
    routeTo(url) {
      window.open(url, "_blank")
    },
    handleSwitchswapVideoClick() {
      this.switchswapVideoSource =
        "https://crustwebsites.net/ipfs/QmcYfQ6wjb9hop4LhJ9MZrX8GGiJRm6PxBfnVo2JqzEm9V"
      this.showSwitchswapVideo = true
    },
    handleFileVideoClick() {
      this.fileVideoSource =
        "https://crustwebsites.net/ipfs/QmWf36uY5E8mLD9nQnVxMEymAMhRh1yJ9th2fqQe1UmLqg"
      this.showFilesVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    handleCloseSwitchswapVideo() {
      this.showSwitchswapVideo = false
    },
    handleCloseFilesVideo() {
      this.showFilesVideo = false
    },
    handleDemoVideoClick() {
      this.showVideo = true
    },
    handleSwitchswapVideoClick() {
      this.switchswapVideoSource =
        "https://crustwebsites.net/ipfs/QmcYfQ6wjb9hop4LhJ9MZrX8GGiJRm6PxBfnVo2JqzEm9V"
      this.showSwitchswapVideo = true
    },
    handleFileVideoClick() {
      this.fileVideoSource =
        "https://crustwebsites.net/ipfs/QmWf36uY5E8mLD9nQnVxMEymAMhRh1yJ9th2fqQe1UmLqg"
      this.showFilesVideo = true
    },
  },
}
</script>

<style lang="scss">


@media screen and (min-width: 1140px) {
  .experience-crust {
  background: #fdf7f3;
  .experience-crust-block {
    padding-top: 112px;
    margin: 0 auto;
    width: 1140px;
    // height: 1247px;
    .experience-title {
      margin-bottom: 56px;
      height: 64px;
      font-size: 48px;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 64px;
      text-align: center;
    }
    .experience-swiper{
     display: none !important;
    }
    .experience-item {
      display: flex;
      justify-content: center;
      .experience-item-block {
        position: relative;
        &:nth-child(2) {
          margin: 0 20px;
        }
        padding: 0 15px;
        padding-top: 24px;
        width: 360px;
        height: 360px;
        background: #ffffff;
        box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.05);
        border-radius: 10px;
        .experience-item-title {
          cursor: pointer;
          margin: 0 0 50px;
          // width: 315px;
          height: 18px;
          font-size: 18px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          text-decoration: underline;
          color: #fc7823;
          line-height: 30px;
          text-align: center;
          img {
            width: 20px;
            height: 20px;
            margin-left: 10px;
          }
        }
        .experience-item-img {
          // width: 88px;
          display: flex;
          height: 70px;
          justify-content: center;
          img {
            cursor: pointer;
            height: 70px;
          }
        }
        .experience-item-subTitle {
          margin: 0 auto;
          width: 300px;
          font-size: 13px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
          line-height: 20px;
          height: 113px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .experience-item-buttom {
          cursor: pointer;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 36px;
          line-height: 36px;
          border: 2px solid #fc7823;
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          span {
            margin-left: 12px;
             display: inline-block;
              width: 0;
              height: 0;
              border-top: 8px solid transparent;
              border-left: 10px solid #fc7823;
              border-bottom: 8px solid transparent;
          }
          &:hover {
            background: #fc7823;
            border: 2px solid #fc7823;
            color: #ffffff;
            span{
               border-left:10px solid #fff;
            }
          }
        }
        .experience-item-create {
          position: absolute;
          bottom: 5px;
          right: 5px;
          // margin-top: 18px;
          // font-size: 11px;
          // text-align: right;
        }
      }
    }
  }
}
}
@media screen and (max-width: 1140px) {
  .experience-crust {
  background: #fdf7f3;
  .experience-crust-block {
    padding-top: 6.58rem;
    margin: 0 auto;
    // width: 1140px;
    // height: 1247px;
    .experience-title {
      // margin-bottom: 56px;
     height: 2rem;
font-size: 1.5rem;
color: #1F1F1F;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      line-height:2rem;
      text-align: center;
    }
    .experience-item{
       display: none !important;
    }
    .experience-swiper {
 --swiper-pagination-color: #fc7823;
      .image-wrapper{
      height: 30.6rem;
      padding-top: 4.5rem;
      }
      .experience-item-block {
        position: relative;
        margin: auto auto;
        padding: 0 1rem;
        padding-top: 4.25rem;
      width: 23.33rem;
height: 20.83rem;
background: #FFFFFF;
box-shadow: 0rem 0rem 1rem 0rem rgba(252, 120, 35, 0.05);
border-radius: 0.67rem;
position: relative;
 .experience-item-img {
   position: absolute;
   top: -2.5rem;
   left: 50%;
   margin-left: -2.5rem;
        width: 5rem;
height: 5rem;
background: #FFFFFF;
box-shadow: 0rem 0rem 1rem 0rem rgba(252, 120, 35, 0.1);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
          img {
            cursor: pointer;
           height: 2.67rem;
          }
        }
        .experience-item-title {
          cursor: pointer;
          // width: 315px;
        height: 1.25rem;
font-size: 1.17rem;
color: #1F1F1F;
line-height: 2rem;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          text-decoration: underline;
          text-align: center;
          img {
            width: 20px;
            height: 20px;
            margin-left: 10px;
          }
        }
       
        .experience-item-subTitle {
          margin: 0 auto;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
         font-size: 0.83rem;
font-family: Montserrat;
color: #666666;
line-height: 1.25rem;
          height: 9rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .experience-item-buttom {
          cursor: pointer;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
     white-space: nowrap;
        width: 10.67rem;
height: 3rem;
          line-height:  3rem;
          border:0.17rem solid #fc7823;
          border-radius: 0.67rem;
          text-align: center;
          font-size: 0.83rem;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          span {
            margin-left: 0.75rem;
            display: inline-block;
              width: 0;
              height: 0;
              border-top: 0.46rem solid transparent;
              border-left: 0.58rem solid #fc7823;
              border-bottom: 0.46rem solid transparent;
          }
          &:active {
            background: #fc7823;
            border: 0.17rem solid #fc7823;
            color: #ffffff;
            span{
                border-left: 0.58rem solid #fff;
            }
          }
        }
        .experience-item-create {
          position: absolute;
          bottom: 5px;
          right: 5px;
        }
      }
    }
  }
}
}
</style>