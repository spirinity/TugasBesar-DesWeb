<template>
  <section class="bg-cream flex items-center py-12 md:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <div class="w-full hidden lg:block">
        <div class="grid grid-cols-12">
          <div class="col-span-5"></div>
          <div class="col-span-7 flex">
            <HeaderBanner
              title="Sejarah Kami"
              fill-color="#DFD600"
              stroke-color="#DFD600"
              align="right"
              class="ml-auto"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center lg:hidden mb-4 w-full">
        <!-- BANNER MOBILE -->
        <HeaderBanner
          title="Sejarah Kami"
          fill-color="#DFD600"
          stroke-color="#DFD600"
          align="center"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div class="lg:col-span-5 flex justify-center lg:justify-start order-1">
          <img
            src="@/assets/images/books.png"
            alt="Sejarah Elsa Garda Indonesia"
            class="w-[200px] md:w-[280px] lg:w-[390px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div class="lg:col-span-7 order-2">
          <div
            class="border-[3px] border-[#424242] rounded-[15px] bg-transparent px-4 py-6 md:px-[23px] md:py-[23px]"
          >
            <div
              class="font-jakarta text-[16px] md:text-[20px] leading-[1.4] md:leading-[1.037] text-[#343434] space-y-4 text-justify"
            >
              <p class="mb-0">
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
