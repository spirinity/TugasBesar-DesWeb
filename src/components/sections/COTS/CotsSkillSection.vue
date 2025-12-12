<template>
  <section class="bg-cream *relative flex justify-center px-8 py-12 md:py-24">
    <div
      class="relative flex h-full w-full max-w-[1440px] flex-row items-center justify-center gap-12 px-4 text-center md:gap-8"
    >
      <div class="relative flex flex-col justify-start gap-4 text-left">
        <div class="flex flex-col justify-start">
          <h1
            class="text-3xl font-times tracking-tight capitalize text-center md:text-4xl lg:text-5xl"
          >
            Skills
          </h1>
        </div>
        <div
          class="relative grid h-fit w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
        >
          <ServiceCard
            v-for="(skill, index) in skills"
            :key="index"
            :title="skill.name"
            :description="skill.desc"
            :icon="skill.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'
import lawIcon from '@/assets/icons/lawscales.png'
import missionIcon from '@/assets/icons/mission.png'
import handshakeIcon from '@/assets/icons/handshake.png'

const skills = [
  {
    name: 'Music',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.',
    icon: lawIcon,
  },
  {
    name: 'Production',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.',
    icon: missionIcon,
  },
  {
    name: 'Coding',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.',
    icon: handshakeIcon,
  },
]
</script>
