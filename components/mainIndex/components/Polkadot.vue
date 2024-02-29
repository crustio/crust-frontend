<template>
  <div class="Polkadot-crust">
    <div class="Polkadot-crust-block">
      <div class="Polkadot-title">
        <p v-html="$t(`Polkadot.title`)"></p>
        <!-- <p v-html="$t(`Polkadot.subTitle`)"></p> -->
      </div>
      <div class="Polkadot-info">
        <div class="Polkadot-info-dot">
          <div
            class="Polkadot-info-dot-title"
            v-html="$t(`Polkadot.Polkadot`)"
          ></div>
          <div
            class="Polkadot-info-dot-info"
            v-html="$t(`Polkadot.polkInfo`)"
          ></div>
        </div>
        <div class="Polkadot-info-img">
          <img
            src="../../../assets/img/4-Start using Crust storage interfaces/polkadot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    }
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 1140px) {
.Polkadot-crust {
  background: #fdf7f3;
  .Polkadot-crust-block {
    padding-top: 72px;
    margin: 0 auto;
    width: 1140px;
    // height: 1247px;
    .Polkadot-title {
      margin-bottom: 80px;
      text-align: center;
      p {
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        margin-bottom: 0;
        height: 46px;
        font-size: 48px;
        color: #1f1f1f;
        // &:last-child {
        //   font-size: 40px;
        //   line-height: 40px;
        //   height: 40px;
        //   color: #1f1f1f;
        // }
      }
    }
    .Polkadot-info {
      display: flex;
      justify-content: space-between;
      height: 295px;
      .Polkadot-info-dot {
        padding-top: 25px;
        .Polkadot-info-dot-title {
          height: 35px;
          line-height: 35px;
          font-size: 48px;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #1f1f1f;
          margin-bottom: 56px;
        }
        .Polkadot-info-dot-info {
          width: 581px;
          font-size: 14px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #1f1f1f;
          line-height: 30px;
        }
      }
      .Polkadot-info-img {
        display: flex;
        align-items: flex-end;
        img {
          width: 500px;
          height: 295px;
        }
      }
    }
  }
}
}
@media screen and (max-width: 1140px) {
.Polkadot-crust {
  background: #fdf7f3;
  .Polkadot-crust-block {
    padding-top: 13.92rem;
    margin: 0 auto;
    // height: 1247px;
    .Polkadot-title {
      margin:0 auto 3.3rem;
      text-align: center;
        width: 23.33rem;
      p {
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        margin-bottom: 0;
      line-height: 1.5rem;
font-size: 1.5rem;
        color: #1f1f1f;
        width: 23.33rem;
        // &:last-child {
        //   font-size: 40px;
        //   line-height: 40px;
        //   height: 40px;
        //   color: #1f1f1f;
        // }
      }
    }
    .Polkadot-info {
    
      // height: 295px;
      .Polkadot-info-dot {
        .Polkadot-info-dot-title {
      margin: 0 auto;
          line-height:  1.17rem;
        height: 1.17rem;
font-size: 1.5rem;
width: 23.33rem;
          font-family: "Montserrat-blod", "Source Han Sans CN-blod";
          font-weight: bold;
          color: #1f1f1f;
          margin-bottom: 1.25rem;
        }
        .Polkadot-info-dot-info {
          margin: 0 auto;
          width: 23.33rem;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          font-size: 0.83rem;
font-family: Montserrat;
font-weight: 400;
color: #666666;
line-height: 1.25rem;
        }
      }
      .Polkadot-info-img {
        margin: 0 auto;
         width: 23.42rem;
height: 13.75rem;
        img {
         width: 23.42rem;
height: 13.75rem;
        }
      }
    }
  }
}
}

</style>