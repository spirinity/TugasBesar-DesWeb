<template>
  <section
    class="bg-cream min-h-[90vh] flex items-center relative overflow-hidden px-6 md:px-12 lg:px-24"
  >
    <!-- Decorative Background Elements
    <div
      class="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
    ></div> -->

    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
    >
      <!-- Left Content: Text -->
      <div class="text-left space-y-8 order-2 lg:order-1">
        <div>
          <span
            class="font-jakarta font-bold text-primary tracking-widest uppercase text-sm mb-3 block"
          >
            Pusat Edukasi Hukum
          </span>
          <h1
            class="font-times italic text-[56px] md:text-[72px] lg:text-[84px] text-black leading-[1.05] mb-6 tracking-[-2px]"
          >
            <span class="block">Perkaya</span>
            <span class="block">
              <span class="text-primary">Wawasan</span> Anda
            </span>
          </h1>
          <p
            class="font-jakarta text-lg md:text-xl text-[#343434] max-w-lg leading-relaxed tracking-[-0.4px]"
          >
            Temukan berbagai artikel, panduan, dan materi hukum yang disusun secara komprehensif
            untuk menjawab kebutuhan informasi Anda.
          </p>
        </div>

        <div class="flex flex-wrap gap-4">
          <button
            class="mt-[10px] px-8 h-[45px] border border-primary border-solid rounded-[15px] bg-transparent font-times font-bold italic text-[28px] text-primary hover:bg-primary hover:text-cream transition-all duration-300"
          >
            Mulai Membaca
          </button>
        </div>
      </div>

      <!-- Right Content: Image -->
      <div class="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div class="relative w-full max-w-[400px] lg:max-w-[550px]">
          <!-- Abstract shape behind -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-2xl -z-10"
          ></div>

          <img
            src="@/assets/images/books.png"
            alt="Koleksi Buku Hukum"
            class="relative z-10 w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
