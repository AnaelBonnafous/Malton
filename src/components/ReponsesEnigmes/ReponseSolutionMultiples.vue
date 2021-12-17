<template>
  <div class="row justify-center text-center q-my-lg q-col-gutter-xl">
    <div
      v-for="solution in solutions"
      :key="solution.position"
      class="col-12 col-sm-6 col-md-3 col-xl-2"
    >
      <q-input
        v-model="answer[solution.position]"
        type="text"
        :label="`Réponse ${solution.position}`"
        color="secondary"
        bg-color="white"
        outlined
      />
    </div>
  </div>
  <div class="text-center q-mt-xl">
    <q-btn @click="sendAnswer" label="Valider" color="secondary" size="lg" />
  </div>
</template>

<script>
export default {
  props: ["enigmeId", "solutions"],
  data: () => ({
    answer: {},
  }),
  mounted() {
    this.solutions.forEach((solution) => {
      this.answer[solution.position] = null;
    });
  },
  methods: {
    async sendAnswer() {
      const response = await this.$axios.get(
        "check_reponses_enigmes/" +
          this.enigmeId +
          "/multiple/" +
          JSON.stringify(this.answer)
      );
      const data = response.data["hydra:member"][0];

      if (data["message_response_is_incorrect"]) {
        this.$emit("incorrect", data["message_response_is_incorrect"]);
      } else {
        this.$emit(
          "correct",
          data["message_response_is_correct"],
          data["image_response_is_correct"]
        );
      }
    },
  },
};
</script>
