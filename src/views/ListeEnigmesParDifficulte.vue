<template>
  <h1 class="text-h3">Les Énigmes {{ labelDifficulty }}</h1>
  <CategoriesEnigmes
    @filter="filterByOneCategorie"
  />
  <ListeEnigmesParDifficulte 
    :difficulty='difficulty'
    :category='category'
  />
</template>

<script>
import ListeEnigmesParDifficulte from '@/components/ListeEnigmesParDifficulte.vue';
import CategoriesEnigmes from "@/components/CategoriesEnigmes.vue";

export default {
  components: {
    CategoriesEnigmes,
    ListeEnigmesParDifficulte
  },
  data: () => ({
    category: null,
    difficulty: null,
    labelDifficulty: null,
  }),
  created () {
    this.difficulty = this.$route.params.difficulty;
    this.labelDifficulty = this.$route.params.labelDifficulty;
    if (!this.difficulty || !this.labelDifficulty) {
      this.$router.push('difficultes'); 
    }
  },
  methods: {
    filterByOneCategorie (category) {
      this.category = category
    }
  }
};
</script>