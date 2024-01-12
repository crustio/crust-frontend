<template>
  <div class="container product__tab pb-14 md:pb-20 md:pt-32 pt-10">
    <h2 class="mb-14 px-3">Products</h2>
    <div class="flex flex-wrap items-center -mx-3 px-6">
      <!-- Left Side Navigation -->
      <div class="md:w-6/12">
        <ul class="flex flex-col space-y-2">
          <li v-on:click="toggleTabs(1)" :class="{ 'nav-item': true, 'active': openTab === 1 }">
            <h4 class="text-[22px] md:text-[28px]">DSM via Crust Mainnet</h4>
            <p class="text-[14px] md:text-[16px]">Everyone can place an on-chain storage order and get your data
              distributed on IPFS.</p>
          </li>
          <li v-on:click="toggleTabs(2)" :class="{ 'nav-item': true, 'active': openTab === 2 }">
            <h4 class="text-[22px] md:text-[28px]">Crust Files</h4>
            <p class="text-[14px] md:text-[16px]">Your first Web3.0 personal file sharing dApp, now supporting EVM chains.
            </p>
          </li>
          <li v-on:click="toggleTabs(3)" :class="{ 'nav-item': true, 'active': openTab === 3 }">
            <h4 class="text-[22px] md:text-[28px] ">Crust Cloud</h4>
            <p class="text-[14px] md:text-[16px]">It defines what cloud storage middlewares should look like in Web3 -
              every storage bucket is a NFT, and every IPFS gateway is a NFT.</p>
          </li>
          <li v-on:click="toggleTabs(4)" :class="{ 'nav-item': true, 'active': openTab === 4 }">
            <h4 class="text-[22px] md:text-[28px] ">IPFS Scan</h4>
            <p class="text-[14px] md:text-[16px]">A free, handy and open IPFS explorer application allowing users to
              search and check the storage status and details of files.</p>
          </li>
        </ul>
      </div>

      <!-- Right Side Content -->
      <div class="md:w-6/12">
        <transition name="fade" mode="out-in">
          <div :key="openTab" class="fade">
            <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }"
              class="p-4 border-solid border-2 border-white rounded-2xl">
              <a href="https://apps.crust.network/" target="_blank" rel="noopener noreferrer"
                class="block rounded-lg overflow-hidden">
                <img src="/public/img/crust-mainnet.png" alt="">
              </a>
            </div>
            <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }"
              class="p-4 border-solid border-2 border-white rounded-2xl">
              <a href="https://crustfiles.io/" target="_blank" rel="noopener noreferrer"
                class="block rounded-lg overflow-hidden">
                <img src="/public/img/crust-file.png" alt="">
              </a>
            </div>
            <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }"
              class="p-4 border-solid border-2 border-white rounded-2xl">
              <a href="https://crustcloud.io/" target="_blank" rel="noopener noreferrer"
                class="block rounded-lg overflow-hidden">
                <img src="/public/img/crust-cloud.png" alt="">
              </a>
            </div>
            <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }"
              class="p-4 border-solid border-2 border-white rounded-2xl">
              <a href="https://ipfs-scan.io/" target="_blank" rel="noopener noreferrer"
                class="block rounded-lg overflow-hidden">
                <img src="/public/img/ipfs-scan.png" alt="">
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "products-tab",
  data() {
    return {
      openTab: 1
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>
  
<style scoped>.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}</style>