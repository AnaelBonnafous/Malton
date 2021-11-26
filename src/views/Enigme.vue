<template>
  <IntituleEtEnonceEnigme :enigme="enigme"/>

  <ReponseSolutionUnique/>

  <pre>
    {{ enigme }}
  </pre>
</template>

<script>
import IntituleEtEnonceEnigme from "@/components/IntituleEtEnonceEnigme.vue";
import ReponseSolutionUnique from "@/components/ReponsesEnigmes/ReponseSolutionUnique.vue"

export default {
  components: {
    IntituleEtEnonceEnigme,
    ReponseSolutionUnique,
  },
  data: () => ({
    enigmeId: null,
    enigme: null,
  }),
  async created () {
    this.enigmeId = this.$route.params.enigmeId;
    if (this.enigmeId === undefined) {
      this.$router.push('difficultes');
    }
    const response = await this.$axios.get("enigmes/" + this.enigmeId);
    this.enigme = response.data;
  },
};
</script>