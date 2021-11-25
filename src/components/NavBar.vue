<template>
  <q-header bordered class="bg-secondary text-white">
    <q-toolbar>
      <router-link to="/">
        <q-toolbar-title>
          <q-img
            src="@/assets/logo_malton.png"
            height="40px"
            width="200px"
            fit="contain"
          ></q-img>
        </q-toolbar-title>
      </router-link>
      <q-btn
        v-for="item in items"
        :key="item.route"
        :to="{ name: item.route }"
        flat
      >
        <q-icon :name="item.icon" class="q-mr-sm" />
        {{ item.text }}
      </q-btn>
      <q-btn :to="{ name: 'enigmes' }" color="secondary" flat>Enigmes</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        route: "accueil",
        icon: "fas fa-home",
        text: "Accueil",
      },
      {
        route: "difficultes",
        icon: "fas fa-puzzle-piece",
        text: "Énigmes",
      },
      {
        route: "proposer",
        icon: "fas fa-plus-square",
        text: "Proposer une énigme",
      },
      {
        route: "profil",
        icon: "fas fa-user-circle",
        text: "Mon profil",
      },
    ],
  }),
};
</script>