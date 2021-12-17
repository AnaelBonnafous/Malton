<template>
  <div class="row justify-center text-center q-mt-xl q-col-gutter-xl">
    <div
      @click="checkAnswer(solution.is_valid)"
      v-for="solution in solutions"
      :key="solution.position"
      class="col-12 col-sm-6 col-md-3 col-xl-2 cursor-pointer"
    >
      <q-img
        src="https://via.placeholder.com/200x200"
        spinner-color="primary"
        spinner-size="82px"
        class="q-solution-img"
      />
      <q-btn color="secondary" :label="solution.value" class="q-solution-btn" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["enigmeId", "solutions"],
  methods: {
    checkAnswer(is_valid) {
      if (is_valid) {
        this.$emit(
          "correct",
          "message_response_is_correct",
          "image_response_is_correct"
        );
      } else {
        this.$emit("incorrect", "message_response_is_incorrect");
      }
    },
  },
};
</script>

<style scoped>
.q-solution-img {
  border-radius: 20px 20px 0 0;
}

.q-solution-btn {
  border-radius: 0 0 20px 20px;
  width: 100%;
}
</style>