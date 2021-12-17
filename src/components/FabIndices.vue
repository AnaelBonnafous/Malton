<template>
  <q-page-sticky position="top-right" :offset="[18, 18]">
    <q-fab
      icon="fas fa-question"
      active-icon="fas fa-times"
      color="secondary"
      direction="down"
    >
      <q-fab-action
        v-for="(indice, index) in indicesData"
        :key="index"
        @click="selectIndice(index)"
        color="secondary"
      >
        <span v-if="indice.unlocked" class="text-bold">{{ index + 1 }}</span>
        <q-icon
          v-else
          :name="index === lastIndex ? 'fas fa-lock-open' : 'fas fa-lock'"
        />
      </q-fab-action>
    </q-fab>
  </q-page-sticky>

  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Indice</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ selectedIndice }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ["indices"],
  data: () => ({
    lastIndex: 0,
    dialog: false,
    selectedIndice: null,
    indicesData: [],
  }),
  created() {
    this.indicesData = this.indices.map((indice) => {
      return {
        text: indice,
        unlocked: false,
      };
    });
  },
  methods: {
    selectIndice(index) {
      if (this.indicesData[index].unlocked) {
        this.viewIndice(index);
      } else {
        this.unlockIndice(index);
      }
    },
    unlockIndice(index) {
      if (this.lastIndex >= index) {
        this.indicesData[index].unlocked = true;
        this.viewIndice(index);
        this.lastIndex++;
      }
    },
    viewIndice(index) {
      this.selectedIndice = this.indicesData[index].text;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.q-page-sticky {
  z-index: 1;
}
</style>