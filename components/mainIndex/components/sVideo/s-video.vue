<template>
  <div class="video-container">
    <video
      ref="dmedia"
      controls
      class="video-js d-video"
      preload="auto"
      autoplay
      @click="handleTogglePlay"
    >
      <source :src="source" type="video/mp4" />
    </video>
    <!--    <img class="img-ele" :src="require('~/assets/images/tech.png')" v-if="!this.isPlaying">-->
  </div>
</template>
<script>
import Vue from "vue"
import Video from "video.js"
import "video.js/dist/video-js.css"
Vue.prototype.$video = Video
export default {
  name: "SVideo",
  props: {
    source: {
      type: String,
      default:
        "https://crustwebsites.net/ipfs/QmcYfQ6wjb9hop4LhJ9MZrX8GGiJRm6PxBfnVo2JqzEm9V",
    },
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  mounted() {
    this.$refs.dmedia.addEventListener("play", this.handlePlay)
    this.$refs.dmedia.addEventListener("pause", this.handlePause)
  },
  methods: {
    handlePlay() {
      this.isPlaying = true
    },
    handlePause() {
      this.isPlaying = false
    },
    handleTogglePlay(e) {
      this.isPlaying = !this.isPlaying
      e.stopPropagation()
    },
  },
}
</script>
<style lang="scss" scoped>
.d-video {
  width: 100%;
  //max-width: 520px;
  height: auto;
  margin: auto;
  margin-right: 0;
}
.video-container {
  position: relative;
  align-self: center;
}
.img-ele {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: auto;
  transform: translate(-30%, -50%);
  @media (max-width: 500px) {
    transform: translate(-50%, -50%);
  }
}
</style>
