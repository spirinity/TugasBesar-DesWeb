<template>
  <section class="bg-cream py-16 md:py-24 px-6 md:px-12 lg:px-24">
    <div class="container mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2
          class="font-times italic text-5xl md:text-[64px] text-black leading-tight tracking-[-2.56px]"
        >
          Struktur Organisasi
        </h2>
        <p
          class="font-jakarta text-lg md:text-xl text-[#636363] max-w-3xl mx-auto leading-relaxed tracking-[-0.4px]"
        >
          Elsa Garda Nusantara melayani dua layanan hukum yang berfokus pada pemberian solusi
          berintegritas bagi masyarakat yang membutuhkan pendampingan hukum.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ipad-pro:gap-6">
        <TeamMemberCard
          v-for="(member, index) in members"
          :key="index"
          :name="member.name"
          :role="member.role"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamMemberCard from '@/components/TeamMemberCard.vue'

const members = [
  {
    name: 'Hadri Harasit',
    role: 'Sekretaris',
  },
  {
    name: 'Mahardika Arka',
    role: 'Ketua Lembaga',
  },
  {
    name: 'Deicah Wijaya',
    role: 'Bendahara',
  },
]
</script>

<style scoped>
.font-times {
  font-family: 'Times New Roman', Times, serif;
}
.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
