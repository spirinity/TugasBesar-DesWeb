<template>
  <section class="relative w-full h-screen min-h-[850px] flex items-center justify-center">
    <div class="absolute inset-0 pointer-events-none">
      <img :src="courtroomImage" alt="Courtroom" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-cream opacity-75"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12 px-6">
      <!-- Title -->
      <h1 class="font-times italic text-6xl md:text-7xl lg:text-8xl text-black text-center">
        Layanan
      </h1>

      <!-- Logo -->
      <div class="w-42 h-42 md:w-64 md:h-64 lg:w-72 lg:h-72">
        <img
          :src="logoImage"
          alt="LKBH Elsa Garda Nusantara Logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import courtroomImage from '@/assets/images/courtroom.jpg'
import logoImage from '@/assets/images/egnlogo.png'
</script>
