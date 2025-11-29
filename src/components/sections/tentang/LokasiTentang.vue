<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <HeaderBanner title="Lokasi Kami" fill-color="#000000" />
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Left Column: Image and Contact Info -->
      <div class="space-y-6">
        <!-- Building Image -->
        <div class="border-[3px] border-border-dark rounded-[15px] overflow-hidden">
          <img
            :src="buildingImage"
            class="w-full h-[282px] object-cover"
            alt="Gedung LKBH Elsa Garda Indonesia"
          />
        </div>

        <!-- Contact Information -->
        <div class="space-y-4">
          <!-- Title -->
          <h3 class="font-times italic text-[36px] text-black leading-tight tracking-[-1.44px]">
            LKBH Elsa Garda Indonesia
          </h3>

          <!-- Address -->
          <div class="flex items-start gap-4">
            <img :src="pinIcon" alt="Location" class="w-8 h-8 flex-shrink-0 object-contain" />
            <p class="font-jakarta text-[20px] text-text-gray leading-tight tracking-[-0.96px]">
              Gedung Wiratama, Jln. Harmonika No. 49, Kelurahan Sidodamai, Kecamatan Samarinda Ilir,
              Kota Samarinda, Kalimantan Timur, 75128
            </p>
          </div>

          <!-- Email -->
          <div class="flex items-center gap-4">
            <img :src="messageIcon" alt="Email" class="w-8 h-8 flex-shrink-0 object-contain" />
            <a
              href="mailto:indobesia@gmail.com"
              class="font-jakarta text-[20px] text-text-gray tracking-[-0.96px] hover:text-primary transition-colors"
            >
              indobesia@gmail.com
            </a>
          </div>

          <!-- Phone -->
          <div class="flex items-center gap-4">
            <img :src="callIcon" alt="Phone" class="w-8 h-8 flex-shrink-0 object-contain" />
            <p class="font-jakarta text-[20px] text-text-gray tracking-[-0.96px]">
              +62 823 5097 1811
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column: Map -->
      <a
        href="https://www.google.com/maps/place/Jl.+Harmonika+No.49,+Dadi+Mulya,+Kec.+Samarinda+Ulu,+Kota+Samarinda,+Kalimantan+Timur+75242/@-0.4889164,117.1451265,17z/data=!3m1!4b1!4m5!3m4!1s0x2df67f1362b4ccf5:0xa9540426a8340b65!8m2!3d-0.4889218!4d117.1477014?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        class="border-[3px] border-border-dark rounded-[15px] overflow-hidden block relative group h-[525px]"
      >
        <iframe
          class="w-full h-full pointer-events-none"
          frameborder="0"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.2706519301063!2d117.14788233484518!3d-0.5023977972742823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6738167b2f51d%3A0x8894320a990a4e3d!2sHARMONIKA!5e0!3m2!1sen!2sid!4v1700000000000"
        ></iframe>

        <!-- Arrow Icon -->
        <div class="absolute top-6 right-6 w-6 h-6 flex items-center justify-center">
          <img :src="arrowIcon" alt="Open in Maps" class="w-full h-full" />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import HeaderBanner from '@/components/HeaderBanner.vue'
import buildingImage from '@/assets/images/gedunglkbh.jpeg'
import pinIcon from '@/assets/icons/pin.png'
import messageIcon from '@/assets/icons/message.png'
import callIcon from '@/assets/icons/call.png'
import arrowIcon from '@/assets/icons/arrowbutton.png'
</script>
