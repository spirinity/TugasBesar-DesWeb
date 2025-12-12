<template>
  <div>
    <ArtikelDetail
      v-if="article"
      :article="article"
      :related-articles="relatedArticles"
      @back="goBack"
      @select-article="goToArticle"
    />
    <div v-else class="min-h-screen flex items-center justify-center">
      <p class="text-xl font-jakarta">Artikel tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ArtikelDetail from '@/components/sections/edukasi/ArtikelDetail.vue'
import { articlesData } from '@/data/articlesData.js'

const route = useRoute()
const router = useRouter()

const articleId = computed(() => parseInt(route.params.id))

const article = computed(() => {
  return articlesData.find((a) => a.id === articleId.value)
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return articlesData
    .filter(
      (a) =>
        a.id !== article.value.id &&
        (a.category === article.value.category || Math.random() > 0.5),
    )
    .slice(0, 2)
})

function goBack() {
  router.push('/edukasi')
}

function goToArticle(id) {
  router.push({ name: 'artikel-detail', params: { id } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
