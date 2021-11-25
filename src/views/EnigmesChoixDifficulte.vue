<template>
  <q-page class="text-center">
    <h1 class="text-h3">Sélection du mode de difficulté</h1>
    <div class="bg-primary q-py-lg">
      <div class="q-gutter-lg">
        <div v-for="difficulty in difficulties" :key="difficulty.difficulty">
          <q-btn
            :to="{ name: 'enigmes', params: { difficulty: difficulty['@id'] } }"
            class="bg-secondary text-white"
            size="lg"
          >{{ difficulty.difficulty }}</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    difficulties: [],
  }),
  async created() {
    const response = await axios.get("difficultes");
    this.difficulties = response.data["hydra:member"];
  },
};
</script>

<style scoped>
.q-btn {
  min-width: 35%;
}
</style>