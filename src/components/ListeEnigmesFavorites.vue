<template>
  <div class="bg-primary row justify-center q-mb-lg">
    <div class="enigme" v-for="enigme in enigmesFavorites" v-on:click="redirectionPageEnigme(enigme.enigme.id)">
      <q-img :src="'src/assets/images/enigmes/' + enigme.enigme.image_url" class="image-enigme">
        <div class="absolute-full text-subtitle2 enigme-text text-left column text-body1">
          <span class="q-mb-md block text-bold">Nom :
            <span class="text-weight-regular" v-html="this.$decodeHtml(enigme.enigme.name)"></span>
          </span>
          <span class="q-mb-md block text-bold">Description :
            <span class="text-weight-regular" v-html="this.$decodeHtml(enigme.enigme.brief_description)"></span>
          </span>
          <span class="q-mb-md block text-bold">Difficulté :
            <span class="text-weight-regular" v-html="enigme.enigme.difficulty.difficulty"></span>
          </span>
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeEnigmesFavorites',
  data: () => ({
    enigmesFavorites: [],
  }),
  async created() {
    const response = await this.$axios.get("enigme_favorites?user=api/users/1");
    this.enigmesFavorites = response.data;

  },
  methods: {
    redirectionPageEnigme(enigmeId) {
      this.$router.push({
        name: 'enigmes',
        params: {
          enigmeId: enigmeId,
        }
      })
    }
  }
};
</script>

<style scoped>
.bloc-enigmes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.bloc-enigme-name {
  color: #fff;
  opacity: 90%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
