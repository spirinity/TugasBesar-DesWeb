<template>
  <section
    class="bg-gradient-to-b from-[#f8edd8] to-[#e3d7c0] min-h-screen flex items-center py-16 md:py-20 px-6 md:px-12 lg:px-24 relative"
  >
    <!-- Success Popup Modal -->
    <div
      v-if="showPopup"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
    >
      <div
        class="bg-white rounded-[20px] p-8 w-full max-w-[400px] mx-4 relative flex flex-col items-center text-center shadow-2xl animate-fade-in-up"
      >
        <!-- Close Button (X) -->
        <button
          @click="showPopup = false"
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-500"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Success Icon -->
        <div class="w-24 h-24 rounded-full bg-[#05356b] flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00c853"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <!-- Text -->
        <h3 class="font-jakarta text-2xl text-black mb-8">Pesan Telah Terkirim!</h3>

        <!-- Thanks Button -->
        <button
          @click="showPopup = false"
          class="w-full bg-[#05356b] text-white font-jakarta font-medium text-lg py-3 rounded-[10px] hover:bg-[#05356b]/90 transition-colors shadow-md"
        >
          Thanks!
        </button>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-14 lg:gap-20 items-start">
        <!-- Left Column: Contact Info -->
        <div class="space-y-10">
          <!-- Header -->
          <div class="space-y-4">
            <h1
              class="font-times italic text-6xl md:text-7xl lg:text-[80px] text-black leading-tight tracking-[-2.56px]"
            >
              Kontak Kami
            </h1>
            <p
              class="font-jakarta text-xl text-[#636363] leading-[1.037] tracking-[-0.96px] max-w-[420px]"
            >
              Kami siap mendengarkan dan membantu Anda menemukan solusi hukum terbaik.
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-8">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <img
                src="@/assets/vector/vectorpin-dark.svg"
                alt="Location"
                class="w-8 h-8 shrink-0 mt-1"
              />
              <p
                class="font-jakarta text-xl text-[#636363] leading-[1.037] tracking-[-0.96px] max-w-sm"
              >
                Gedung Wiratama, Jln. Harmonika No. 49, Kelurahan Sidodamai, Kecamatan Samarinda
                Ilir, Kota Samarinda, Kalimantan Timur, 75128
              </p>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-4">
              <img
                src="@/assets/vector/vectoremail-dark.svg"
                alt="Email"
                class="w-8 h-8 shrink-0"
              />
              <a
                href="mailto:indobesia@gmail.com"
                class="font-jakarta text-xl text-[#636363] leading-[1.037] tracking-[-0.96px] hover:text-primary transition-colors"
              >
                indobesia@gmail.com
              </a>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-4">
              <img src="@/assets/vector/vectorcall-dark.svg" alt="Phone" class="w-8 h-8 shrink-0" />
              <p class="font-jakarta text-xl text-[#636363] leading-[1.037] tracking-[-0.96px]">
                +62 823 5097 1811
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div
          class="bg-white border-[3px] border-[#424242] rounded-[15px] p-8 md:p-10 lg:p-12 shadow-sm"
        >
          <div class="mb-8">
            <h2
              class="font-times italic text-5xl md:text-[64px] text-black leading-tight tracking-[-2.56px] mb-2"
            >
              Kirim Pesan
            </h2>
            <p
              class="font-jakarta text-xl text-[#636363] leading-[1.037] tracking-[-0.96px] max-w-[500px]"
            >
              Siap membantu anda dengan kebutuhan hukum.
            </p>
          </div>

          <form @submit="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <input
                type="text"
                placeholder="Nama Lengkap"
                required
                class="w-full h-[60px] px-6 rounded-full border border-[#424242] font-jakarta text-lg italic focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#636363]/60"
              />
            </div>

            <!-- Email -->
            <div class="relative">
              <div class="absolute left-6 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#636363"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="opacity-60"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email Anda"
                required
                class="w-full h-[60px] pl-16 pr-6 rounded-full border border-[#424242] font-jakarta text-lg italic focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#636363]/60"
              />
            </div>

            <!-- Phone -->
            <div class="flex gap-4">
              <input
                type="tel"
                placeholder="Nomor Telepon"
                required
                class="w-full h-[60px] px-6 rounded-full border border-[#424242] font-jakarta text-lg italic focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#636363]/60"
              />
            </div>

            <!-- Service Dropdown -->
            <div class="relative">
              <select
                required
                class="w-full h-[60px] px-6 rounded-full border border-[#424242] font-jakarta text-lg italic focus:outline-none focus:border-primary appearance-none bg-white text-[#636363] cursor-pointer"
              >
                <option value="" disabled selected>Layanan</option>
                <option value="konsultasi">Konsultasi & Pendampingan Hukum</option>
                <option value="advokasi">Advokasi & Pro Bono</option>
              </select>
              <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#636363"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            <!-- Message -->
            <div>
              <textarea
                placeholder="Bagaimana kami bisa membantu?"
                rows="4"
                required
                class="w-full p-6 rounded-[20px] border border-[#424242] font-jakarta text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#636363]/60 resize-none"
              ></textarea>
              <div class="text-right mt-2 text-sm text-[#636363]">0/100</div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full h-[60px] bg-[#05356b] hover:bg-[#05356b]/90 text-white font-times text-2xl font-bold italic rounded-[15px] flex items-center justify-center gap-3 transition-colors group"
            >
              Daftar Sekarang
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showPopup = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  // Simulate form submission
  showPopup.value = true
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
