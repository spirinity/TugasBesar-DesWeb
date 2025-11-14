<template>
  <nav class="bg-[#f8edd8] px-[23px] py-1 w-full">
    <div class="flex items-center justify-between h-[76px] max-w-[1394px] mx-auto gap-4">
      <div class="w-[78px] h-[76px] shrink-0">
        <img
          src="../assets/egnlogo.png"
          alt="Logo"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div
        class="flex-1 flex justify-center items-center pl-20 gap-[46px] font-['Times_New_Roman'] text-[24px] text-black"
      >
        <RouterLink to="/" class="no-underline text-black hover:opacity-70 transition-opacity">
          Home
        </RouterLink>

        <RouterLink to="" class="no-underline text-black hover:opacity-70 transition-opacity">
          Tentang
        </RouterLink>

        <RouterLink to="" class="no-underline text-black hover:opacity-70 transition-opacity">
          Layanan
        </RouterLink>

        <RouterLink to="" class="no-underline text-black hover:opacity-70 transition-opacity">
          FAQ
        </RouterLink>
      </div>

      <div class="shrink-0">
        <RouterLink
          to="/kontak"
          class="flex items-center justify-center w-[144px] h-[45px] bg-transparent border-[#05356b] border-[3px] border-solid rounded-[10px] font-['Times_New_Roman'] text-[28px] font-bold italic leading-normal text-[#05356b] text-center tracking-[-0.56px] no-underline hover:bg-[#05356b] hover:text-[#f8edd8] transition-all duration-300"
        >
          Kontak
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
