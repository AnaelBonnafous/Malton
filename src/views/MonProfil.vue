<template>
  <q-page>
    <div class="q-my-xl">
      <div
        class="row justify-center bg-secondary rounded-borders q-ma-lg q-pa-lg"
      >
        <div class="col-12 col-md-4 text-center">
          <h2 class="text-h3">Mon profil</h2>
          <q-avatar size="200px" color="primary">
            <img src="@/assets/images/profil/layton.png" />
          </q-avatar>
          <div class="q-mt-md text-h5 text-white">
            <div>Porte-monnaie : 850 picarats</div>
            <div>Email : {{ user.username }}</div>
            <div>
              <span v-if="user.description">{{ user.description }}</span>
              <span v-else>Aucune descrption...</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 text-center">
          <h2 class="text-h3">Mon score</h2>
          <div class="row justify-center text-white">
            <div class="col-12 col-sm-6 col-md-4">
              <q-circular-progress
                show-value
                :value="value.easy"
                color="green"
                size="200px"
              >
                {{ value.easy }} %
              </q-circular-progress>
              <h3 class="text-h5">Facile</h3>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <q-circular-progress
                show-value
                :value="value.intermediate"
                color="orange"
                size="200px"
              >
                {{ value.intermediate }} %
              </q-circular-progress>
              <h3 class="text-h5">Intermédiaire</h3>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <q-circular-progress
                show-value
                :value="value.hard"
                color="red"
                size="200px"
              >
                {{ value.hard }} %
              </q-circular-progress>
              <h3 class="text-h5">Difficile</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-primary rounded-borders q-pa-lg">
        <div class="col-12 col-md-6 text-center">
          <h2 class="text-h3">Mes énigmes favorites</h2>
          <div v-if="enigmesFavorites.length">
            <q-carousel
              v-model="slide"
              thumbnails
              swipeable
              infinite
              animated
              transition-prev="slide-right"
              transition-next="slide-left"
              class="bg-primary"
            >
              <q-carousel-slide
                :img-src="`src/assets/images/enigmes/${enigme.image_url}`"
                v-for="(enigme, index) in enigmesFavorites"
                :name="index"
                :key="index"
                class="cursor-pointer"
                @click="playEnigme(enigme.id)"
              >
                <q-tooltip
                  class="bg-secondary rounded-borders"
                  anchor="center end"
                  self="center start"
                  :delay="500"
                >
                  <q-card class="text-center text-black">
                    <img
                      :src="`src/assets/images/enigmes/${enigme.image_url}`"
                    />
                    <q-card-section>
                      <div class="text-h6">
                        {{ currentEnigmeFavorite.name }}
                      </div>
                      <div class="text-subtitle2">
                        {{ currentEnigmeFavorite.difficulty.difficulty }}
                      </div>
                    </q-card-section>
                  </q-card>
                </q-tooltip>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center">
          <h2 class="text-h3">Mes propres énigmes</h2>
          <div class="row justify-center">
            <div class="col-6">
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                esse, deserunt itaque eaque molestias fuga quidem. Laudantium
                iure deleniti vero, dolorum corporis, voluptatem magni repellat
                dolore, recusandae a assumenda sint?
              </p>
              <p class="text-white">
                Necessitatibus, architecto id libero explicabo commodi vitae
                delectus asperiores quasi repellendus et assumenda provident
                atque dolor expedita suscipit? A iste qui neque voluptatem
                laborum maiores harum facere magni beatae modi.
              </p>
              <p class="text-white">
                Porro esse sapiente praesentium mollitia omnis sequi adipisci,
                id, laudantium fugit rerum a culpa labore nesciunt, tempora
                inventore nobis laborum repellat explicabo? Incidunt rerum optio
                reprehenderit, inventore itaque dolorem architecto?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    slide: 0,
    enigmesFavorites: [],
    value: {
      easy: 81,
      intermediate: 42,
      hard: 17,
    },
  }),
  computed: {
    ...mapGetters("userStore", ["user"]),
    currentEnigmeFavorite() {
      return this.enigmesFavorites[this.slide];
    },
  },
  async created() {
    const response = await this.$axios.get(
      `enigme_favorites?user=${this.user.id}`
    );
    this.enigmesFavorites = response.data["hydra:member"].map(
      (el) => el.enigme
    );
  },
  methods: {
    playEnigme(id) {
      this.$router.push({
        name: "enigme-solution-unique",
        params: {
          enigmeId: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
