<template>
  <div class="contact container flex px-3 pt-10 md:pt-16">
    <div class="lg:w-2/12"></div>
    <div class="lg:w-10/12 flex flex-wrap items-center -mx-3 contact__form__wrapper p-3 lg:p-14 relative z-10">
      <div class="w-full lg:w-7/12 px-10 md:px-3">
        <div class="content__form__area">
          <h3 class="mb-10 leading-tight text-[25px] md:text-[48px]">{{ title }}</h3>
          <div class="contact__form__inner">
            <div class="text">{{ content }}</div>
            <button class="bg-[#FA8C16] min-w-[192px] text-white p-3 mt-[32px]  rounded-[6px] hover:bg-[#F97316] transition duration-300">
              <a href="https://forms.gle/TTxnVhnEyNEkyXUAA" target="_blank" rel="noopener noreferrer">{{ btnText }}</a>
            </button>
          </div>

        </div>
      </div>
      <div class="w-full lg:w-5/12 px-3 mt-14 lg:mt-0 flex justify-center">
        <img class="sm:max-w-[400px]" src="/img/content_IPFS.png" alt="">
      </div>
    </div>
    <div class="lg:w-2/12"></div>
  </div>
</template>

<script setup>
const title = "Start Your Crust Journey Now!";
const content = "Ready to dive into the world of decentralized solutions with Crust? Click below to connect with our experts and explore the possibilities!";
const btnText = "Connect with Crust Team";

const handleSubmit = () => {
  console.log('Form submitted');
};
</script>

<style lang="scss" scoped>
.contact {
  .text {
    color: rgba(255, 255, 255, 0.60);
  }
}
</style>