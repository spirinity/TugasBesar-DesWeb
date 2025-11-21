<template>
  <div
    class="bg-cream min-h-screen relative overflow-hidden flex flex-col items-center justify-center pb-40"
  >
    <div class="text-center relative z-10 pt-10">
      <h1 class="font-times italic text-[96px] text-black leading-[1.037] tracking-[-3.84px]">
        Elsa Garda Indonesia
      </h1>

      <div class="flex items-center justify-center gap-4">
        <h2
          class="font-jakarta font-bold text-[48px] text-primary leading-[1.037] tracking-[-2.88px]"
        >
          Lembaga Konsultasi
        </h2>
        <span
          class="font-jakarta font-bold italic text-[48px] text-primary leading-[1.037] tracking-[-2.88px]"
        >
          &
        </span>
        <h2
          class="font-jakarta font-bold text-[48px] text-primary leading-[1.037] tracking-[-2.88px]"
        >
          Badan Hukum
        </h2>
      </div>

      <button
        class="mt-[30px] w-[183px] h-[45px] border border-primary border-solid rounded-[15px] bg-transparent font-times font-bold italic text-[28px] text-primary hover:bg-primary hover:text-cream transition-all duration-300"
      >
        Konsultasi
      </button>
    </div>

    <img
      src="@/assets/images/ladyjustice.png"
      alt="Lady Justice"
      class="mt-5 w-[300px] md:w-[380px] lg:w-[800px] mx-auto pointer-events-none select-none drop-shadow-xl"
    />

    <div class="absolute bottom-[80px] w-full z-10">
      <div class="flex items-center justify-center gap-4">
        <p
          class="font-times italic text-[64px] text-black text-center leading-[1.037] tracking-[-2.56px]"
        >
          "Tegak Hukum,
        </p>
        <p
          class="font-times italic text-[64px] text-black text-center leading-[1.037] tracking-[-2.56px]"
        >
          Luhur Kemanusiaan."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
