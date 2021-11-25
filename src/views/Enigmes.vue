<template>
  <ListeEnigmesParDifficulte :difficulte='difficulty'/>
</template>

<script>
import ListeEnigmesParDifficulte from '@/components/ListeEnigmesParDifficulte.vue';

export default {
  components: {
    ListeEnigmesParDifficulte
  },
  data: () => ({
    difficulty: ''
  }),
  created () {
    this.difficulty = this.$route.params.difficulty;
    if (!this.difficulty) {
      this.$router.push('difficultes'); 
    }
  }
};
</script>