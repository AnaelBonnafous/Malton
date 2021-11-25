<template>
  <h1>Résoudre l'énigme : {{ enigme?.name}} </h1>

  <pre>
    {{ enigme }}
  </pre>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    enigmeId: null,
    enigme: null,
  }),
  async created () {
    this.enigmeId = this.$route.params.enigmeId;
    if (!this.enigmeId) {
      this.$router.push('difficultes');
    }
    const response = await axios.get("enigmes/" + this.enigmeId);
    console.log(response)
    this.enigme = response.data;
    console.log(this.enigme)
  },
};
</script>