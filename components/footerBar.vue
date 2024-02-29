<!-- <template>
  <div class="container-fluid footer">
    <mainTitle :text="$t('footer.title')" />
    <div class="container footer-wrapper">
      <b-row class="mail-wrapper">
        <b-col class="mail-container" cols="8" sm="7" md="9" xl="9" lg="9">
          CrustNetwork@gmail.com
        </b-col>
        <b-col cols="4" sm="5" md="3" xl="3" lg="3">
          <b-button class="btn" variant="warning" @click="handleCopy">{{
            $t(`footer.Copy`)
          }}</b-button>
        </b-col>
      </b-row>
      <b-row class="container nav-container">
        <b-col
          v-for="(item, i) in items"
          :key="'nav' + i"
          cols="6"
          xs="6"
          md="3"
          xl="3"
          lg="3"
        >
          <div class="title">{{ $t(`footer.${titles[i]}`) }}</div>
          <template v-for="(nav, i) in items"  :key="'title' + i">
            <a
             
              class="nav list-text"
              href="javascript:void(0)"
              @click="jump(nav)"
              >{{ $t(`footer.${nav}`) }}</a
            >
          </template>
        </b-col>
        <b-col cols="6" xs="6" sm="3" md="3" xl="3" lg="3">
          <b-img
            src="https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/code.png"
            right
            width="100"
          ></b-img>
        </b-col>
      </b-row>
      <div class="container icon-wrapper">
        <a
          v-for="icon in iconList"
          :key="icon"
          href="javascript:void(0)"
          @click="jump(icon)"
        >
          <i class="iconfont" :class="`icon-${icon}-icon`"></i>
        </a>
      </div>
      <div class="container bg-wrapper">
        Copyright ©
        <a href="javascript:void(0)" @click="jump('/')">Crust 2021</a>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from "@/components/title.vue"

import jumpTo from "~/utils"
import { outerDit } from "@/config/nav-config"
export default {
  components: {
    mainTitle,
  },
  data() {
    return {
      titles: ["Crust", "forum", "JoinUs"],
      items: [
        ["WhitePaper", "EcoWhitePaper", "FAQ"],
        ["Twitter", "Telegram"],
        ["Cooperation", "Github"],
      ],
      iconList: ["telegram", "github", "medium", "twitter"],
    }
  },
  methods: {
    handleCopy() {
      this.$copyText("CrustNetwork@gmail.com")
        .then(() => {
          this.$bvToast.toast(this.$t("footer.Success"), {
            title: false,
            toaster: "b-toaster-top-center",
            solid: true,
            appendToast: false,
            variant: "success",
            autoHideDelay: 2000,
          })
        })
        .catch(() => {
          console.log("error")
        })
    },
    jump(name) {
      if (["FAQ", "/", "Cooperation"].includes(name)) {
        return this.$router.push(name.toLowerCase())
      } else if (name === "WhitePaper" || name === "EcoWhitePaper") {
        name = name.toLowerCase()
        if (this.$store.state.locale === "en") {
          name += "_en"
        }
        return window.open(`${outerDit.pdfBucket}${name}.pdf`, "_blank")
      } else {
        jumpTo(name)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  .title {
    padding-top: 30px;
  }
  background: linear-gradient(
    90deg,
    rgba(32, 47, 84, 1) 0%,
    rgba(17, 26, 52, 1) 100%
  );
  .footer-wrapper {
    margin: 0 auto;
    a {
      text-decoration: none;
    }
    .mail-wrapper {
      @include media-breakpoint-up(md) {
        width: 700px;
        margin: 12px auto 50px;
      }
      margin-bottom: 50px;
      .mail-container {
        padding-left: 20px;
        color: #41485d;
        font-size: 18px;
        line-height: 42px;
        background-color: #fff;
        border-radius: 4px;
        font-weight: 400;
        @include media-breakpoint-down(md) {
          font-size: 14px;
        }
      }
      .btn {
        width: 100px;
        cursor: pointer;
      }
    }
    .nav-container {
      .title {
        color: #fff;
        font-size: 18px;
        padding: 10px 0;
      }
      .nav {
        color: #c5cad5;
        transition: all 0.2s ease;
        &:hover {
          color: #fff;
        }
      }
      @include media-breakpoint-down(sm) {
        text-align: center;
        margin-bottom: 1rem;
        .nav {
          display: block;
          text-align: center;
          justify-self: center;
        }
      }
    }
    .icon-wrapper {
      display: flex;
      max-width: 300px;
      margin: 0 auto;
      justify-content: space-between;
      .iconfont {
        font-size: 24px;
        color: #c5cad5;
        transition: all 0.2s ease;
        &:hover {
          color: #fff;
        }
      }
    }
    .bg-wrapper {
      text-align: center;
      @include bgImage(
        "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/footerBg"
      );
      font-size: 14px;
      line-height: 100px;
      margin: 0 auto;
      color: #c5cad5;
      height: 86px;
      overflow: hidden;
      @include media-breakpoint-up(sm) {
        width: 500px;
        height: 86px;
      }
      a {
        color: #c5cad5;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style> -->
