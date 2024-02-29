<template>
  <countTo
    v-if="endVal"
    :start-val="startVal"
    :end-val="endVal"
    :decimals="3"
    :duration="3000"
  />
  <span v-else>> 1,000,000.000</span>
</template>
<script>
import countTo from "vue-count-to"
export default {
  name: "Capacity",
  components: {
    countTo,
  },
  fetch() {
    this.$axios
      .$get("https://sd.crustcode.com/api/totalStorage", {
        auth: {
          username: "crust",
          password: "654321",
        },
      })
      .then((res) => {
        if (res.status === "success") {
          this.endVal = res.data
        } else {
          throw new Error("FAILED")
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },
  data() {
    return {
      startVal: 0,
      endVal: 0,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.$fetch()
  },
}
</script>
<style></style>
