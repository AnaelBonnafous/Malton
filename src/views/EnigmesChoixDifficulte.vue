<template>
  <h1>Sélection du mode de difficulté</h1>
  <div class="bg-primary">
	<div class="div-button-difficulties" v-for="difficulty in difficulties" :key="difficulty.difficulty">
		<q-btn 
			:label="difficulty.difficulty"
			class="bg-secondary text-white"
			:to="{ name: 'enigmes', params: { difficulty: difficulty['@id']} }"
		/>
	</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    difficulties: []
  }),
  async created() {
    const response = await axios.get('difficultes');
    this.difficulties = response.data["hydra:member"];
  },
};
</script>