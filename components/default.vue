<template>
  <div>
    <div class="simple-banner">
      <div class="simple-banner-containner">
        <div id="mc_embed_signup">
          <form
            action="https://network.us12.list-manage.com/subscribe/post?u=4cdbb1bce15273a3fdcd7c035&amp;id=06062eaf7a&amp;f_id=005bade0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  placeholder="Enter Email"
                  autocomplete="off"
                  id="mce-EMAIL"
                  required
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
              <!-- <div id="mce-responses">
                </div> -->
              <div
                class="response"
                id="mce-success-response"
                style="display: none"
              ></div>
            </div>
          </form>
        </div>
        <div class="simple-banner-text">
          <span
            ><a
              href="https://medium.com/crustnetwork/meet-crust-at-events-d9e4b79640d6"
              target="_blank"
              >MEET CRUST AT EVENTS</a
            ></span
          >
          
        </div>

       
      </div>
    </div>
    <nav-bar></nav-bar>
    <Nuxt />
    <!-- <footer-bar v-show="showFooter"></footer-bar> -->
  </div>
</template>
<script>
// import mcValidate from '@/mcValidate.js';

// import NavBar from '@/components/NavBar'
// import footerBar from "@/components/footerBar"
import { outerDit } from "@/config/nav-config"
export default {
  mounted() {
  },

  data() {
    return {
      outerDit,
    }
  },
  // components: {
  //   NavBar,
  //   footerBar,
  // },
  head() {
    return {
      title:
        this.$store.state.locale === "en"
          ? "Complete Your Web3 Journey With Decentralized Storage"
          : "用去中心化存储完成你的Web3之旅",
    }
  },
  computed: {
    showFooter() {
      return this.$route.name === "index"
    },
  },
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, Montserrat,
    "Source Han Sans CN", BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;

  -webkit-text-size-adjust: none;
  /* -webkit-text-size-adjust: 100%; */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.simple-banner {
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  display: flex;
  background: #fc7823;
  z-index: 9999999;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin: 0 auto;
}

.simple-banner-containner {
  width: 1300px;
  /* position: fixed; */
  top: 0;
  display: flex;
  background: #fc7823;
  z-index: 9999999;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin: 0 auto;
}

.simple-banner-text {
  /* padding: 10px 20px; */
  align-items: center;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: space-around;
}

.simple-banner-text a {
  text-decoration: underline !important;
}

@media screen and (max-width: 1200px) {
  #mc_embed_signup_scroll {
    position: relative;
  }

  .simple-banner-containner {
    width: 100%;
    height: 56px;
    position: fixed;
    top: 0;
    display: flex;
    background: #fc7823;
    z-index: 9999999;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    flex-direction: column-reverse;
  }

  #mce-responses {
    position: absolute !important;
    top: 30px !important;
    left: 24px !important;
  }

  /* #mc_embed_signup #mce-success-response {
    position: relative !important;
  } */

  #mce-success-response {
    position: absolute !important;
    top: 4px !important;
    left: 0px !important;
  }
}

.simple-banner-text a {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
}

.simple-banner-text a:hover,
a:focus {
  color: #ffffff;
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

#mc_embed_signup {
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  /* width: 270px; */
  margin: 0;
}

#mc_embed_signup form {
  margin: 0 !important;
}

#mc_embed_signup_scroll {
  display: flex;
  align-items: center;
}

#mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {
  background-color: #fdede2 !important;
  position: absolute;
  top: 28px;
  left: 2px;
}

#mce-responses {
  width: 0;
}

#mc_embed_signup #mce-success-response {
  width: 240px;
  color: #fdede2 !important;
  position: absolute;
  left: 320px;
}

#mc-embedded-subscribe {
  /* background-color: #ff8802 !important; */
  height: 32px;
  font-weight: bold !important;
}

#mc_embed_signup .mc-field-group {
  position: relative;
  width: 96%;
  padding-bottom: 0 !important;
  min-height: 30px !important;
  display: grid;
}

#mc_embed_signup .mc-field-group input {
  height: 32px;
  min-width: 180px;
}

#mc_embed_signup .button {
  margin: 0 0 0 10px !important;
}
</style>
