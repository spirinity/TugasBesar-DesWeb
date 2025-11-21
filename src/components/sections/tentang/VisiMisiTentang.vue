<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- HEADER WITH BACKGROUND -->
      <HeaderBanner title="Visi & Misi" fill-color="#B91C1C" stroke-color="#B91C1C" />

      <!-- SUBTITLE -->
      <p
        class="font-jakarta text-[20px] md:text-[24px] text-text-gray tracking-[-0.96px] leading-[1.037] text-center max-w-[932px] mx-auto mb-16"
      >
        Elsa Garda Indonesia memiliki Visi dan Misi untuk berfokus pada pemberian solusi
        berintegritas bagi masyarakat yang membutuhkan pendampingan hukum.
      </p>

      <!-- VISI & MISI GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[948px] mx-auto">
        <ServiceCard
          v-for="(item, index) in visiMisi"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          disable-hover
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
import ServiceCard from '@/components/ServiceCard.vue'

const visiMisi = [
  {
    title: 'Visi Kami',
    description:
      'Mewujudkan masyarakat yang sadar hukum dan memiliki akses setara terhadap keadilan melalui pelayanan hukum yang profesional, transparan, dan berintegritas.',
    icon: new URL('@/assets/icons/vision.png', import.meta.url).href,
  },
  {
    title: 'Misi Kami',
    description:
      'Memberikan pendampingan hukum bagi masyarakat, mengedukasi publik tentang hak-hak hukum, dan memperjuangkan keadilan sosial secara berkelanjutan.',
    icon: new URL('@/assets/icons/mission.png', import.meta.url).href,
  },
]
</script>
