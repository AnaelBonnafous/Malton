<template>
  <div class="row justify-center text-center q-my-xl q-col-gutter-xl">
    <div
      @click="sendAnswer(solution.value)"
      v-for="solution in solutions"
      :key="solution.position"
      class="col-12 col-sm-6 col-md-3 col-xl-2 cursor-pointer"
    >
      <q-btn color="secondary" :label="solution.value" rounded class="full-width text-h4" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["enigmeId", "solutions"],
  methods: {
    async sendAnswer(answer) {
      const response = await this.$axios.get(
        "check_reponses_enigmes/" + this.enigmeId + "/choix/" + answer
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