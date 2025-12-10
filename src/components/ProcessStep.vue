<template>
  <div class="flex flex-col items-center text-center">
    <!-- Step Number -->
    <div
      class="w-20 h-20 rounded-full flex items-center justify-center mb-6"
      :style="{ backgroundColor: color }"
    >
      <span class="font-times italic text-[36px] text-cream font-bold">{{ stepNumber }}</span>
    </div>

    <!-- Step Title -->
    <h3 class="font-times italic text-[28px] text-black mb-4 tracking-[-1.12px]">
      {{ title }}
    </h3>

    <!-- Step Description -->
    <p class="font-jakarta text-[16px] text-text-gray leading-relaxed tracking-[-0.64px]">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  stepNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
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
