<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="flex mb-12">
        <div class="border-[3px] border-border-dark rounded-[15px] px-12 py-6 w-fit ">
          <h2
            class="font-times italic text-[64px] text-black tracking-[-2.56px] leading-tight whitespace-nowrap"
          >
            Layanan
          </h2>
          <h3
            class="font-jakarta font-bold italic text-[48px] text-primary tracking-[-2.88px] leading-tight whitespace-nowrap"
          >
            Advokasi & Bantuan Pro Bono
          </h3>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border-[3px] border-border-dark rounded-[15px] p-4 flex flex-col items-center"
        >
          <!-- Service Title -->
          <h4
            class="font-times italic text-[32px] text-black text-center tracking-[-1.28px] leading-tight mb-8"
          >
            {{ service.title }}
          </h4>

          <!-- Service Description -->
          <p
            class="font-jakarta text-[23px] text-[#343434] text-center tracking-[-0.96px] leading-tight"
          >
            {{ service.description }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <a href="#contact" class="relative group inline-block" style="width: 392px; height: 75px">
          <!-- SVG Ribbon Background -->
          <svg
            width="392"
            height="75"
            viewBox="0 0 392 75"
            xmlns="http://www.w3.org/2000/svg"
            class="block w-full h-full"
          >
            <path
              d="M390.924 0.5H0.924316L9.42432 13.5V61.5L0.924316 74.5H390.924L383.592 64.2241V12.5775L390.924 0.5Z"
              fill="transparent"
              stroke="#05356B"
              stroke-width="3"
              class="group-hover:fill-[#05356B] transition-all duration-300"
            />
          </svg>
          <!-- Button Text -->
          <div class="absolute inset-0 flex items-center justify-center px-4">
            <span
              class="font-times font-bold italic text-[32px] text-primary group-hover:text-white transition-colors duration-300"
            >
              Konsultasi Sekarang
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Pendampingan Kasus Ketenagakerjaan',
    description:
      'Memberikan pendampingan hukum bagi masyarakat, mengedukasi publik tentang hak-hak hukum, dan memperjuangkan keadilan sosial secara berkelanjutan.',
  },
  {
    title: 'Perlindungan Hukum Keluarga',
    description:
      'Memberikan pendampingan bagi keluarga dalam kasus kekerasan dalam rumah tangga (KDRT), hak asuh anak, serta persoalan waris atau perceraian.',
  },
  {
    title: 'Advokasi Publik & Sosial',
    description:
      'Menyediakan pembelaan bagi masyarakat yang menghadapi proses hukum pidana, dengan fokus pada hak-hak tersangka dan asas keadilan yang setara di depan hukum.',
  },
  {
    title: 'Pembelaan Hukum Pidana',
    description:
      'Terlibat dalam kegiatan advokasi bersama masyarakat sipil untuk memperjuangkan kebijakan yang adil, serta melindungi kelompok rentan dari diskriminasi hukum.',
  },
]
</script>
