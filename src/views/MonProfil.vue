<template>
  <q-page class="text-center">
    <h1 class="text-h3 title-profil q-pa-lg">Mon profil</h1>
    <div class="block-flex-profil">
      <div class="flex-img q-ml-lg">
        <img src="@/assets/images/profil/layton.png" class="image-profil radius-50 q-mt-md q-mb-sm">
      </div>
      <div class="flex-text q-ml-lg">
        <div class="text-h5 text-white text-score"><span>Score total :</span> 850 picarats</div>
        <span class="text-h5 text-white text-mail">{{ user.email }}</span>
        <div class="text-profil text-h5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Tincidunt egestas dignissim dictumst et tortor feugiat faucibus orci in.
        </div>
      </div>
    </div>
    <div class="block-profil q-mb-lg">
      <div class="block-enigme-fav">
        <h1 class="text-h3 title-profil q-pa-lg">Enigmes favorites</h1>
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
        <h1 class="text-h3 title-profil q-pa-lg">Score par difficulté</h1>
        <div class="block-flex-circular">
          <div>
            <q-circular-progress
                show-value
                :value="value.easy"
                class="q-ma-md"
                size="200px"
                color="a73808"
            >
              {{ value.easy }} %
            </q-circular-progress>
          </div>
          <div>
            <q-circular-progress
                show-value
                :value="value.intermediate"
                class="q-ma-md"
                size="200px"
                color="a73808"
            >
              {{ value.intermediate }} %
            </q-circular-progress>
          </div>
          <div>
            <q-circular-progress
                show-value
                :value="value.hard"
                class="q-ma-md"
                size="200px"
                color="a73808"
            >
              {{ value.hard }} %
            </q-circular-progress>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import { ref } from 'vue';

export default {
  data: () => ({
    value: {
      easy: 30,
      intermediate: 50,
      hard: 10
    },
  }),
  computed: {
    ...mapGetters("user", ["user"]),
  },
};
</script>

<style scoped>

.block-flex-profil {
  display: flex;
  background-color: #5D5166;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid #2e2525;
}

.block-profil {
  background-color: #544d4d;
  border-radius: 0 0 20px 20px;
}

.carousel-enigme-fav {
  background-color: #2E2525;
}

.block-flex-circular {
  display: flex;
}

.block-flex-circular > div {
  flex: 1;
  max-width: 29%;
}

.image-profil {
  width: 290px;
}

.flex-text {
  flex: 1;
  text-align: left;
  margin-top: 50px;
}

.text-profil {
  margin-top: 50px;
  margin-right: 3%;
}

.text-score {
  text-align: right;
  margin-right: 3%;
}

.text-score > span {
  text-decoration: underline;
}

.title-profil {
  text-align: left;
  margin-top: 0;
}

.q-circular-progress {
  color: #A73808 !important;
}
</style>
