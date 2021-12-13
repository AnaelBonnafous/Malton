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
      <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          class="carousel-enigme-fav shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
            <img src="src/assets/images/enigmes/contre_la_montre.jpg" />
          </div>
        </q-carousel-slide>
      </q-carousel>
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
import { ref } from 'vue';

export default {
  computed: {
    ...mapGetters("user", ["user"]),
  },
  setup () {
    return {
      slide: ref('style'),
    }
  }
};
</script>

<style scoped>

.block-flex-profil {
  display: flex;
  background-color: #5D5166;
  border-radius: 20px;
}

.carousel-enigme-fav {
  background-color: #2E2525;
}

.block-flex-circular {
  display: flex;
}

.block-flex-circular > div {
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