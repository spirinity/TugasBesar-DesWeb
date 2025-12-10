<template>
  <div class="group perspective-1000 h-[500px] ipad-pro:h-[420px]">
    <div
      class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
    >
      <!-- Front Side -->
      <div
        class="absolute inset-0 backface-hidden bg-[#f8edd8] border-[3px] border-[#e3d7c0] rounded-[36px] p-6 ipad-pro:p-4 flex flex-col items-center text-center shadow-lg"
      >
        <!-- Image Container -->
        <div
          class="relative w-full aspect-square mb-6 ipad-pro:mb-4 rounded-[20px] overflow-hidden"
        >
          <!-- Background Image -->
          <img
            src="@/assets/images/backgroundphoto.png"
            alt="Background"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Person Image -->
          <img
            src="@/assets/images/person.png"
            :alt="name"
            class="absolute bottom-0 w-[450px] h-[300px] ipad-pro:w-[350px] ipad-pro:h-[230px] left-1/2 -translate-x-1/2 object-contain"
          />
        </div>

        <!-- Info -->
        <div class="space-y-0">
          <h3
            class="font-times text-[40px] ipad-pro:text-[32px] text-black leading-[1.037] tracking-[-1.6px] font-normal max-w-[1000px]"
          >
            {{ name }}
          </h3>
          <p
            class="font-jakarta text-[24px] ipad-pro:text-[20px] text-[#606060] leading-[1.037] font-normal"
          >
            {{ role }}
          </p>
        </div>
      </div>

      <!-- Back Side -->
      <div
        class="absolute inset-0 backface-hidden rotate-y-180 bg-[#05356b] border-[3px] border-[#05356b] rounded-[36px] p-8 ipad-pro:p-6 flex flex-col items-center justify-center text-center shadow-lg"
      >
        <h3 class="font-times text-[32px] ipad-pro:text-[28px] text-white leading-tight mb-4">
          {{ name }}
        </h3>
        <p class="font-jakarta text-xl ipad-pro:text-lg text-[#e3d7c0] mb-6 font-bold">
          {{ role }}
        </p>
        <p class="font-jakarta text-white/90 ipad-pro:text-sm leading-relaxed">
          Berdedikasi untuk memberikan layanan hukum terbaik dengan integritas dan profesionalisme
          tinggi.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.font-times {
  font-family: 'Times New Roman', Times, serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Flip Card Utilities */
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}

/* iPad Pro specific styles */
@media (min-width: 1024px) and (max-width: 1024px) {
  .ipad-pro\:h-\[420px\] {
    height: 420px;
  }
  .ipad-pro\:p-4 {
    padding: 1rem;
  }
  .ipad-pro\:p-6 {
    padding: 1.5rem;
  }
  .ipad-pro\:mb-4 {
    margin-bottom: 1rem;
  }
  .ipad-pro\:w-\[350px\] {
    width: 350px;
  }
  .ipad-pro\:h-\[230px\] {
    height: 230px;
  }
  .ipad-pro\:text-\[32px\] {
    font-size: 32px;
  }
  .ipad-pro\:text-\[20px\] {
    font-size: 20px;
  }
  .ipad-pro\:text-\[28px\] {
    font-size: 28px;
  }
  .ipad-pro\:text-lg {
    font-size: 1.125rem;
  }
  .ipad-pro\:text-sm {
    font-size: 0.875rem;
  }
}
</style>
