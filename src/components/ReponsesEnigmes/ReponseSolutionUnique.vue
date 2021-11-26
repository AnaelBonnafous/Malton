<template>
  <section id="bloc-answer">
    <q-input
        outlined
        label-slot
        type="text"
        v-model="answer"
    >
      <template v-slot:label>
        <span class="text-weight-bold">Votre réponse</span>
      </template>
    </q-input>
    <q-btn
        class="bg-secondary text-white enigme-valider"
    >
      Valider
    </q-btn>
  </section>
</template>

<script>
export default {
  name: 'ReponseSolutionUnique',
  data: () => ({
    answer: null,
  }),
};
</script>

<style scoped>
  #bloc-answer{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .q-input {
    width: 300px;
    max-width:100%;
    margin:0 auto;
  }
</style>