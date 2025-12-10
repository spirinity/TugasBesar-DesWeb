<template>
  <section class="bg-cream min-h-screen px-6 md:px-12 py-16">
    <div class="max-w-4xl mx-auto">
      <button
        @click="$emit('back')"
        class="mb-8 flex items-center gap-2 border-[3px] border-primary rounded-[10px] px-6 py-2 font-times italic font-bold text-[20px] text-primary hover:bg-primary hover:text-cream transition-colors"
      >
        <span>←</span>
        <span>Kembali</span>
      </button>

      <div class="mb-8">
        <div class="mb-4">
          <span
            class="inline-block px-4 py-1 border-[3px] border-primary rounded-[10px] font-jakarta font-bold text-[16px] text-primary"
          >
            {{ article.category }}
          </span>
        </div>
        <h1 class="font-times italic text-[64px] tracking-[-2.56px] text-black leading-tight mb-4">
          {{ article.title }}
        </h1>
        <div class="flex items-center gap-4 font-jakarta text-[16px] text-text-gray">
          <span>{{ article.date }}</span>
          <span>•</span>
          <span>{{ article.readTime }} menit baca</span>
        </div>
      </div>

      <div
        class="border-[3px] border-border-dark rounded-[15px] p-8 md:p-12 bg-white article-content"
      >
        <p class="font-jakarta text-[20px] leading-relaxed text-text-gray mb-6 tracking-[-0.4px]">
          {{ article.introduction }}
        </p>

        <div v-for="(section, index) in article.sections" :key="index" class="mb-8">
          <h2 class="font-times italic text-[40px] tracking-[-1.6px] text-black mb-4">
            {{ section.heading }}
          </h2>
          <div class="space-y-4">
            <p
              v-for="(paragraph, pIndex) in section.paragraphs"
              :key="pIndex"
              class="font-jakarta text-[18px] leading-relaxed text-text-gray tracking-[-0.36px]"
            >
              {{ paragraph }}
            </p>
          </div>

          <ul v-if="section.list" class="mt-4 space-y-3">
            <li
              v-for="(item, lIndex) in section.list"
              :key="lIndex"
              class="flex gap-3 font-jakarta text-[18px] leading-relaxed text-text-gray tracking-[-0.36px]"
            >
              <span class="text-primary font-bold">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Conclusion -->
        <div v-if="article.conclusion" class="mt-10 pt-8 border-t-[3px] border-border-dark">
          <h2 class="font-times italic text-[40px] tracking-[-1.6px] text-black mb-4">
            Kesimpulan
          </h2>
          <p class="font-jakarta text-[18px] leading-relaxed text-text-gray tracking-[-0.36px]">
            {{ article.conclusion }}
          </p>
        </div>
      </div>

      <div v-if="relatedArticles.length > 0" class="mt-12">
        <h3 class="font-times italic text-[40px] tracking-[-1.6px] text-black mb-6">
          Artikel Terkait
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="related in relatedArticles"
            :key="related.id"
            class="border-[3px] border-border-dark rounded-[15px] p-6 bg-white hover:border-primary transition-colors cursor-pointer"
            @click="$emit('select-article', related.id)"
          >
            <h4 class="font-times italic text-[24px] tracking-[-0.96px] text-black mb-2">
              {{ related.title }}
            </h4>
            <p class="font-jakarta text-[16px] text-text-gray tracking-[-0.32px]">
              {{ related.excerpt }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 border-[3px] border-primary rounded-[15px] p-8 text-center">
        <h3 class="font-times italic text-[40px] tracking-[-1.6px] text-black mb-4">
          Butuh Bantuan Hukum?
        </h3>
        <p class="font-jakarta text-[18px] text-text-gray mb-6 tracking-[-0.36px]">
          Tim kami siap membantu Anda dengan konsultasi hukum profesional.
        </p>
        <button
          class="inline-block border-[3px] border-primary rounded-[10px] px-10 py-3 font-times italic font-bold text-[24px] text-primary hover:bg-primary hover:text-cream transition-colors"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  article: {
    type: Object,
    required: true,
  },
  relatedArticles: {
    type: Array,
    required: true,
  },
})

defineEmits(['back', 'select-article'])
</script>

<style scoped>
.article-content p {
  text-align: justify;
}
</style>
