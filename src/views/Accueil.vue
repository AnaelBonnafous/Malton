<template>
  <q-page class="text-center">
    <h1 class="text-h3">Bienvenue sur le site de résolution d'énigmes</h1>
    <div class="q-gutter-lg">
      <q-btn :to="{ name: 'login' }" color="primary">Connexion</q-btn>
      <q-btn :to="{ name: 'register' }" color="primary">S'inscrire</q-btn>
    </div>
  </q-page>
</template>