<template>
    <div
      v-on:click="redirectionPageEnigme(enigme.id)"
      class="enigme"
    >
        <q-img
          :src="'src/assets/images/enigmes/' + enigme.image_url" class="image-enigme"
        >
          <div class="absolute-full text-subtitle2 enigme-text text-left column text-body1">
            <span class="q-mb-md block text-bold">Difficulté :
              <span class="text-weight-regular">{{ enigme.difficulty.difficulty }}</span>
            </span>
            <span class="q-mb-md block text-bold">Description :
              <span class="text-weight-regular" v-html="this.$decodeHtml(enigme.brief_description)"></span>
            </span>
          </div>
          <div class="title-enigme">{{ enigme.name }}</div>
          <q-img v-if="hasAlreadyResolvedThisEnigma" src="src/assets/images/icon_layton.png" class="icon-layton"></q-img>
        </q-img>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    enigme: {
      required: true
    },
  },
  data: () => ({
    hasAlreadyResolvedThisEnigma:false
  }),
  computed: {
    ...mapGetters("userStore", ["user"]),
  },
  async created() {
    const enigmeResolue = await this.$axios.get('enigme_resolues?and[enigme]='+this.enigme['@id']+'&and[user]='+this.user['@id'])
    if (enigmeResolue.data['hydra:totalItems'] !== 0) {
      this.hasAlreadyResolvedThisEnigma = true
    }
  },
  methods: {
    redirectionPageEnigme(enigmeId) {
      this.$router.push({
        name: 'enigme-solution-unique',
        params: {
          enigmeId: enigmeId,
        }
      })
    }
  }
};
</script>