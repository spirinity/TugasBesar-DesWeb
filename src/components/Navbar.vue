<template>
  <nav
    class="px-6 py-2 w-full sticky top-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-lg' : 'bg-cream']"
  >
    <div class="flex items-center justify-between h-[76px] max-w-[1394px] mx-auto">
      <!-- Logo -->
      <div class="w-[60px] h-[60px] md:w-[144px] md:h-[76px] shrink-0 flex items-center">
        <RouterLink to="/" class="block w-full h-full md:w-[78px] md:h-[76px]">
          <img
            src="@/assets/images/egnlogo.png"
            alt="Logo"
            class="w-full h-full object-cover object-center"
          />
        </RouterLink>
      </div>

      <!-- Desktop Menu -->
      <div
        class="hidden lg:flex flex-1 justify-center items-center gap-[46px] font-times text-[24px] text-black"
      >
        <RouterLink
          to="/"
          class="nav-link no-underline text-black"
          :class="{ 'font-bold': $route.path === '/' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/tentang"
          class="nav-link no-underline text-black"
          :class="{ 'font-bold': $route.path === '/tentang' }"
        >
          Tentang
        </RouterLink>
        <RouterLink
          to="/layanan"
          class="nav-link no-underline text-black"
          :class="{ 'font-bold': $route.path === '/layanan' }"
        >
          Layanan
        </RouterLink>
        <RouterLink
          to="/edukasi"
          class="nav-link no-underline text-black"
          :class="{ 'font-bold': $route.path === '/edukasi' }"
        >
          Edukasi
        </RouterLink>

        <RouterLink
          to="/cots"
          class="nav-link no-underline text-black"
          :class="{ 'font-bold': $route.path === '/cots' }"
        >
          Coding On The Spot
        </RouterLink>
      </div>

      <!-- Desktop Contact Button -->
      <div class="hidden lg:block shrink-0">
        <RouterLink
          to="/kontak"
          class="flex items-center justify-center w-[144px] h-[45px] bg-transparent border-primary border-[3px] border-solid rounded-[10px] font-times text-[28px] font-bold italic leading-normal text-primary text-center tracking-[-0.56px] no-underline hover:bg-primary hover:text-cream transition-all duration-200"
        >
          Kontak
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden p-2 text-primary focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden absolute top-full left-0 w-full bg-cream shadow-lg border-t border-primary/10 py-4 px-6 flex flex-col gap-4"
    >
      <RouterLink
        to="/"
        class="font-times text-xl text-black hover:text-primary transition-colors"
        :class="{ 'font-bold': $route.path === '/' }"
        @click="isMobileMenuOpen = false"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/tentang"
        class="font-times text-xl text-black hover:text-primary transition-colors"
        :class="{ 'font-bold': $route.path === '/tentang' }"
        @click="isMobileMenuOpen = false"
      >
        Tentang
      </RouterLink>
      <RouterLink
        to="/layanan"
        class="font-times text-xl text-black hover:text-primary transition-colors"
        :class="{ 'font-bold': $route.path === '/layanan' }"
        @click="isMobileMenuOpen = false"
      >
        Layanan
      </RouterLink>
      <RouterLink
        to="/edukasi"
        class="font-times text-xl text-black hover:text-primary transition-colors"
        :class="{ 'font-bold': $route.path === '/edukasi' }"
        @click="isMobileMenuOpen = false"
      >
        Edukasi
      </RouterLink>
      <RouterLink
        to="/kontak"
        class="w-full h-[45px] flex items-center justify-center bg-transparent border-primary border-[2px] rounded-[10px] font-times text-xl font-bold italic text-primary hover:bg-primary hover:text-cream transition-all duration-200"
        @click="isMobileMenuOpen = false"
      >
        Kontak
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const $route = useRoute()

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
  font-family: 'Times New Roman', serif;
  transition:
    text-shadow 0.25s ease,
    transform 0.25s ease,
    color 0.25s ease;
}

.nav-link:hover {
  text-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.5),
    0px 0px 1px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
  color: #000000;
}
</style>
