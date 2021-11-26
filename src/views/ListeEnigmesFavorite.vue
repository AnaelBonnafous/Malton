<template>
  <q-page class="text-center">
    <h1 class="text-h3">Mes énigmes favorites</h1>
    <ListeEnigmesFavorites/>
  </q-page>
</template>

<script>
import ListeEnigmesFavorites from '@/components/ListeEnigmesFavorites.vue';

export default {
  name: "ListeEnigmesFavorite",
  components: {
    ListeEnigmesFavorites
  },
  data: () => ({

  }),
  created () {

  }
}
</script>

<style scoped>
</style>
