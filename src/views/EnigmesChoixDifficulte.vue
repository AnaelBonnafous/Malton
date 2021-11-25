<template>
  <h1>Sélection du mode de difficulté</h1>
  <div
	class="justify-around"
  >
  	<q-btn 
	  v-for="difficulty in difficulties"
	  :key="difficulty.difficulty"
	  :label="difficulty.difficulty"
	  class="bg-secondary text-white"
	  :to="{ name: 'enigmes', params: { difficulty: difficulty.difficulty} }"
	/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    difficulties: []
  }),
  async created() {
    const response = await axios.get('https://localhost:8000/api/difficultes');
    this.difficulties = response.data["hydra:member"];
  },
};
</script>