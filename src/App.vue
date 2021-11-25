<template>
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