<template>
  <h1 class="text-h3">Intitulé de l'énigme : {{ enigme?.name}} ({{ enigme?.number_picarats }} picarats)</h1>

  <!-- image énigme => composant -->
  <div class="bloc-intitule-enigme">
    <img class="center-image" :src="'src/assets/images/enigmes/' + enigme?.image_url">
  </div>

  <!-- intitulé => composant -->
  <div>
    <h2 class="text-h4">Énoncé</h2>
    <v-card
        v-if="enigme?.statement"
        v-html="this.$decodeHtml(enigme?.statement)"
    >
    </v-card>
  </div>

  <pre>
    {{ enigme }}
  </pre>
</template>

<script>
export default {
  data: () => ({
    enigmeId: null,
    enigme: null,
  }),
  async created () {
    console.log(this)
    this.enigmeId = this.$route.params.enigmeId;
    if (!this.enigmeId) {
      this.$router.push('difficultes');
    }
    const response = await this.$axios.get("enigmes/" + this.enigmeId);
    this.enigme = response.data;
  },
};
</script>