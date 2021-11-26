<template>
  <h1 class="text-h3">Les Énigmes {{ labelDifficulty }}</h1>
  <!-- insérer component catégorie énigmes ici -->
  <div class="bg-primary bloc-enigmes">
    <div
        v-for="enigme in enigmes"
        v-on:click="redirectionPageEnigme(enigme.id)"
        class="enigme"
    >
      <img class="image-enigme" :src="'src/assets/images/enigmes/' + enigme.image_url" :alt="'Énigme ' + enigme.name" />
      <div class="bg-dark bloc-enigme-name text-center">{{ enigme.name }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ListeEnigmesParDifficulte',
  props: ['difficulty', 'labelDifficulty'],
  data: () => ({
    enigmes: [],
  }),
  async created() {
    const response = await axios.get("enigmes?difficulty=" + this.difficulty);
    this.enigmes = response.data["hydra:member"];
  },
  methods: {
    redirectionPageEnigme(enigmeId) {
      this.$router.push({
        name: 'enigme-solution-unique',
        params: {
          enigmeId: enigmeId,
        }
      })
    }
  }
};
</script>

<style scoped>
  .bloc-enigmes{
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .bloc-enigme-name{
    color: #fff;
    opacity: 90%;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
  }
</style>
