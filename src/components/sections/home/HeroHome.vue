<template>
  <div
    class="bg-cream md:min-h-screen relative overflow-hidden flex flex-col items-center justify-start md:justify-center pb-20 md:pb-40 px-3 pt-20 md:pt-10"
  >
    <!-- 1. Title -->
    <h1 class="order-1 font-times italic text-[48px] md:text-[72px] lg:text-[96px] text-black leading-[1.037] tracking-[-1.5px] md:tracking-[-3.84px] text-center mb-2 md:mb-4 relative z-10">
      Elsa Garda Indonesia
    </h1>

    <!-- 2. Image (Mobile: Order 2, Desktop: Order 3) -->
    <img
      src="@/assets/images/ladyjustice.png"
      alt="Lady Justice"
      class="order-2 md:order-3 w-[240px] md:w-[380px] lg:w-[800px] mx-auto pointer-events-none select-none drop-shadow-xl mb-4 md:mb-0 md:mt-5 relative z-0"
    />

    <!-- 3. Subtitle & Button (Mobile: Order 3, Desktop: Order 2) -->
    <div class="order-3 md:order-2 flex flex-col items-center justify-center relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4">
        <h2
          class="font-jakarta font-bold text-[28px] md:text-[36px] lg:text-[48px] text-primary leading-[1.037] tracking-[-1px] md:tracking-[-2.88px]"
        >
          Lembaga Konsultasi
        </h2>
        <span
          class="font-jakarta font-bold italic text-[28px] md:text-[36px] lg:text-[48px] text-primary leading-[1.037] tracking-[-1px] md:tracking-[-2.88px]"
        >
          &
        </span>
        <h2
          class="font-jakarta font-bold text-[28px] md:text-[36px] lg:text-[48px] text-primary leading-[1.037] tracking-[-1px] md:tracking-[-2.88px]"
        >
          Badan Hukum
        </h2>
      </div>

      <router-link to="/kontak">
        <button
          class="mt-4 md:mt-[30px] w-[170px] md:w-[183px] h-[45px] border border-primary border-solid rounded-[15px] bg-transparent font-times font-bold italic text-[24px] md:text-[28px] text-primary hover:bg-primary hover:text-cream transition-all duration-300"
        >
          Konsultasi
        </button>
      </router-link>
    </div>

    <!-- 4. Quote (Order 4) -->
    <div class="order-4 absolute bottom-[20px] md:bottom-[80px] w-full z-10 px-4 hidden md:block">
      <div class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <p
          class="font-times italic text-[28px] md:text-[48px] lg:text-[64px] text-black text-center leading-[1.037] tracking-[-1px] md:tracking-[-2.56px]"
        >
          "Tegak Hukum,
        </p>
        <p
          class="font-times italic text-[28px] md:text-[48px] lg:text-[64px] text-black text-center leading-[1.037] tracking-[-1px] md:tracking-[-2.56px]"
        >
          Luhur Kemanusiaan."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
