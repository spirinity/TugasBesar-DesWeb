<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        <!-- LEFT IMAGE -->
        <!-- LEFT IMAGE -->
        <div class="hidden md:flex justify-center md:justify-end flex-1 order-2 md:order-1">
          <img
            src="@/assets/images/books.png"
            alt="Gedung LKBH"
            class="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain drop-shadow-xl select-none"
          />
        </div>

        <!-- RIGHT CONTENT -->
        <div class="flex-1 order-1 md:order-2">
          <!-- MAIN TITLE -->
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

          <!-- BOXES CONTAINER -->
          <div class="flex flex-col gap-5 w-full">
            <div
              v-for="(box, index) in boxes"
              :key="index"
              class="w-full border-[3px] border-border-dark rounded-[15px] px-6 py-6 bg-transparent transition-all hover:bg-white/10"
            >
              <h3
                class="font-times text-[28px] md:text-[32px] lg:text-[36px] text-black text-left leading-tight tracking-[-1.44px] mb-3"
              >
                {{ box.title }}
              </h3>
              <p
                class="font-jakarta text-[16px] lg:text-[18px] text-border-dark/80 text-left leading-relaxed tracking-[-0.72px]"
              >
                {{ box.description }}
              </p>
            </div>
          </div>
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
