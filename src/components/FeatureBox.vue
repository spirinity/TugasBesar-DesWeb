<template>
  <div
    class="w-full border-[3px] border-border-dark rounded-[15px] px-6 py-6 bg-transparent transition-all hover:bg-white/10"
  >
    <h3
      class="font-times text-[28px] md:text-[32px] lg:text-[36px] text-black text-left leading-tight tracking-[-1.44px] mb-3"
    >
      {{ title }}
    </h3>
    <p
      class="font-jakarta text-[16px] lg:text-[18px] text-border-dark/80 text-left leading-relaxed tracking-[-0.72px]"
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
