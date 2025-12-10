<template>
  <section class="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-cream to-cream-dark overflow-hidden">
    <div class="container mx-auto relative z-10">
      <!-- FAQ Container Box -->
      <div class="relative w-full max-w-5xl mx-auto bg-transparent border-[3px] border-border-dark rounded-[20px] p-8 md:p-16">
        
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="font-times italic text-4xl md:text-5xl text-black tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div class="flex flex-col gap-4">
          <FAQItem
            v-for="(item, index) in faqItems"
            :key="index"
            :question="item.question"
            :answer="item.answer"
            :is-open="item.isOpen"
            @toggle="toggleItem(index)"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FAQItem from '@/components/FAQItem.vue';

const faqItems = ref([
  {
    question: "Apa itu Elsa Garda Indonesia?",
    answer: "Elsa Garda Indonesia adalah lembaga konsultasi dan bantuan hukum yang berdiri dengan semangat memberikan akses keadilan bagi seluruh lapisan masyarakat. Kami hadir untuk membantu masyarakat dalam memahami hak-hak hukumnya, memberikan pendampingan profesional, serta menciptakan solusi hukum yang adil dan transparan.",
    isOpen: false
  },
  {
    question: "Apa itu Lembaga Badan Hukum?",
    answer: "Lembaga Badan Hukum adalah organisasi yang didirikan berdasarkan hukum untuk memberikan bantuan hukum kepada masyarakat yang membutuhkan, seringkali secara cuma-cuma bagi yang tidak mampu.",
    isOpen: false
  },
  {
    question: "Apa itu Pro Bono?",
    answer: "Pro Bono adalah pelayanan hukum yang diberikan secara cuma-cuma (gratis) kepada orang yang tidak mampu atau untuk kepentingan umum.",
    isOpen: false
  },
  {
    question: "Apa itu Advokasi?",
    answer: "Advokasi adalah tindakan membela, memberi dukungan, atau merekomendasikan suatu gagasan atau kebijakan untuk membela hak-hak individu atau kelompok.",
    isOpen: false
  },
  {
    question: "Apa itu Konsultasi?",
    answer: "Konsultasi adalah proses pertukaran pikiran untuk mendapatkan nasihat atau saran dari ahli hukum mengenai masalah hukum yang sedang dihadapi.",
    isOpen: false
  },
  {
    question: "Bagaimana cara Advokasi?",
    answer: "Proses advokasi dimulai dengan pengumpulan data, analisis masalah, penyusunan strategi, hingga pelaksanaan tindakan pembelaan baik di dalam maupun di luar pengadilan.",
    isOpen: false
  },
  {
    question: "Bagaimana cara Mediasi?",
    answer: "Mediasi dilakukan dengan mempertemukan kedua belah pihak yang bersengketa dengan bantuan mediator netral untuk mencari solusi penyelesaian masalah secara damai.",
    isOpen: false
  }
]);

const toggleItem = (index) => {
  // Optional: Close others when one opens
  // faqItems.value.forEach((item, i) => {
  //   if (i !== index) item.isOpen = false;
  // });
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
};
</script>

<style scoped>
</style>
