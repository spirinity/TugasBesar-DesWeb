<template>
  <button
    @click="$emit('click')"
    class="px-6 py-2 border-[1px] rounded-[10px] font-times italic font-bold text-[20px] tracking-[-0.36px] transition-colors"
    :class="
      isActive
        ? 'border-primary bg-primary text-cream'
        : 'border-primary bg-transparent text-primary hover:bg-primary hover:text-cream'
    "
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>
