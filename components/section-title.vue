<template>
    <div class="mb-8 md:mb-14 lg:mb-16 xl:mb-18 text-center section__title">
        <h2 v-if="props.title" :class="['text-[25px] md:text-[52px] leading-tight font-medium', props.subtitle ? 'mb-4 lg:mb-6' : '']">{{ props.title }}</h2>
        <p v-if="props.subtitle" class="relative mb-0 text-[14px] md:text-[16px] leading-[1.7]">{{ props.subtitle }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        title:{type:String,required:true},
        subtitle: String,
    })
</script>

<style lang="scss" scoped>

</style>