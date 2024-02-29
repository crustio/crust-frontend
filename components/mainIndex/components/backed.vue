<template>
  <div>
    <div class="backed-crust">
      <div class="backed-crust-block">
        <div class="backed-title">{{ $t(`backed`) }}</div>
        <div class="backed-item backed-pc">
          <div class="backed-item-img" v-for="item in logoArr" :key="item">
            <div class="backed-item-bg"></div>
          </div>
        </div>
        <swiper class="backed-swiper backed-mobile" :options="swiperOptions">
          <swiper-slide
            v-for="(item, index) in logoArr"
            :key="index"
            class="backed-swiper-slide"
          >
            <div class="backed-item-img">
              <img :src="item.img" :style="item.style" alt="" />
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
const logoArr = [
  {
    img: require(`../../../assets/img/7-Strong investor backing/DWF-Labs.png`),
    style: "width: 9rem;height: 2.4rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/substrate.png`),
    style: "width: 9.2rem;height: 2rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/DFG@3x.png`),
    style: "width: 6.95rem;height: 2.55rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/NGC@3x.png`),
    style: "width: 6.35rem;height: 2.05rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/HASH@3x.png`),
    style: "width: 7.7rem;height: 0.8rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/SevenX@3x.png`),
    style: "width: 7.4rem;height: 2rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/IOSG@3x.png`),
    style: "width: 5.5rem;height: 2.5rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/Bitcoin.png`),
    style: "width: 8.5rem;height: 1.2rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/比升资本.png`),
    style: "width: 3.85rem;height: 2.75rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/CHAIN.png`),
    style: "width: 4.65rem;height: 4rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/bitscale@3x.png`),
    style: "width: 6.35rem;height: 2.45rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/AU21.png`),
    style: "width: 8.5rem;height: 1.4rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/SNZ.png`),
    style: "width:4.45rem;height: 2.4rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/3Commas@3x.png`),
    style: "width: 7rem;height: 1.75rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/共识实验室.png`),
    style: "width: 8.4rem;height: 2.2rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/orgin.png`),
    style: "width: 5.35rem;height: 4.25rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/太和资本.png`),
    style: "width: 7.25rem;height: 2.15rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/水滴资本.png`),
    style: "width: 2.45rem;height: 4.5rem;",
  },
  {
    img: require(`../../../assets/img/7-Strong investor backing/W3.png`),
    style: "width: 7.3rem;height: 2.5rem;",
  },
]
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: "auto",
        //  autoplay: {
        //   disableOnInteraction: false,
        // },
        // spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
      },
      logoArr: logoArr,
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
  .backed-pc {
    display: none !important;
  }
  .backed-crust {
    background: #fdf7f3;
    .backed-crust-block {
      padding-top: 72px;
      margin: 0 auto;
      .backed-title {
        text-align: center;
        height: 2rem;
        font-size: 2rem;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        line-height: 2rem;
      }
      .backed-swiper {
        height: 9.58rem;
        --swiper-pagination-color: #fc7823;
      }
      .backed-item-img {
        width: 11.6rem;
        height: 4rem;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          height: 2.5rem;
          // max-width: 8.5rem;
        }
      }
      .backed-swiper-slide {
        height: 9.58rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        &:nth-child(5n) {
          margin-right: 0;
        }

        
        &:nth-child(1) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/DWF-Labs.png")
              no-repeat center;
            background-size: 170px 46px;
          }
        }
        &:nth-child(2) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/substrate.png")
              no-repeat center;
            background-size: 184px 40px;
          }
        }
        &:nth-child(3) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/DFG@3x.png")
              no-repeat center;
            background-size: 139px 51px;
          }
        }
        &:nth-child(4) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/NGC@3x.png")
              no-repeat center;
            background-size: 127px 41px;
          }
        }
        &:nth-child(5) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/HASH@3x.png")
              no-repeat center;
            background-size: 154px 16px;
          }
        }
        &:nth-child(6) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/SevenX@3x.png")
              no-repeat center;
            background-size: 148px 40px;
          }
        }
        &:nth-child(7) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/IOSG@3x.png")
              no-repeat center;
            background-size: 110px 51px;
          }
        }
        &:nth-child(8) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/Bitcoin.png")
              no-repeat center;
            background-size: 170px 24px;
          }
        }
        &:nth-child(9) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/比升资本.png")
              no-repeat center;
            background-size: 77px 55px;
          }
        }
        &:nth-child(10) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/CHAIN.png")
              no-repeat center;
            background-size: 93px 80px;
          }
        }

        &:nth-child(11) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/bitscale@3x.png")
              no-repeat center;
            background-size: 127px 49px;
          }
        }
        &:nth-child(12) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/AU21.png")
              no-repeat center;
            background-size: 170px 28px;
          }
        }

        &:nth-child(13) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/SNZ.png")
              no-repeat center;
            background-size: 89px 48px;
          }
        }

        &:nth-child(14) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/3Commas@3x.png")
              no-repeat center;
            background-size: 140px 35px;
          }
        }
        &:nth-child(15) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/共识实验室.png")
              no-repeat center;
            background-size: 168px 44px;
          }
        }

        &:nth-child(16) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/orgin.png")
              no-repeat center;
            background-size: 107px 85px;
          }
        }
        &:nth-child(17) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/太和资本.png")
              no-repeat center;
            background-size: 145px 43px;
          }
        }
        &:nth-child(18) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/水滴资本.png")
              no-repeat center;
            background-size: 49px 90px;
          }
        }
        &:nth-child(19) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/W3.png")
              no-repeat center;
            background-size: 146px 50px;
          }
        }

        .backed-item-bg {
          width: 184px;
          height: 86px;
        }
      }
    }
  }
}
@media screen and (min-width: 1140px) {
  .backed-mobile {
    display: none !important;
  }
  .backed-crust {
    background: #fdf7f3;
    .backed-crust-block {
      padding-top: 72px;
      margin: 0 auto;
      width: 1140px;
      .backed-title {
        text-align: center;
        margin: 0px 0 74px;
        height: 44px;
        font-size: 48px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        line-height: 50px;
      }
      .backed-item {
        display: flex;
        flex-wrap: wrap;
        .backed-item-img {
          width: 200px;
          height: 100px;
          border-radius: 15px;
          margin-bottom: 25px;
          border: 1px solid #e2e2e2;
          margin-right: 34px;
          &:nth-child(5n) {
            margin-right: 0;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          &:nth-child(1) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/DWF-Labs.png")
                no-repeat center;
              background-size: 170px 46px;
            }
          }
          &:nth-child(2) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/substrate.png")
                no-repeat center;
              background-size: 184px 40px;
            }
          }
          &:nth-child(3) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/DFG@3x.png")
                no-repeat center;
              background-size: 139px 51px;
            }
          }
          &:nth-child(4) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/NGC@3x.png")
                no-repeat center;
              background-size: 127px 41px;
            }
          }
          &:nth-child(5) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/HASH@3x.png")
                no-repeat center;
              background-size: 154px 16px;
            }
          }
          &:nth-child(6) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/SevenX@3x.png")
                no-repeat center;
              background-size: 148px 40px;
            }
          }
          &:nth-child(7) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/IOSG@3x.png")
                no-repeat center;
              background-size: 110px 51px;
            }
          }
          &:nth-child(8) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/Bitcoin.png")
                no-repeat center;
              background-size: 170px 24px;
            }
          }
          &:nth-child(9) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/比升资本.png")
                no-repeat center;
              background-size: 77px 55px;
            }
          }
          &:nth-child(10) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/CHAIN.png")
                no-repeat center;
              background-size: 93px 80px;
            }
          }

          &:nth-child(11) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/bitscale@3x.png")
                no-repeat center;
              background-size: 127px 49px;
            }
          }
          &:nth-child(12) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/AU21.png")
                no-repeat center;
              background-size: 170px 28px;
            }
          }

          &:nth-child(13) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/SNZ.png")
                no-repeat center;
              background-size: 89px 48px;
            }
          }

          &:nth-child(14) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/3Commas@3x.png")
                no-repeat center;
              background-size: 140px 35px;
            }
          }
          &:nth-child(15) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/共识实验室.png")
                no-repeat center;
              background-size: 168px 44px;
            }
          }

          &:nth-child(16) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/orgin.png")
                no-repeat center;
              background-size: 107px 85px;
            }
          }
          &:nth-child(17) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/太和资本.png")
                no-repeat center;
              background-size: 145px 43px;
            }
          }
          &:nth-child(18) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/水滴资本.png")
                no-repeat center;
              background-size: 49px 90px;
            }
          }
          &:nth-child(19) {
            .backed-item-bg {
              background: url("../../../assets/img/7-Strong investor backing/W3.png")
                no-repeat center;
              background-size: 146px 50px;
            }
          }

          .backed-item-bg {
            width: 184px;
            height: 86px;
          }
        }
      }
    }
  }
}
</style>
