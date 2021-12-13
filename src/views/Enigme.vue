<template>
  <FabIndices v-if="indices.length" :indices="indices" />

  <IntituleEtEnonceEnigme :enigme="enigme" />

  <ReponseSolutionUnique />

  <pre>
    {{ enigme }}
  </pre>
</template>

<script>
import IntituleEtEnonceEnigme from "@/components/IntituleEtEnonceEnigme.vue";
import ReponseSolutionUnique from "@/components/ReponsesEnigmes/ReponseSolutionUnique.vue";
import FabIndices from "../components/FabIndices.vue";

export default {
  components: {
    IntituleEtEnonceEnigme,
    ReponseSolutionUnique,
    FabIndices,
  },
  data: () => ({
    enigmeId: null,
    enigme: null,
    indices: [],
  }),
  async created() {
    this.enigmeId = this.$route.params.enigmeId;
    if (this.enigmeId === undefined) {
      this.$router.push("difficultes");
    }
    const response = await this.$axios.get("enigmes/" + this.enigmeId);
    this.enigme = response.data;

    this.indices = [
      this.enigme.indice1,
      this.enigme.indice2,
      this.enigme.indice3,
    ];
  },
};
</script>