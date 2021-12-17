<template>
  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section class="q-px-none bg-secondary">
        <div class="text-h4 text-center text-white">{{ title }}</div>
      </q-card-section>

      <q-card-section  v-if="image" class="q-py-none q-px-none">
        <q-img :src="'src/assets/images/enigmes/' + image"/>
      </q-card-section>

      <q-card-section class="q-pt-none q-pt-md">
        <p v-html="this.$decodeHtml(message)"></p>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          v-if="redirection"
          flat
          label="Retourner à la liste des énigmes"
          color="primary"
          @click="redirectionTo()"
        />
        <q-btn
          v-else
          flat
          label="Réessayer"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogEnigme',
  props: {
    dialog: {
      required: true,
    },
    title: {
      required: true,
    },
    message: {
      required: true,
    },
    redirection: {
      required: false,
    },
    image: {
      required: false,
    }
  },
  watch: {
    dialog: function(newValue) {
      if (newValue === false) {
        this.$emit('close');
      }
    },
  },
  methods: {
    redirectionTo() {
      this.$router.push(this.redirection);
    },
  },
};
</script>