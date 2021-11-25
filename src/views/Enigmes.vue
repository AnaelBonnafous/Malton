<template>
  <h1 class="text-h3">Les Énigmes</h1>
  <pre>
    {{ enigmes }}
  </pre>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    enigmes: [],
  }),
  async created() {
    const response = await axios.get("https://localhost:8000/api/enigmes");
    this.enigmes = response.data["hydra:member"];
  },
};
</script>