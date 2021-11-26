<template>
  <q-header bordered class="bg-secondary text-white" style="height: 100px">
    <q-toolbar class="row justify-start items-center full-height">
      <div class="col-3">
        <router-link to="/">
          <q-toolbar-title>
            <q-img
              src="@/assets/MaltonLOGO.svg"
              height="100px"
              width="200px"
              fit="contain"
            ></q-img>
          </q-toolbar-title>
        </router-link>
      </div>
      <div class="col-6 text-center">
        <q-btn
          v-for="item in items"
          :key="item.route"
          :to="{ name: item.route }"
          flat
        >
          <q-icon :name="item.icon" class="q-mr-sm" />
          {{ item.text }}
        </q-btn>
        <q-btn class="no-box-shadow no-border" label="Mon compte">
          <q-menu class="no-border-radius">
            <q-list style="min-width: 150px">
              <q-item clickable v-ripple to="my_profile">
                <q-icon size="xs" class="q-mr-sm q-mt-auto q-mb-auto" name="fas fa-user-circle"></q-icon>
                <q-item-section>Mon profil</q-item-section>
              </q-item>
              <q-item clickable v-ripple :to="{ name: 'my_puzzles' }">
                <q-icon size="xs" class="q-mr-sm q-mt-auto q-mb-auto" name="fas fa-heart"></q-icon>
                <q-item-section>Mes énigmes favorites</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-ripple to="logout">
                <q-icon size="xs" class="q-mr-sm q-mt-auto q-mb-auto" name="fas fa-sign-out-alt"></q-icon>
                <q-item-section>Déconnexion</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <div class="col-3 text-right">
        <span>
          <q ref="">Un gentleman n'abandonne jamais un puzzle non résolu</q> -
          Professeur Layton
        </span>
      </div>
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
    ],
  }),
};
</script>
