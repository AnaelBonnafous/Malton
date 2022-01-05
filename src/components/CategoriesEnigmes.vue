<template>
  <div class="bloc-categories">
    <q-btn @click="resetFilter()" label="Tout" color="secondary" class="q-btn-category" />
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
import { mapGetters, mapActions } from "vuex"

export default {
  name: "CategoriesEnigmes",
  created() {
    if (!this.categories.length) {
      this.$axios.get("categories").then(response => {
        this.saveCategories(response.data['hydra:member'])
      })
    }
  },
  methods: {
    ...mapActions({
      storeSaveCategories: "categoryStore/saveCategories",
    }),
    saveCategories(categories) {
      this.storeSaveCategories(categories)
    },
    emitFilter(category) {
      this.$emit("filter", category["@id"]);
    },
    resetFilter() {
      this.$emit("filter", " ");
    },
  },
  computed: {
    ...mapGetters('categoryStore', ['categories'])
  }
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