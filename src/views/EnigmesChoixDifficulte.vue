<template>
  <q-page class="text-center">
    <h1 class="text-h3">Sélection du mode de difficulté</h1>
    <div class="bg-primary q-py-lg">
      <div class="q-gutter-lg">
        <div class="div-button-difficulties" v-for="difficulty in difficulties" :key="difficulty.difficulty">
          <q-btn
            :to="{ name: 'enigmes', params: { difficulty: difficulty['@id'], labelDifficulty: difficulty.difficulty} }"
            class="bg-secondary text-white"
            size="lg"
          >{{ difficulty.difficulty }}</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters("difficultyStore", ["difficulties"]),
  },
  methods: {
    ...mapActions({
      storeSaveDifficulties: "difficultyStore/getDifficulties",
    }),
  },
  async created() {
    if (this.difficulties.length === 0) {
      this.storeSaveDifficulties();
    }
  },
};
</script>

<style scoped>
.q-btn {
  min-width: 35%;
}
</style>