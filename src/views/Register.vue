<template>
  <q-page class="text-center">
    <form @submit.prevent="submit()" class="q-py-lg q-mx-auto q-gutter-lg">
      <h1 class="text-h3">Inscription au site d'énigmes</h1>
      <q-input
          v-model="form.pseudo"
          placeholder="Professeur Layton"
          outlined
          label-slot>
        <template v-slot:label>
          <span class="text-weight-bold">Pseudo</span>
        </template>
      </q-input>

      <q-input
          v-model="form.email"
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

      <q-input
          v-model="form.confirm"
          :rules="[
          (val) => val == form.password || 'Le mot de passe ne correspond pas',
        ]"
          :type="password_visible ? 'text' : 'password'"
          placeholder="******"
          outlined
          label-slot
          no-error-icon>
        <template v-slot:label>
          <span class="text-weight-bold">Confirmer le mot de passe</span>
        </template>
        <template #append>
          <q-icon
              @click="togglePasswordVisibility()"
              :name="password_visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
              class="cursor-pointer"
          />
        </template>
      </q-input>

      <q-btn type="submit" color="primary">S'inscrire</q-btn>

      <div>
        Déjà un compte ?
        <router-link :to="{ name: 'login' }">Se connecter</router-link>
      </div>
    </form>
  </q-page>
</template>

<script>
export default {
  data: () => ({
    form: {
      pseudo: "",
      password: "",
      confirm: "",
    },
    password_visible: false,
  }),
  methods: {
    togglePasswordVisibility() {
      this.password_visible = !this.password_visible;
    },
    submit() {
    },
  },
};
</script>

<style scoped>
form {
  max-width: 50%;
}

.input-form {
  background-color: white;
}

</style>
