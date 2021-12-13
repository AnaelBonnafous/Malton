<template>
    <div
      v-on:click="redirectionPageEnigme(enigme.id)"
      class="enigme"
    >
        <q-img :src="'src/assets/images/enigmes/' + enigme.image_url" class="image-enigme">
        <div class="absolute-full text-subtitle2 enigme-text text-left column text-body1">
            <span class="q-mb-md block text-bold">Nom :
            <span class="text-weight-regular">{{ enigme.name }}</span>
          </span>
          <span class="q-mb-md block text-bold">Description :
            <span class="text-weight-regular" v-html="this.$decodeHtml(enigme.brief_description)"></span>
          </span>
          <span class="q-mb-md block text-bold">Difficulté :
            <span class="text-weight-regular">{{ enigme.difficulty.difficulty }}</span>
          </span>
          </div>
        </q-img>
    </div>
</template>

<script>
export default {
  props: {
    enigme: {
      required: true
    },
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