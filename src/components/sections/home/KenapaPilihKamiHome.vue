<template>
  <section class="bg-cream w-full overflow-hidden relative py-20 md:py-0">
    <div class="hidden md:block absolute top-0 left-0 w-[68%] h-full z-0">
      <img
        src="@/assets/images/building.png"
        alt="Gedung LKBH"
        class="w-full h-full object-cover object-right"
      />
    </div>

    </

      <!-- RIGHT CONTENT SECTION -->
      <div class="md:col-span-7 flex flex-col justify-center px-6 md:pr-12 lg:pr-24 py-10 md:py-20">
        <!-- MAIN TITLE -->
        <h2
          class="font-times italic text-[40px] md:text-[50px] lg:text-[64px] text-black text-center md:text-right leading-[1.03] tracking-[-2.56px] mb-12 lg:mb-16"
        >
          Kenapa Pilih Kami?
        </h2>

        <!-- BOXES CONTAINER -->
        <div class="flex flex-col gap-5 items-center md:items-end w-full">
          <div
            v-for="(box, index) in boxes"
            :key="index"
            class="w-full max-w-[629px] border-[3px] border-border-dark rounded-[15px] px-4 py-6 bg-transparent transition-all hover:bg-white/10"
          >
            <h3
              class="font-times text-[28px] md:text-[32px] lg:text-[36px] text-black text-center leading-tight tracking-[-1.44px] mb-3"
            >
              {{ box.title }}
            </h3>
            <p
              class="font-jakarta text-[16px] lg:text-[18px] text-border-dark/80 text-center leading-relaxed tracking-[-0.72px]"
            >
              {{ box.description }}
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
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
