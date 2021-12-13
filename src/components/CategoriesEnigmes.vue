<template>
  <div class="bloc-categories">
    <q-btn
      @click="resetFilter()"
      label="Tout"
      color="secondary"
      class="q-btn-category"
    />
    <q-btn
      v-for="category in categories"
      :key="category.id"
      @click="emitFilter(category)"
      :label="category.name"
      color="secondary"
      class="q-btn-category"
    />
  </div>
</template>

<script>
export default {
  name: "CategoriesEnigmes",
  data: () => ({
    categories: [],
  }),
  async created() {
    const response = await this.$axios.get("categories");
    this.categories = response.data["hydra:member"];
  },
  methods: {
    emitFilter(category) {
      this.$emit("filter", category["@id"]);
    },
    resetFilter() {
      this.$emit("filter", " ");
    },
  },
};
</script>

<style scoped>
.bloc-categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 0 40px 0;
}

.q-btn-category {
  min-width: 15%;
}
</style>