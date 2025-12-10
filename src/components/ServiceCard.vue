<template>
  <div
    class="group relative bg-transparent border-border-dark border-[3px] border-solid rounded-[15px] p-8 pt-20 pb-12 flex flex-col items-center transition-all duration-300"
    :class="{ 'hover:bg-primary': !disableHover }"
  >
    <!-- Arrow Link -->
    <router-link v-if="link" :to="link" class="absolute top-6 right-6">
      <img
        src="@/assets/icons/arrowbutton.png"
        :alt="`Go to ${title}`"
        class="w-6 h-6 transition-all duration-300"
        :class="{ 'group-hover:brightness-0 group-hover:invert': !disableHover }"
      />
    </router-link>

    <!-- Icon -->
    <img
      :src="icon"
      :alt="`${title} Icon`"
      class="w-20 h-20 mb-6 transition-all duration-300 object-contain"
      :class="{ 'group-hover:brightness-0 group-hover:invert': !disableHover }"
    />

    <!-- Title -->
    <h3
      class="font-times italic text-[28px] md:text-[36px] text-black tracking-[-1px] md:tracking-[-1.44px] leading-[1.037] text-center mb-8 transition-colors duration-300"
      :class="{ 'group-hover:text-cream': !disableHover }"
      v-html="title"
    ></h3>

    <!-- Description -->
    <p
      class="font-jakarta text-[16px] md:text-[24px] text-text-muted tracking-[-0.5px] md:tracking-[-0.96px] leading-[1.4] md:leading-[1.037] text-center transition-colors duration-300"
      :class="{ 'group-hover:text-cream': !disableHover }"
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
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  disableHover: {
    type: Boolean,
    default: false,
  },
})
</script>
