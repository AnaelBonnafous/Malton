<template>
  <div class="q-ma-lg">
    <q-img
      src="/src/assets/logo_malton.png"
      width="200px"
      spinner-color="primary"
      spinner-size="50px"
    />
    <q-btn-group class="q-ml-lg">
      <q-btn to="/" color="primary" label="Accueil" />
      <q-btn to="/enigmes" color="secondary" label="Enigmes" />
    </q-btn-group>
    <router-view></router-view>
  </div>
</template>