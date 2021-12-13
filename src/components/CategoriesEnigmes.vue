<template>
  <div class="bloc-categories">
    <q-btn
        v-for="category in categories"
        :key="category.id"
        class="bg-secondary text-white q-btn-category"
        @click="emitFilter(category)"
    >
      {{ category.name }}
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'CategoriesEnigmes',
  data: () => ({
    categories: [],
  }),
  async created() {
    const response = await this.$axios.get('categories');
    this.categories = response.data["hydra:member"];
  },
  methods: {
    emitFilter (category) {
      this.$emit('filter', category['@id']);
    },
  }
};
</script>

<style scoped>
  .bloc-categories{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 20px 0 40px 0;
  }

  .q-btn-category {
    min-width: 15%;
  }
</style>