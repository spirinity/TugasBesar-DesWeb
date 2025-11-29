<template>
  <section class="bg-cream px-6 md:px-12 py-16">
    <!-- Show Article Detail View -->
    <ArtikelDetail
      v-if="selectedArticle"
      :article="selectedArticle"
      :related-articles="relatedArticles"
      @back="selectedArticle = null"
      @select-article="selectArticleById"
    />

    <!-- Show Article List View -->
    <div v-else>
      <div class="mb-10">
        <h2 class="font-times italic text-[56px] tracking-[-2px] text-black mb-2">
          Artikel & Materi
        </h2>
        <p class="font-jakarta text-[18px] text-[#343434] tracking-[-0.4px]">
          Pelajari topik-topik hukum yang sering ditanyakan dan relevan dengan layanan kami.
        </p>
      </div>

      <!-- Filter & Search Controls -->
      <div class="mb-12">
        <!-- Search Bar with Icon -->
        <div class="mb-6">
          <div class="relative max-w-2xl">
            <div class="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-border-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              v-model="search"
              type="text"
              placeholder="Cari artikel berdasarkan judul atau kata kunci"
              class="w-full border-[3px] border-border-primary rounded-[15px] pl-14 pr-5 py-3 font-jakarta text-[18px] tracking-[-0.4px] bg-white focus:outline-none focus:border-primary focus:ring-0 transition-colors"
            />
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-4">
          <div class="flex flex-wrap gap-3">
            <FilterButton
              v-for="cat in categories"
              :key="cat"
              :label="cat"
              :is-active="activeCategory === cat"
              @click="activeCategory = cat"
            />
          </div>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          v-for="art in filteredArticles"
          :key="art.id"
          :title="art.title"
          :excerpt="art.excerpt"
          @read="selectArticleById(art.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArtikelDetail from '../../ArtikelDetail.vue'
import FilterButton from '../../FilterButton.vue'
import ArticleCard from '../../ArticleCard.vue'
import { articlesData as articlesDataImport } from '@/data/articlesData.js'

const articlesData = ref(articlesDataImport)

const categories = ref([
  'Semua',
  'Dasar Hukum',
  'Proses',
  'Ketenagakerjaan',
  'Keluarga',
  'Pidana',
  'Pro Bono',
])
const activeCategory = ref('Semua')
const search = ref('')
const selectedArticle = ref(null)

const filteredArticles = computed(() => {
  return articlesData.value.filter((a) => {
    const matchCategory = activeCategory.value === 'Semua' || a.category === activeCategory.value
    const matchSearch =
      a.title.toLowerCase().includes(search.value.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.value.toLowerCase())
    return matchCategory && matchSearch
  })
})

const relatedArticles = computed(() => {
  if (!selectedArticle.value) return []

  return articlesData.value
    .filter(
      (a) =>
        a.id !== selectedArticle.value.id &&
        (a.category === selectedArticle.value.category || Math.random() > 0.5),
    )
    .slice(0, 2)
})

function selectArticleById(id) {
  selectedArticle.value = articlesData.value.find((a) => a.id === id)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
