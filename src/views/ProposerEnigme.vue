<template>
  <q-page class="text-center">
    <form
      @submit.prevent="envoyerProposition()"
      class="q-py-lg q-mx-auto q-gutter-lg"
    >
      <h1 class="text-h3">Proposer une énigme</h1>
      <q-input
        v-model="form.name"
        type="text"
        label="Nom de l'énigme"
        placeholder="Le crime du quai"
        outlined
        bg-color="white"
      />
      <q-input
        v-model="form.statement"
        type="text"
        label="Énoncé"
        placeholder="Qui est le coupable ?"
        outlined
        bg-color="white"
      />
      <q-input
        v-model="form.solution"
        type="text"
        label="Solution"
        placeholder="Monsieur Dupont"
        outlined
        bg-color="white"
      />
      <q-input
        v-model="form.comment"
        type="text"
        label="Commentaire supplémentaire (optionnel)"
        placeholder="Monsieur Dupont et Monsieur Dupond sont complices"
        outlined
        bg-color="white"
      />
      <q-btn
        type="submit"
        label="Soumettre ma demande"
        icon-right="fas fa-paper-plane"
        color="secondary"
      />
    </form>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    text: "",
    form: {
      name: "",
      statement: "",
      solution: "",
      comment: "",
    },
  }),
  computed: {
    ...mapGetters("userStore", ["user"]),
  },
  methods: {
    async envoyerProposition() {
      this.form.user = this.user['@id'];
      await this.$axios.post("demandes", this.form);
    },
  },
};
</script>

<style scoped>
form {
  max-width: 50%;
}
</style>