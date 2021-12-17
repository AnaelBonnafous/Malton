<template>
  <div class="row justify-center text-center q-mt-lg q-col-gutter-xl">
    <div
      v-for="(solution, index) in solutions"
      :key="solution.position"
      class="col-12 col-sm-6 col-md-3 col-xl-2"
    >
      <q-input
        v-model="propositions[index]"
        type="text"
        :label="`Réponse ${index + 1}`"
        color="secondary"
        bg-color="white"
        outlined
      />
    </div>
  </div>
  <div class="text-center q-mt-xl">
    <q-btn @click="checkAnswer" label="Valider" color="secondary" size="lg" />
  </div>
</template>

<script>
export default {
  props: ["enigmeId", "solutions"],
  data: () => ({
    propositions: [],
  }),
  methods: {
    checkAnswer() {
      const is_valid = this.solutions.every((solution, index) => {
        return solution.value == this.propositions[index];
      });
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
