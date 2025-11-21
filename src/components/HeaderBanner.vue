<template>
  <div
    class="mb-16 w-full flex"
    :class="{
      'justify-center': align === 'center',
      'justify-start': align === 'left',
      'justify-end': align === 'right',
    }"
  >
    <div class="relative" :style="{ width: width + 'px', height: height + 'px' }">
      <!-- Inline SVG Ribbon -->
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 392 75"
        xmlns="http://www.w3.org/2000/svg"
        class="block w-full h-full"
      >
        <path
          d="M390.924 0.5H0.924316L9.42432 13.5V61.5L0.924316 74.5H390.924L383.592 64.2241V12.5775L390.924 0.5Z"
          :fill="fillColor"
          :stroke="strokeColor"
        />
      </svg>
      <!-- Title Text (slot or prop) -->
      <div class="absolute inset-0 flex items-center justify-center px-4">
        <h2
          class="font-times italic text-[40px] md:text-[64px] text-white text-center leading-[1.037] tracking-[-2.56px] whitespace-nowrap"
        >
          <slot>{{ title }}</slot>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  fillColor: {
    type: String,
    default: '#05356B', // default blue
  },
  strokeColor: {
    type: String,
    default: '#424243',
  },
  width: {
    type: Number,
    default: 392,
  },
  height: {
    type: Number,
    default: 75,
  },
  align: {
    type: String,
    default: 'center', // 'left' | 'center' | 'right'
    validator: (v) => ['left', 'center', 'right'].includes(v),
  },
})
</script>
