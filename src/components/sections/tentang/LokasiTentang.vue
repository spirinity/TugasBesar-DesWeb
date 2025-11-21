<template>
  <section class="bg-[#efe3cf] py-20 px-6 md:px-12">
    <div class="text-center mb-12">
      <HeaderBanner title="Lokasi Kami" fill-color="#000000" />
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div class="border border-[#4b4637] rounded-[15px] overflow-hidden shadow-md">
        <img
          src="@/assets/images/gedunglkbh.jpeg"
          class="w-full h-[300px] md:h-[360px] object-cover"
          alt="Gedung LKBH Elsa Garda Indonesia"
        />

        <div class="font-['Plus_Jakarta_Sans'] px-5 py-6">
          <p class="italic font-['Times_New_Roman'] text-[22px] mb-4">LKBH Elsa Garda Indonesia</p>

          <div class="flex items-start gap-3 mb-4">
            <span class="text-[22px]"></span>
            <p class="text-[15px] leading-relaxed">
              Gedung Wiratama, Jln. Harmonika No. 49, Kelurahan Sidodamai, Kecamatan Samarinda Ilir,
              Kota Samarinda, Kalimantan Timur, 75128
            </p>
          </div>

          <div class="flex items-center gap-3 mb-4">
            <span class="text-[20px]"></span>
            <p class="text-[15px]">indobesia@gmail.com</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-[22px]"></span>
            <p class="text-[15px]">+62 823 5097 1811</p>
          </div>
        </div>
      </div>

      <div class="border border-[#4b4637] rounded-[15px] overflow-hidden shadow-md relative">
        <iframe
          class="w-full h-[360px] md:h-[420px]"
          frameborder="0"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.2706519301063!2d117.14788233484518!3d-0.5023977972742823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6738167b2f51d%3A0x8894320a990a4e3d!2sHARMONIKA!5e0!3m2!1sen!2sid!4v1700000000000"
        ></iframe>

        <a
          href="https://www.google.com/maps?q=Gedung+Wiratama+Jalan+Harmonika+49+Samarinda"
          target="_blank"
          class="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full hover:bg-white transition"
        >
          ↗
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
</script>
