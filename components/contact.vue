<template>
  <div class="container flex px-3 pt-10 md:pt-16">
    <div class="lg:w-2/12"></div>
    <div class="lg:w-10/12 flex flex-wrap items-center -mx-3 contact__form__wrapper p-3 lg:p-14 relative z-10">
      <div class="w-full lg:w-7/12 px-10 md:px-3">
        <div class="content__form__area">
          <h3 class="mb-10 leading-tight text-[25px] md:text-[48px]">{{ title }}</h3>
          <div class="contact__form__inner">
            <UInput v-model="email" class="mb-5" color="transparent" variant="outline" placeholder="Email" />
            <USelect v-model="selectQuestion" class="mb-5" color="transparent" variant="outline" :options="question" />
            <UInput v-model="desc" color="transparent" variant="outline" placeholder="Describe your questions here" />

            <!-- Submit button -->
            <button @click="handleSubmit"
              class="bg-[#FA8C16] min-w-[192px] text-white p-3 mt-[32px]  rounded-[6px] hover:bg-[#F97316] transition duration-300">
              Submit
            </button>
          </div>

        </div>
      </div>
      <div class="w-full lg:w-5/12 px-3 mt-14 lg:mt-0 flex justify-center">
        <img class="sm:max-w-[400px]" src="/public/img/content_IPFS.png" alt="">
      </div>
    </div>
    <div class="lg:w-2/12"></div>
  </div>
</template>

<script setup>
const title = "Get in touch with the team";
const question = reactive([
  'Development Questions',
  'Marketing Questions',
  'Looking for Cooperation',
]);
const email = ref('');
const desc = ref('');
const selectQuestion = reactive(question[0]);
const handleSubmit = () => {
  console.log('Form submitted');
};
</script>

<style lang="scss" scoped></style>