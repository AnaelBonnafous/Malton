<template>
  <q-page class="text-center">
    <h1 class="text-h3 title-profil">Mon profil</h1>
    <div class="block-flex-profil">
      <div class="flex-img">
        <img src="src/assets/images/profil/layton.png" class="image-profil">
      </div>
      <div class="flex-text">
        <div class="text-h5 text-white text-score"><span>Score total :</span> 850 picarats</div>
        <span class="text-h5 text-white text-mail">{{ user.email }}</span>
        <div class="text-profil text-h5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tincidunt egestas dignissim dictumst et tortor feugiat faucibus orci in.
        </div>
      </div>
    </div>

    <div class="block-enigme-fav">
      <h1 class="text-h3 title-profil">Enigmes favorites</h1>
      <div class="block-flex-img">
        <div>
          <img src="src/assets/images/enigmes/contre_la_montre.jpg" class="image-profil">
        </div>
        <div>
          <img src="src/assets/images/enigmes/ensemencement.jpg" class="image-profil">
        </div>
      </div>
    </div>

    <div class="block-score-diff">
      <h1 class="text-h3 title-profil">Score par difficulté</h1>
      <div class="block-flex-circular">
        <div>
          <q-circular-progress
              show-value
              class="text-light-blue q-ma-md"
              :value="30"
              size="200px"
              color="light-blue"
          />
        </div>
        <div>
          <q-circular-progress
              show-value
              class="text-light-blue q-ma-md"
              :value="70"
              size="200px"
              color="light-blue"
          />
        </div>
      </div>
    </div>

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

<style scoped>

.block-flex-profil {
  display: flex;
  background-color: #5D5166;
  border-radius: 20px;
}

.block-flex-img, .block-flex-circular {
  display: flex;
}

.block-flex-img > div, .block-flex-circular > div {
  flex: 1;
}

.flex-img {
  flex: 1;
}

.image-profil {
  width: 352px;
  height: 360px;
}

.flex-text {
  flex: 1;
  text-align: left;
  margin-top: 50px;
}

.text-profil {
  margin-top: 50px;
}

.text-score{
  text-align: right;
}

.text-score > span {
  text-decoration: underline;
}

.title-profil {
  text-align: left;
}

</style>