<template>
  <h1>Résoudre l'énigme : {{ enigme?.name}} </h1>

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
    this.enigmeId = this.$route.params.enigmeId;
    if (!this.enigmeId) {
      this.$router.push('difficultes');
    }
    const response = await this.$axios.get("enigmes/" + this.enigmeId);
    this.enigme = response.data;
    console.log(this.enigme)
  },
};
</script>