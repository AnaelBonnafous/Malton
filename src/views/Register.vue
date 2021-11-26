<template>
  <q-page class="text-center">
    <form @submit.prevent="submit()" class="q-py-lg q-mx-auto q-gutter-lg">
    <h1 class="text-h3">Inscription au site d'énigmes</h1>
      <q-input
        class="input-form"
        v-model="form.pseudo"
        label="Pseudo"
        placeholder="Professeur Layton"
        outlined
      />

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

      <q-input
        class="input-form"
        v-model="form.confirm"
        :rules="[
          (val) => val == form.password || 'Le mot de passe ne correspond pas',
        ]"
        :type="password_visible ? 'text' : 'password'"
        label="Confirmer le mot de passe"
        placeholder="******"
        outlined
        no-error-icon
      >
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