<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- TITLE -->
      <h2
        class="font-times italic text-[40px] md:text-[64px] text-black text-center mb-16 tracking-[-2.56px] leading-tight"
      >
        Klien Kami
      </h2>

      <!-- TESTIMONIALS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="border-border-dark border-[3px] rounded-[15px] p-8 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300"
        >
          <div class="w-20 h-20 rounded-full bg-border-dark mb-6 overflow-hidden">
            <!-- Placeholder for client image -->
            <img
              :src="client.image"
              :alt="client.name"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="font-jakarta text-[16px] text-border-dark/80 mb-6 leading-relaxed italic">
            "{{ client.testimonial }}"
          </p>
          <h4 class="font-times text-[24px] font-bold text-black mb-1">{{ client.name }}</h4>
          <span class="font-jakarta text-[14px] text-border-dark">{{ client.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  {
    name: "Budi Santoso",
    role: "CEO, PT Maju Jaya",
    testimonial: "Pelayanan hukum yang sangat profesional dan transparan. Saya merasa sangat terbantu dengan solusi yang diberikan oleh tim Elsa Garda Indonesia.",
    image: "https://ui-avatars.com/api/?name=Budi+Santoso&background=random"
  },
  {
    name: "Siti Aminah",
    role: "Entrepreneur",
    testimonial: "Tim yang sangat dedikatif. Kasus perdata saya ditangani dengan sangat baik dan hasilnya memuaskan. Terima kasih atas pendampingannya.",
    image: "https://ui-avatars.com/api/?name=Siti+Aminah&background=random"
  },
  {
    name: "Rahmat Hidayat",
    role: "Direktur, CV Berkah Abadi",
    testimonial: "Sangat merekomendasikan jasa hukum ini. Mereka tidak hanya memberikan nasihat hukum, tapi juga strategi penyelesaian masalah yang efektif.",
    image: "https://ui-avatars.com/api/?name=Rahmat+Hidayat&background=random"
  }
]
</script>
