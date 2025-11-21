<template>
  <nav
    class="px-[23px] py-1 pt-1 w-full sticky top-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-lg' : 'bg-cream']"
  >
    <div class="flex items-center justify-between h-[76px] max-w-[1394px] mx-auto gap-4">
      <div class="w-[78px] h-[76px] shrink-0">
        <img
          src="@/assets/images/egnlogo.png"
          alt="Logo"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div
        class="flex-1 flex justify-center items-center pl-20 gap-[46px] font-times text-[24px] text-black"
      >
        <RouterLink to="/" class="nav-link no-underline text-black"> Home </RouterLink>

        <RouterLink to="/tentang" class="nav-link no-underline text-black"> Tentang </RouterLink>

        <RouterLink to="layanan" class="nav-link no-underline text-black"> Layanan </RouterLink>

        <RouterLink to="" class="nav-link no-underline text-black"> FAQ </RouterLink>
      </div>

      <div class="shrink-0">
        <RouterLink
          to="/kontak"
          class="flex items-center justify-center w-[144px] h-[45px] bg-transparent border-primary border-[3px] border-solid rounded-[10px] font-times text-[28px] font-bold italic leading-normal text-primary text-center tracking-[-0.56px] no-underline hover:bg-primary hover:text-cream transition-all duration-200"
        >
          Kontak
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  font-weight: 400;
  transition: font-weight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  font-weight: 700;
}
</style>
