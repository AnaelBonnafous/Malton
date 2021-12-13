<template>
  <q-page class="text-center">
    <h1 class="text-h3">Bienvenue sur le site de résolution d'énigmes</h1>
    <h2 class="text-h4 text-left">Classement des meilleures énigmes</h2>
    <div class="bg-primary row justify-center q-mb-lg">
      <div class="enigme" v-for="enigme in enigmes">
        <q-img :src="'src/assets/images/enigmes/' + enigme.image_url" class="image-enigme">
          <div class="absolute-full text-subtitle2 enigme-text text-left column text-body1">
            <span>{{ enigme.name }}</span>
            <span>{{ enigme.brief_description }}</span>
            <span>{{ enigme.difficulty.difficulty }}</span>
          </div>
        </q-img>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    enigmes: null,
  }),
  async created () {
    const response = await this.$axios.get("enigmes_mieux_notees");
    this.enigmes = response.data['hydra:member']
  },
};
</script>
