<template>
  <q-layout view="hHh lpR fff" class="bg-dark">
    <NavBar />
    <q-page-container class="q-mx-lg">
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
