<template>
  <h1 class="text-h3">Intitulé de l'énigme : {{ enigme?.name}} ({{ enigme?.number_picarats }} picarats)</h1>


  <section class="bloc-enigme">
    <img :src="'src/assets/images/enigmes/' + enigme?.image_url" :alt="'Image de l\'énigme' + enigme?.name">

    <div>
      <q-card
          class="bg-white text-center q-pa-lg text-bold enonce no-border-radius"
      >
        <p v-html="this.$decodeHtml(enigme?.statement)"></p>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntituleEtEnonceEnigme',
  props: ['enigme'],
};
</script>

<style scoped>
  .bloc-enigme {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }

  .enonce {
    height:100%;
  }

  .bloc-enigme > * {
    max-width: 50%;
  }
</style>