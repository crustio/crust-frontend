<template>
  <div>
    <div class="providers-crust">
      <div class="providers-crust-block">
        <div class="providers-item">
          <div class="providers-item-info">
            <div
              class="providers-item-info-title"
              v-html="$t(`providers.title1`)"
            ></div>
            <div class="providers-item-info-subtxt">
              <div class="text" v-html="$t(`providers.info1`)"></div>
            </div>
            <div
              class="providers-item-info-bitton"
              @click="
                routeTo('https://wiki.crust.network/docs/en/nodeOverview')
              "
            >
              {{ $t(`providers.button1`) }}
            </div>
          </div>
          <!-- <div class="providers-item-img">
            <img
              src="../../../assets/img/6-The People behind  Crust/Storage provider.png"
              alt=""
            />
          </div> -->
          <div class="providers-item-info">
            <div
              class="providers-item-info-title"
              v-html="$t(`providers.title2`)"
            ></div>
            <div class="providers-item-info-subtxt">
              <div class="text" v-html="$t(`providers.info2`)"></div>
            </div>
            <div
              class="providers-item-info-bitton"
              @click="
                routeTo('https://wiki.crust.network/docs/en/ecosystemGrowth')
              "
            >
              {{ $t(`providers.button2`) }}
            </div>
          </div>
        </div>
        <!-- <div class="providers-item">
          <div class="providers-item-img">
            <img
              src="../../../assets/img/6-The People behind  Crust/DCF.png"
              alt=""
            />
          </div>
          <div class="providers-item-info">
            <div class="providers-item-info-title">{{$t(`providers.title2`)}}</div>
            <div class="providers-item-info-subtxt">
              {{$t(`providers.info2`)}}
            </div>
            <div class="providers-item-info-bitton">
              {{$t(`providers.button2`)}}
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [],
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
  .providers-crust {
    background: #fdf7f3;
    .providers-crust-block {
      margin: 0 auto;
      .providers-item {

         
        // &:last-child{
        //   .providers-item-info{
        //     padding-left: 44px;
        //   }
        // }
        .providers-link {
          font-size: 0.83rem !important;
          font-family: "Montserrat-Italic", "Source Han Sans CN";
          font-weight: 400;
          color: #fc7823;
          &:hover {
            color: #fc7823;
          }
        }
        .providers-item-info {
             &:first-child{
        margin-bottom: 3.42rem;
            }
          .providers-item-info-title {
            font-size: 1.33rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 1.33rem;
            text-align: center;
          }
          .providers-item-info-subtxt {
            width: 20rem;
            font-size: 0.83rem;
            line-height: 1.25rem;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666;
            margin: 0.83rem auto 1.67rem;
            text-align: center;
            text{
              a{
                 font-size: 0.83rem !important;
              }
            }
          }
          .providers-item-info-bitton {
            margin: 0 auto;
            cursor: pointer;
            width: 20rem;
            height: 3rem;
            border: 0.17rem solid #fc7823;
            border-radius: 0.67rem;
            font-size: 0.83rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: 500;
            color: #fc7823;
            display: flex;
            align-items: center;
            justify-content: center;
            &:active {
              background: #ff6400;
              color:#fff;
            }
          }
        }
        .providers-item-img {
          img {
            width: 548px;
            height: 240px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1140px) {
  .providers-crust {
    background: #fdf7f3;
    .providers-crust-block {
      margin: 0 auto;
      width: 1140px;
      padding-bottom: 60px;
      .providers-item {
        display: flex;
        justify-content: space-between;
        padding-top: 6px;

        //     &:first-child{
        // margin-bottom: 6px;
        //     }
        // &:last-child{
        //   .providers-item-info{
        //     padding-left: 44px;
        //   }
        // }
        .providers-link {
          font-size: 16px;
          font-family: "Montserrat-Italic", "Source Han Sans CN";
          font-weight: 400;
          color: #fc7823;
          &:hover {
            color: #fc7823;
          }
        }
        .providers-item-info {
          padding-top: 13px;
          flex: 1;
          &:last-child {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .providers-item-info-subtxt,
            .providers-item-info-title {
              width: 488px !important;
            }
          }

          .providers-item-info-title {
            // width: 280px;
            height: 30px;
            font-size: 30px;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 30px;
          }
          .providers-item-info-subtxt {
            width: 512px;
            font-size: 16px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666;
            line-height: 22px;
            height: 150px;
            display: flex;
            align-items: center;
          }
          .providers-item-info-bitton {
            cursor: pointer;
            width: 360px;
            height: 50px;
            background: #fc7823;
            border-radius: 8px;
            font-size: 16px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 500;
            color: #ffffff;
            line-height: 50px;
            text-align: center;
            &:hover {
              background: #ff6400;
            }
          }
        }
        .providers-item-img {
          img {
            width: 548px;
            height: 240px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>