<template>
  <q-layout view="hHh lpR fff">
    <NavBar />
    <q-page-container class="q-pa-lg">
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
