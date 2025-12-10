<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div class="hidden md:flex justify-center md:justify-end flex-1 order-2 md:order-1">
          <img
            src="@/assets/images/books.png"
            alt="Gedung LKBH"
            class="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain drop-shadow-xl select-none"
          />
        </div>

        <div class="flex-1 order-1 md:order-2">
          <h2
            class="font-times italic text-[40px] md:text-[50px] lg:text-[64px] text-black text-center md:text-left leading-[1.03] tracking-[-2.56px] mb-8 md:mb-12 lg:mb-16"
          >
            Kenapa Pilih Kami?
          </h2>

          <!-- MOBILE IMAGE -->
          <div class="md:hidden flex justify-center mb-12">
            <img
              src="@/assets/images/books.png"
              alt="Gedung LKBH"
              class="w-full max-w-[320px] h-auto object-contain drop-shadow-xl select-none"
            />
          </div>

          <div class="flex flex-col gap-5 w-full">
            <FeatureBox
              v-for="(box, index) in boxes"
              :key="index"
              :title="box.title"
              :description="box.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureBox from '@/components/FeatureBox.vue'

const boxes = [
  {
    title: 'Pendampingan Profesional & Personal',
    description:
      'Tim berpengalaman kami siap memberikan pendampingan hukum yang profesional dengan sentuhan personal. Setiap klien mendapatkan perhatian khusus dan solusi yang disesuaikan dengan kebutuhan spesifik mereka.',
  },
  {
    title: 'Solusi Hukum yang Transparan & Jelas',
    description:
      'Kami berkomitmen pada transparansi penuh dalam setiap proses hukum. Klien akan selalu diberikan informasi yang jelas tentang strategi, biaya, dan kemungkinan hasil, sehingga tidak ada kejutan di tengah perjalanan hukum.',
  },
  {
    title: 'Komitmen pada Keadilan Sosial (Pro Bono)',
    description:
      'Selain melayani klien korporat, kami juga berdedikasi memberikan layanan pro bono untuk masyarakat yang kurang mampu. Karena kami percaya bahwa akses keadilan adalah hak semua orang, tanpa terkecuali status ekonomi.',
  },
]
</script>
