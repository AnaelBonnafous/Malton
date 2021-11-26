<template>
  <q-page class="text-center">
    <form @submit.prevent="submit()" class="q-py-lg q-mx-auto q-gutter-lg">
    <h1 class="text-h3">Connexion au site d'énigmes</h1>
      <q-input
        v-model="form.email"
        type="email"
        placeholder="professeur.layton@mail.com"
        outlined
        label-slot>
        <template v-slot:label>
          <span class="text-weight-bold">Adresse email</span>
        </template>
      </q-input>
      <q-input
          v-model="form.password"
          :type="password_visible ? 'text' : 'password'"
          placeholder="******"
          outlined
          label-slot>
        <template v-slot:label>
          <span class="text-weight-bold">Mot de passe</span>
        </template>
        <template #append>
          <q-icon
              @click="togglePasswordVisibility()"
              :name="password_visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
              class="cursor-pointer"
          />
        </template>
      </q-input>

      <q-btn type="submit" color="primary">Connexion</q-btn>

      <div class="column">
        <span class="text-white">Pas de compte ? </span>
          <router-link :to="{ name: 'register' }" class="text-bold text-wheat">Créer mon compte</router-link>
      </div>
    </form>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    password_visible: false,
  }),
  methods: {
    togglePasswordVisibility() {
      this.password_visible = !this.password_visible;
    },
    submit() {},
  },
};
</script>

<style scoped>
form {
  max-width: 50%;
}
</style>
