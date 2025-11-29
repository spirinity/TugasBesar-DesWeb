<template>
  <section class="bg-cream min-h-screen flex items-center py-16 md:py-20">
    <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
      <!-- HEADER SECTION -->
      <div class="space-y-1 mb-0 lg:mb-0">
        <!-- MAIN TITLE -->
        <h1
          class="font-times italic text-[64px] md:text-[80px] lg:text-[86px] text-black leading-tight tracking-[-3.84px] text-center lg:text-left"
        >
          Elsa Garda Indonesia
        </h1>

        <!-- TENTANG KAMI HEADER BANNER -->
        <div class="w-full lg:text-left">
          <HeaderBanner
            title="Tentang Kami"
            fill-color="#05356B"
            stroke-color="#05356B"
            align="left"
          />
        </div>
      </div>

      <!-- CONTENT GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-8">
        <!-- LEFT CONTENT (DESCRIPTION BOX) -->
        <div class="lg:col-span-8">
          <div
            class="border-[3px] border-[#424242] rounded-[15px] bg-transparent px-6 py-50 md:px-[23px] md:py-[10px]"
          >
            <div
              class="font-jakarta text-[20px] leading-[1.037] text-[#343434] space-y-4 text-justify"
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
        <div class="lg:col-span-4 flex justify-center lg:justify-end">
          <img
            src="@/assets/images/egnlogo.png"
            alt="Logo Elsa Garda Indonesia"
            class="w-[180px] md:w-[260px] lg:w-[270px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
</script>
