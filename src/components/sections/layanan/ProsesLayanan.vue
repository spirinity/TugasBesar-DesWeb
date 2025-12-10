<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <HeaderBanner
        title="Proses Layanan"
        fill-color="#000000"
        stroke-color="#000000"
        width="450"
        height="100"
      />

      <p
        class="font-jakarta text-[20px] md:text-[24px] text-text-gray tracking-[-0.96px] leading-[1.037] text-center max-w-3xl mx-auto mb-25"
      >
        Proses pelayanan kami dirancang untuk memberikan kemudahan dan kepastian kepada klien dalam
        setiap tahapannya.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <ProcessStep
          v-for="(step, index) in steps"
          :key="index"
          :step-number="index + 1"
          :title="step.title"
          :description="step.description"
          :color="step.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
import ProcessStep from '@/components/ProcessStep.vue'

const steps = [
  {
    title: 'Konsultasi Awal',
    description:
      'Diskusi awal untuk memahami permasalahan hukum Anda dan memberikan arahan solusi yang tepat.',
    color: '#05356B', 
  },
  {
    title: 'Analisis Kasus',
    description:
      'Tim kami menganalisis kasus secara mendalam dan menyusun strategi penanganan yang optimal.',
    color: '#C41E3A', 
  },
  {
    title: 'Pendampingan',
    description: 'Pendampingan penuh selama proses hukum berlangsung dari awal hingga selesai.',
    color: '#FFD700', 
  },
  {
    title: 'Penyelesaian',
    description:
      'Finalisasi kasus dengan solusi terbaik dan dokumentasi lengkap untuk kepentingan Anda.',
    color: '#000000', 
  },
]
</script>
