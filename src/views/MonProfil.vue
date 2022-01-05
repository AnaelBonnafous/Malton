<template>
  <q-page>
    <div class="q-my-xl">
      <div
        class="row justify-center rounded-borders q-ma-lg q-pa-lg"
        id="bloc-profil"
      >
        <div class="col-12 col-md-4 text-center">
          <h2 class="text-h3">Mon profil</h2>
          <q-avatar size="200px" color="primary">
            <q-img src="@/assets/images/profil/layton.png" />
          </q-avatar>
          <div class="q-mt-md text-h5 text-white">
            <div>Email : {{ user.email }}</div>
            <div>
              <span v-if="user.description">{{ user.description }}</span>
              <span v-else>Aucune description...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg-primary rounded-borders q-pa-lg">
        <div class="col-12 text-center">
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
                <!-- <q-tooltip
                  class="bg-secondary rounded-borders"
                  anchor="center middle" self="center start"
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
                </q-tooltip> -->
              </q-carousel-slide>
            </q-carousel>
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
  }),
  computed: {
    ...mapGetters("userStore", ["user"]),
    currentEnigmeFavorite() {
      return this.enigmesFavorites[this.slide];
    },
  },
  async created() {
    const response = await this.$axios.get(
      `enigme_favorites?user=${this.user['@id']}`
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
