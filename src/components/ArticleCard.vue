<template>
  <div
    class="border-[3px] border-border-dark rounded-[15px] p-6 flex flex-col bg-cream hover:border-primary transition-colors cursor-pointer"
    @click="$emit('click')"
  >
    <h3 class="font-times italic text-[32px] tracking-[-1.2px] text-black mb-3">
      {{ title }}
    </h3>
    <p class="font-jakarta text-[18px] text-[#343434] leading-tight tracking-[-0.36px] mb-4">
      {{ excerpt }}
    </p>
    <div class="mt-auto">
      <button
        class="border-[3px] border-primary rounded-[10px] px-6 py-2 font-times italic font-bold text-[20px] text-primary hover:bg-primary hover:text-cream transition-colors"
        @click.stop="$emit('read')"
      >
        Baca
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
})

defineEmits(['click', 'read'])
</script>
