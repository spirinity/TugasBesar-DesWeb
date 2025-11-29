<template>
  <section class="bg-cream min-h-screen flex items-center py-16 md:py-20">
    <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <!-- HEADER SECTION -->
      <div class="mb-12 lg:mb-16">
        <div
          class="mx-auto max-w-[700px] border-[3px] border-border-dark rounded-[15px] px-3 md:px-7 flex flex-col items-center gap-2"
        >
          <h1
            class="font-times italic text-[48px] md:text-[56px] lg:text-[64px] text-black leading-tight tracking-[-3.2px] text-center"
          >
            Layanan
          </h1>
          <h2
            class="font-times italic text-[32px] md:text-[40px] lg:text-[48px] text-black leading-tight tracking-[-2.4px] text-center"
          >
            Elsa Garda Indonesia
          </h2>
        </div>

        <!-- INTRO TEXT -->
        <div class="max-w-4xl mx-auto mb-16">
          <p
            class="font-jakarta text-[20px] md:text-[24px] text-text-gray text-center leading-relaxed tracking-[-0.96px] py-10"
          >
            Kami menyediakan layanan hukum yang komprehensif untuk membantu Anda menyelesaikan
            berbagai permasalahan hukum dengan profesional, transparan, dan berintegritas.
          </p>
        </div>

        <!-- SERVICES GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const services = [
  {
    title: 'Advokasi & Bantuan Pro Bono',
    description:
      'Advokasi & Bantuan Pro Bono adalah bentuk komitmen kami dalam memberikan pelayanan hukum tanpa biaya bagi masyarakat kurang mampu. Kami berperan aktif dalam membela hak-hak warga, memperjuangkan keadilan sosial, serta mendorong kesetaraan di hadapan hukum bagi semua golongan tanpa memandang status ekonomi.',
    icon: new URL('@/assets/icons/lawscales.png', import.meta.url).href,
  },
  {
    title: 'Konsultasi & Pendampingan Hukum',
    description:
      'Konsultasi & Pendampingan Hukum adalah layanan yang diberikan kepada masyarakat untuk membantu memahami persoalan hukum yang dihadapi serta menemukan langkah penyelesaian yang tepat.Melalui pendampingan profesional, kami memastikan setiap individu mendapatkan perlakuan hukum yang adil dan transparan sesuai dengan prinsip keadilan yang berlaku.',
    icon: new URL('@/assets/icons/handshake.png', import.meta.url).href,
  },
]
</script>
