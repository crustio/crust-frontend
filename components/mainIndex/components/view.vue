<template>
  <div>
    <what></what>
    <who></who>
    <experience></experience>
    <startCode></startCode>
    <Polkadot></Polkadot>
    <platform></platform>
    <timeLine></timeLine>
    <community></community>
    <providers></providers>
    <backed></backed>
    <!-- <blogs></blogs> -->
    <foot></foot>
  </div>
</template>

<script>
import what from "./what.vue"
import experience from "./experience.vue"
import startCode from "./startCode.vue"
import Polkadot from "./Polkadot.vue"
import platform from "./platform.vue"
import who from "./who.vue"
import timeLine from "./timeLine.vue"
import community from "./community.vue"
import providers from "./providers.vue"
import backed from "./backed.vue"
import blogs from "./blogs.vue"
import foot from "./foot.vue"
export default {
  components: {
    what,
    experience,
    startCode,
    Polkadot,
    platform,
    who,
    timeLine,
    community,
    providers,
    backed,
    blogs,
    foot,
  },
  data() {
    return {
    }
  },
  methods: {},
}
</script>

<style lang="scss">
</style>