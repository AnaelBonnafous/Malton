<template>
<<<<<<< HEAD
  <div class="row-img">
    <div class="q-ma-lg">
      <q-img
        src="/src/assets/logo_malton.png"
        width="200px"
        spinner-color="primary"
        spinner-size="50px"
      />
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>

.row-img {
  display: initial !important; 
  text-align: center;
}


</style>
=======
  <q-layout view="hHh lpR fff">
    <NavBar />
    <q-page-container>
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
>>>>>>> master
