<template>
  <section class="bg-cream xl:min-h-screen flex items-center py-6 md:py-8 lg:py-10">
    <div class="max-w-7xl mx-auto w-full px-4 md:px-12 lg:px-16">
      <div class="space-y-1 mb-3 md:mb-3 lg:mb-0">
        <h1
          class="font-times italic text-[48px] md:text-[64px] lg:text-[86px] text-black leading-tight tracking-[-1.5px] md:tracking-[-3.84px] text-center lg:text-left"
        >
          Elsa Garda Indonesia
        </h1>

        <div class="w-full flex justify-center lg:block lg:text-left">
            <!-- MOBILE BANNER -->
          <HeaderBanner
            title="Tentang Kami"
            fill-color="#05356B"
            stroke-color="#05356B"
            align="center"
            class="lg:hidden"
          />
          <HeaderBanner
            title="Tentang Kami"
            fill-color="#05356B"
            stroke-color="#05356B"
            align="left"
            class="hidden lg:block"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-16 items-center mt-3 md:mt-4"
      >
        <!-- LEFT CONTENT (DESCRIPTION BOX) -->
        <div class="lg:col-span-8 order-2 lg:order-1">
          <div
            class="border-[3px] border-[#424242] rounded-[15px] bg-transparent px-4 py-6 md:px-[23px] md:py-[10px]"
          >
            <div
              class="font-jakarta text-[16px] md:text-[20px] leading-[1.4] md:leading-[1.037] text-[#343434] space-y-4 text-justify"
            >
              <p class="mb-0">
                <span class="font-normal">Lembaga Konsultasi dan Bantuan Hukum (LKBH) </span>
                <span class="font-bold">Elsa Garda Indonesia </span>
                <span class="font-normal"
                  >adalah organisasi yang berdedikasi memberikan akses keadilan kepada seluruh
                  lapisan masyarakat. Sejak didirikan, kami telah melayani ribuan klien dengan
                  komitmen penuh pada profesionalisme, transparansi, dan keadilan sosial.</span
                >
              </p>
              <p class="mb-0">&nbsp;</p>
              <p class="font-normal mb-0">
                Dengan tim lawyer berpengalaman dan bersertifikat, kami menyediakan layanan
                konsultasi hukum, pendampingan legal, dan advokasi pro bono untuk membantu
                masyarakat memahami hak-hak hukum mereka. Kami percaya bahwa setiap orang berhak
                mendapatkan akses keadilan, terlepas dari latar belakang ekonomi atau sosial mereka.
              </p>
              <p class="mb-0">&nbsp;</p>
              <p class="font-normal">
                Misi kami adalah memberdayakan masyarakat melalui edukasi hukum, memberikan solusi
                hukum yang adil dan transparan, serta memperjuangkan keadilan bagi yang membutuhkan.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT LOGO -->
        <div class="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="@/assets/images/egnlogo.png"
            alt="Logo Elsa Garda Indonesia"
            class="w-[150px] md:w-[260px] lg:w-[270px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
</script>
