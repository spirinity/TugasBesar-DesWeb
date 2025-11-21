<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- TITLE -->
      <h2
        class="font-times italic text-[64px] text-black tracking-[-2.56px] leading-[1.037] text-center mb-4"
      >
        Layanan Kami
      </h2>

      <!-- SUBTITLE -->
      <p
        class="font-jakarta text-[24px] text-text-gray tracking-[-0.96px] leading-[1.037] text-center max-w-[932px] mx-auto mb-16"
      >
        Elsa Garda Indonesia melayani dua layanan hukum yang berfokus pada pemberian solusi
        berintegritas bagi masyarakat yang membutuhkan pendampingan hukum.
      </p>

      <!-- SERVICES GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[948px] mx-auto">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
          :link="service.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
  {
    title: 'Advokasi & Bantuan<br />Pro Bono',
    description:
      'Kami aktif dalam pendampingan hukum gratis untuk masyarakat kurang mampu serta advokasi publik demi keadilan sosial.',
    icon: new URL('@/assets/icons/handshake.png', import.meta.url).href,
    link: '/layanan',
  },
  {
    title: 'Konsultasi &<br />Pendampingan Hukum',
    description:
      'Kami menyediakan konsultasi untuk berbagai persoalan hukum baik perdata, pidana, maupun keluarga serta pendampingan selama proses penyelesaian kasus.',
    icon: new URL('@/assets/icons/lawscales.png', import.meta.url).href,
    link: '/layanan',
  },
]
</script>
