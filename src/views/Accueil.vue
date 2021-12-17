<template>
  <q-page class="text-center">
    <h1 class="text-h3">Bienvenue sur le site de résolution d'énigmes</h1>
    <q-img class="banniere" src="src/assets/images/banniere_layton.jpg" fit="contain"/>
    <h2 class="text-h4 text-left">Classement des meilleures énigmes</h2>
    <div class="bg-primary row justify-center q-mb-lg">
      <Enigme
        v-for="enigme in enigmes"
        :enigme="enigme"
      />
    </div>
  </q-page>
</template>

<script>
import Enigme from "@/components/Enigme.vue";

export default {
  components: {
    Enigme
  },
  data: () => ({
    enigmes: [],
  }),
  async created () {
    const response = await this.$axios.get("enigmes_mieux_notees");
    this.enigmes = response.data['hydra:member'];
  },
};
</script>
