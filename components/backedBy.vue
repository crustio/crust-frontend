<template>
    <div class="container px-3 brand_area pb-8 md:pb-20 pt-16">
      <div class="flex -mx-3 justify-center md:mb-14 mb-7">
        <div class="w-full">
          <SectionTitle title="Backed By" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <Marquee class="mb-10">
            <img v-for="img in imgArray" :key="img" :src="img"/>
          </Marquee>
          <Marquee direction="reverse">
            <img v-for="img in imgArray" :key="img + 'reverse'" :src="img"/>
          </Marquee>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const imgArray = [
      '/img/backed/DWF-Labs.png',
      '/img/backed/web3foundation.png',
      '/img/backed/dfg.png',
      '/img/backed/ngc.png',
      '/img/backed/hashcib.png',
      '/img/backed/sevenx.png',
      '/img/backed/iosgventures.png',
      '/img/backed/bitcoincom.png',
      '/img/backed/chaincapital.png',
      '/img/backed/bitscale.png',
      '/img/backed/au21.png',
      '/img/backed/SNZ.png',
      '/img/backed/3c.png',
      '/img/backed/tiger.png',
      '/img/backed/waterdrip.png',
    ];
    
  </script>
  
  <style lang="scss" scoped>
  /* Add any additional styles if needed */
  </style>
  
