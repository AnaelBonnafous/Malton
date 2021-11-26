<template>
  <div class="bg-primary row justify-center q-mb-lg">
    <div class="enigme" v-for="enigmeF in enigmes" v-on:click="redirectionPageEnigme(enigmeF.enigme_id)">
      <q-img :src="'src/assets/images/enigmes/' + enigmeF.enigme.image_url" class="image-enigme">
        <div class="absolute-full text-subtitle2 enigme-text text-left column text-body1">
          <span> Nom : {{ enigmeF.enigme.name}}</span>
          <span>Description : {{ enigmeF.enigme.statement}}</span>
          <span>Difficulté : {{ enigmeF.enigme.difficulty.difficulty }}</span>
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListeEnigmesFavorites',
  data: () => ({
    enigmes: [],
  }),
  async created() {
    const response = await this.$axios.get("enigme_favorites?user=api/users/1");
    this.enigmes = response.data["hydra:member"];
  },
  methods: {
    redirectionPageEnigme(enigmeId) {
      this.$router.push({
        name: 'enigme-solution-unique',
        params: {
          enigmeId: enigmeId,
        }
      })
    }
  }
};
</script>

<style scoped>
.bloc-enigmes{
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.bloc-enigme-name{
  color: #fff;
  opacity: 90%;
  position: absolute;
  left:0;
  right:0;
  bottom:0;
}
</style>
