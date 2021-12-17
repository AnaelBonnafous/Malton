<template>
  <q-page-sticky position="top-right" :offset="[18, 18]">
    <q-fab
      icon="fas fa-heart"
      active-icon="fas fa-heart"
      class="q-mr-md"
      :color="isEnigmeFavorite === true ? 'secondary' : 'primary'"
      @click="toggleEnigmeFavorite()"
    />
    <q-fab
      icon="fas fa-question"
      active-icon="fas fa-times"
      color="secondary"
      direction="down"
    >
      <q-fab-action
        v-for="(indice, index) in indicesData"
        :key="index"
        @click="selectIndice(index)"
        color="secondary"
      >
        <span v-if="indice.unlocked" class="text-bold">{{ index + 1 }}</span>
        <q-icon
          v-else
          :name="index === lastIndex ? 'fas fa-lock-open' : 'fas fa-lock'"
        />
      </q-fab-action>
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Indice</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p v-html="this.$decodeHtml(selectedIndice)"></p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["indices", "enigme"],
  data: () => ({
    lastIndex: 0,
    dialog: false,
    selectedIndice: null,
    indicesData: [],
    isEnigmeFavorite: false,
    infoEnigmeFavorite: {},
  }),
  async created() {
    const enigmeFavorite = await this.$axios.get('enigme_favorites?and[enigme]='+this.enigme['@id']+'&and[user]='+this.user['@id']);

    if (enigmeFavorite.data['hydra:totalItems'] !== 0) {
      this.isEnigmeFavorite = true;
      this.infoEnigmeFavorite = { ...enigmeFavorite.data['hydra:member'][0] };
    } else {
      this.isEnigmeFavorite = false;
    }

    this.indicesData = this.indices.map((indice) => {
      return {
        text: indice,
        unlocked: false,
      };
    });
  },
  computed: {
    ...mapGetters("userStore", ["user"]),
  },
  methods: {
    selectIndice(index) {
      if (this.indicesData[index].unlocked) {
        this.viewIndice(index);
      } else {
        this.unlockIndice(index);
      }
    },
    unlockIndice(index) {
      if (this.lastIndex >= index) {
        this.indicesData[index].unlocked = true;
        this.viewIndice(index);
        this.lastIndex++;
      }
    },
    viewIndice(index) {
      this.selectedIndice = this.indicesData[index].text;
      this.dialog = true;
    },
    async toggleEnigmeFavorite() {
      if (this.infoEnigmeFavorite === null){
        return;
      }

      if (this.isEnigmeFavorite) {
        console.log(this.infoEnigmeFavorite)
        this.isEnigmeFavorite = !this.isEnigmeFavorite;
        this.$q.notify({
          message: `Énigme retirée des favoris !`,
          color: "red",
        });
        await this.$axios.delete("enigme_favorites/"+this.infoEnigmeFavorite['id']);
      } else {
        this.isEnigmeFavorite = !this.isEnigmeFavorite;
        this.$q.notify({
          message: `Énigme ajoutée en favori !`,
          color: "green",
        });
        const enigmeFavorite = await this.$axios.post("enigme_favorites", {
          'user': this.user['@id'],
          'enigme': this.enigme['@id']
        });
        this.infoEnigmeFavorite = { ...enigmeFavorite.data };
      }
    }
  },
};
</script>

<style scoped>
.q-page-sticky {
  z-index: 1;
}
</style>