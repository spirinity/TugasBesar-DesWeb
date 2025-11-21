<template>
  <section class="bg-cream min-h-screen flex items-center py-16 md:py-20">
    <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <!-- HEADER SECTION -->
      <div class="space-y-8 mb-12 lg:mb-16">
        <!-- MAIN TITLE -->
        <h1
          class="font-times italic text-[64px] md:text-[80px] lg:text-[86px] text-black leading-tight tracking-[-3.84px] text-center"
        >
          Layanan Kami
        </h1>

        <!-- LAYANAN HEADER BANNER -->
        <div class="w-full">
          <HeaderBanner
            title="Layanan Hukum Profesional"
            fill-color="#05356B"
            stroke-color="#424243"
            align="center"
          />
        </div>
      </div>

      <!-- INTRO TEXT -->
      <div class="max-w-4xl mx-auto mb-16">
        <p
          class="font-jakarta text-[20px] md:text-[24px] text-text-gray text-center leading-relaxed tracking-[-0.96px]"
        >
          Kami menyediakan layanan hukum yang komprehensif untuk membantu Anda menyelesaikan
          berbagai permasalahan hukum dengan profesional, transparan, dan berintegritas.
        </p>
      </div>

      <!-- SERVICES GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
  {
    title: 'Konsultasi Hukum Perdata',
    description:
      'Pendampingan untuk kasus perdata seperti sengketa tanah, waris, kontrak, dan perselisihan bisnis dengan pendekatan yang profesional dan solusi yang tepat.',
    icon: new URL('@/assets/icons/lawscales.png', import.meta.url).href,
  },
  {
    title: 'Konsultasi Hukum Pidana',
    description:
      'Bantuan hukum untuk kasus pidana mulai dari tahap penyidikan hingga persidangan dengan pendampingan penuh dari tim advokat berpengalaman.',
    icon: new URL('@/assets/icons/handshake.png', import.meta.url).href,
  },
  {
    title: 'Hukum Keluarga',
    description:
      'Penanganan kasus perceraian, hak asuh anak, pembagian harta gono-gini, dan permasalahan keluarga lainnya dengan pendekatan yang sensitif dan profesional.',
    icon: new URL('@/assets/icons/lawscales.png', import.meta.url).href,
  },
  {
    title: 'Advokasi Pro Bono',
    description:
      'Layanan hukum gratis bagi masyarakat kurang mampu untuk memastikan setiap orang memiliki akses terhadap keadilan tanpa hambatan ekonomi.',
    icon: new URL('@/assets/icons/handshake.png', import.meta.url).href,
  },
]
</script>
