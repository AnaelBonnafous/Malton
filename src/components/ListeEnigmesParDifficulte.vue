<template>
  <div class="bg-primary row justify-center q-mb-lg">
    <Enigme
      v-for="enigme in enigmes"
      :enigme="enigme"
    />
  </div>
</template>

<script>
import Enigme from "@/components/Enigme.vue";

export default {
  name: 'ListeEnigmesParDifficulte',
  props: ['difficulty', 'category'],
  components: {
    Enigme
  },
  data: () => ({
    enigmes: [],
  }),
  created() {
    if (this.difficulty) {
      this.getEnigmes('?difficulty=' + this.difficulty);
    }
  },
  watch: {
    category: function(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getEnigmes('?difficulty=' + this.difficulty + '&category=' + this.category);
      }
    }
  },
  methods: {
    async getEnigmes(query) {
      const response = await this.$axios.get('enigmes' + query);
      this.enigmes = response.data['hydra:member'];
    },
  }
};
</script>