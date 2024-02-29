<template>
  <div class="desc-card">
    <div class="desc-card-top">
      <div class="desc-card-top-left">
        <div v-html="icons[idx]"></div>
      </div>
      <div class="desc-card-top-right" :class="getZhcnCss()">
        {{ $t(`crust.${items[idx]}.title`) }}
      </div>
    </div>
    <div class="desc-card-bottom" :class="getZhcnCss()">
      {{ $t(`crust.${items[idx]}.desc`) }}
    </div>
  </div>
</template>
<script>
import descCardIcon0 from "@/assets/svgs/desc-card-icon-0.svg?raw"
import descCardIcon1 from "@/assets/svgs/desc-card-icon-1.svg?raw"
import descCardIcon2 from "@/assets/svgs/desc-card-icon-2.svg?raw"
export default {
  name: "DescCard",
  components: {},
  props: {
    idx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      icons: [descCardIcon0, descCardIcon1, descCardIcon2],
      items: ["TEE", "MPoW", "GPoS"],
    }
  },
  computed: {
    imagePath() {
      return this.name + ".png"
    },
  },
  watch: {},
  mounted() {},
  methods: {
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ''
      } else {
        return 'zh-cn'
      }
    }
  }
}
</script>
<style lang="scss" scoped>


@media screen and (min-width: 1200px) {
  .desc-card {
    box-shadow: 4px 4px 15px 0 #d8d9d9;
    border-radius: 10px;
    text-align: left;
    width: 307px;
    height: 300px;
    margin: 20px 10px;
    background: $secondary;
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: #1f1f1f;
    cursor: default;

    &:hover {
      box-shadow: 4px 4px 15px 0 rgba(255, 100, 0, 0.5);
      color: $mainColor;
      fill: $mainColor;
    }

    .desc-card-top {
      font-family: InterV_Semi-Bold;
      display: flex;
      height: 47%;
      align-items: center;
      .desc-card-top-left {
        width: 40px;
        margin-right: 20px;
      }
      .desc-card-top-right {
        font-size: 24px;
        letter-spacing: -1px;
        text-align: left;
        line-height: 29px;
        &.zh-cn {
          font-size: 22px;
        }
      }
    }
    .desc-card-bottom {
      font-family: InterV;
      font-size: 14px;
      letter-spacing: 0;
      text-align: left;
      line-height: 17px;
      &.zh-cn {
        line-height: 22px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .desc-card {
    box-shadow: 4px 4px 15px 0 #d8d9d9;
    border-radius: 10px;
    text-align: left;
    height: 100%;
    margin: 10px 6px 10px 6px;
    background: $secondary;
    display: flex;
    flex-direction: column;
    padding: 35px 16px;
    color: #1f1f1f;
    cursor: default;

    &:hover {
      box-shadow: 4px 4px 15px 0 rgba(255, 100, 0, 0.5);
      color: $mainColor;
      fill: $mainColor;
    }

    .desc-card-top {
      font-family: InterV_Semi-Bold;
      display: flex;
      height: 47%;
      align-items: center;
      margin-bottom: 20px;
      .desc-card-top-left {
        width: 40px;
        margin-right: 20px;
      }
      .desc-card-top-right {
        font-size: 24px;
        letter-spacing: -1px;
        text-align: left;
        line-height: 29px;
        &.zh-cn {
          font-size: 22px;
        }
      }
    }
    .desc-card-bottom {
      font-family: InterV;
      font-size: 12px;
      letter-spacing: 0;
      text-align: left;
    }
  }
}

.color-main {
  color: $mainColor !important;
}
</style>
