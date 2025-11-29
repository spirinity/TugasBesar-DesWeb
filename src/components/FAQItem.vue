<template>
  <div class="group">
    <button
      @click="$emit('toggle')"
      class="w-full bg-primary hover:bg-primary/90 transition-colors duration-300 rounded-[10px] px-6 py-4 flex justify-between items-center text-left focus:outline-none"
    >
      <span class="font-times italic text-xl text-white tracking-wide">
        {{ question }}
      </span>
      <span
        class="transform transition-transform duration-300 text-white"
        :class="{ 'rotate-180': isOpen }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </span>
    </button>
    
    <div
      v-show="isOpen"
      class="mt-2 bg-white p-6 rounded-[10px] text-black font-jakarta text-l md:text-xl text-justify leading-normal tracking-[-0.96px]"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle']);
</script>

<style scoped>
.font-times {
  font-family: 'Times New Roman', Times, serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
