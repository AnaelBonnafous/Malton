<template>
  <h1 class="text-h3">Les Énigmes {{difficulte}}</h1>
  <pre>
    {{ enigmes }}
  </pre>
</template>

<script>
import axios from "axios";

export default {
  name: 'ListeEnigmesParDifficulte',
  props: ['difficulte'],
  data: () => ({
    enigmes: []
  }),
  created() {
    console.log(this.difficulte)
  },
  async created() {
    const response = await axios.get("https://localhost:8000/api/enigmes?difficulte=" + this.difficulte);
    this.enigmes = response.data["hydra:member"];
  },
};
</script>