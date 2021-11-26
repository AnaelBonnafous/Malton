<template>
  <q-page class="text-center">
    <h1 class="text-h3">Mon profil</h1>
    <span class="text-h5 text-white">Adresse email: {{ user.email }}</span>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", ["user"]),
  },
};
</script>