<template>
  <div class="border-[3px] border-border-dark rounded-[15px] p-6 md:p-4 flex flex-col items-center">
    <!-- Service Title -->
    <h4
      class="font-times italic text-[24px] md:text-[32px] text-black text-center tracking-[-1px] md:tracking-[-1.28px] leading-tight mb-4 md:mb-8"
    >
      {{ title }}
    </h4>

    <!-- Service Description -->
    <p
      class="font-jakarta text-[16px] md:text-[23px] text-[#343434] text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-relaxed md:leading-tight"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.font-times {
  font-family: 'Times New Roman', Times, serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
