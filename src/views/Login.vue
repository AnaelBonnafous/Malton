<template>
  <q-page class="text-center">
    <form @submit.prevent="submit()" class="q-py-lg q-mx-auto q-gutter-lg">
    <h1 class="text-h3">Connexion au site d'énigmes</h1>
      <q-input
        class="input-form"
        v-model="form.email"
        type="email"
        label="Adresse email"
        placeholder="professeur.layton@mail.com"
        outlined
      />

      <q-input
        class="input-form"
        v-model="form.password"
        :type="password_visible ? 'text' : 'password'"
        label="Mot de passe"
        placeholder="******"
        outlined
      >
        <template #append>
          <q-icon
            @click="togglePasswordVisibility()"
            :name="password_visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
            class="cursor-pointer"
          />
        </template>
      </q-input>

      <q-btn type="submit" color="primary">Connexion</q-btn>

      <div>
        Pas de compte ?
        <router-link :to="{ name: 'register' }">Créer son compte</router-link>
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

.input-form {
  background-color: white;
}

</style>