<template>
  <ListeEnigmesParDifficulte :difficulty='difficulty' :labelDifficulty='labelDifficulty'/>
</template>

<script>
import ListeEnigmesParDifficulte from '@/components/ListeEnigmesParDifficulte.vue';

export default {
  components: {
    ListeEnigmesParDifficulte
  },
  data: () => ({
    difficulty: null,
    labelDifficulty: null,
  }),
  created () {
    this.difficulty = this.$route.params.difficulty;
    this.labelDifficulty = this.$route.params.labelDifficulty;
    if (!this.difficulty || !this.labelDifficulty) {
      this.$router.push('difficultes'); 
    }
  }
};
</script>