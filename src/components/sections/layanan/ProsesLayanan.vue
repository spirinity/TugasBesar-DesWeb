<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- HEADER -->
      <HeaderBanner title="Proses Layanan" fill-color="#EAB308" stroke-color="#7a5f00" />

      <!-- SUBTITLE -->
      <p
        class="font-jakarta text-[20px] md:text-[24px] text-text-gray tracking-[-0.96px] leading-[1.037] text-center max-w-3xl mx-auto mb-16"
      >
        Proses pelayanan kami dirancang untuk memberikan kemudahan dan kepastian kepada klien dalam
        setiap tahapannya.
      </p>

      <!-- PROCESS STEPS -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <!-- Step Number -->
          <div
            class="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 border-[3px] border-border-dark"
          >
            <span class="font-times italic text-[36px] text-cream font-bold">{{ index + 1 }}</span>
          </div>

          <!-- Step Title -->
          <h3 class="font-times italic text-[28px] text-black mb-4 tracking-[-1.12px]">
            {{ step.title }}
          </h3>

          <!-- Step Description -->
          <p class="font-jakarta text-[16px] text-text-gray leading-relaxed tracking-[-0.64px]">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'

const steps = [
  {
    title: 'Konsultasi Awal',
    description:
      'Diskusi awal untuk memahami permasalahan hukum Anda dan memberikan arahan solusi yang tepat.',
  },
  {
    title: 'Analisis Kasus',
    description:
      'Tim kami menganalisis kasus secara mendalam dan menyusun strategi penanganan yang optimal.',
  },
  {
    title: 'Pendampingan',
    description: 'Pendampingan penuh selama proses hukum berlangsung dari awal hingga selesai.',
  },
  {
    title: 'Penyelesaian',
    description:
      'Finalisasi kasus dengan solusi terbaik dan dokumentasi lengkap untuk kepentingan Anda.',
  },
]
</script>
