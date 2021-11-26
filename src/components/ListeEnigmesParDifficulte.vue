<template>
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
  props: ['difficulty'],
  data: () => ({
    enigmes: [],
  }),
  async created() {
    console.log(this.difficulty)
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
  .enigme{
    width:40%;
    max-width: 400px;
    height: 250px;
    position: relative;
    margin: 15px 0;
    cursor: pointer;
  }

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

  .image-enigme{
    object-fit: cover;
    min-width: 100%;
    height: 100%;
  }
</style>