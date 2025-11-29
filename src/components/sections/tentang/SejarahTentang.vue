<template>
  <section class="bg-cream min-h-screen flex items-center py-16 md:py-20">
    <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <!-- SEJARAH KAMI HEADER BANNER -->
      <div class="mb-0 lg:mb-4 w-full text-center lg:text-right">
        <HeaderBanner
          title="Sejarah Kami"
          fill-color="#DFD600"
          stroke-color="#DFD600"
          align="right"
        />
      </div>

      <!-- CONTENT GRID -->
      <div class="grid grid-cols-5 lg:grid-cols-15 gap-12 lg:gap-18 items-center">
        <!-- LEFT IMAGE -->
        <div class="lg:col-span-7 flex justify-center lg:justify-start">
          <img
            src="@/assets/images/books.png"
            alt="Sejarah Elsa Garda Indonesia"
            class="w-[200px] md:w-[280px] lg:w-[390px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <!-- RIGHT CONTENT (DESCRIPTION BOX) -->
        <div class="lg:col-span-8">
          <div
            class="border-[3px] border-[#424242] rounded-[15px] bg-transparent px-6 py-50 md:px-[23px] md:py-[10px]"
          >
            <div
              class="font-jakarta text-[20px] leading-[1.037] text-[#343434] space-y-2 text-justify"
            >
              <p class="mb-3">
                <span class="font-normal"
                  >Elsa Garda Indonesia berdiri sebagai lembaga konsultasi dan bantuan hukum yang
                  berkomitmen untuk menghadirkan akses keadilan bagi seluruh masyarakat
                  Indonesia.</span
                >
              </p>
              <p class="mb-0">&nbsp;</p>
              <p class="font-normal mb-0">
                Didirikan pada tahun 2025, lembaga ini lahir dari kepedulian para praktisi hukum
                terhadap keterbatasan akses masyarakat terhadap layanan hukum yang berkualitas dan
                transparan.
              </p>
              <p class="mb-0">&nbsp;</p>
              <p class="font-normal">
                Seiring berjalannya waktu, Elsa Garda Indonesia telah berkembang menjadi wadah
                profesional yang tidak hanya menangani perkara hukum, tetapi juga aktif dalam
                edukasi dan advokasi publik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
</script>
