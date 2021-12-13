<template>
  <div class="bg-primary bloc-enigmes">
    <div
        v-for="enigme in enigmes"
        :key="enigme.id"
        v-on:click="redirectionPageEnigme(enigme.id)"
        class="enigme"
    >
      <img class="image-enigme" :src="'src/assets/images/enigmes/' + enigme.image_url" :alt="'Énigme ' + enigme.name" />
      <div class="bg-dark bloc-enigme-name text-center">{{ enigme.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeEnigmesParDifficulte',
  props: ['difficulty', 'category'],
  data: () => ({
    enigmes: [],
  }),
  created() {
    if (this.difficulty) {
      this.getEnigmes('?difficulty=' + this.difficulty);
    }
  },
  watch: {
    category: function(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getEnigmes('?difficulty=' + this.difficulty + '&category=' + this.category);
      }
    }
  },
  methods: {
    async getEnigmes(query) {
      const response = await this.$axios.get('enigmes' + query);
      this.enigmes = response.data['hydra:member'];
    },
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
