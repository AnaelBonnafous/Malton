<template>
  <section id="bloc-answer">
    <q-input
        outlined
        label-slot
        type="text"
        v-model="answer"
    >
      <template v-slot:label>
        <span class="text-weight-bold">Votre réponse</span>
      </template>
    </q-input>
    <q-btn
        class="bg-secondary text-white enigme-valider"
        @click="sendAnswer"
    >
      Valider
    </q-btn>
  </section>
</template>

<script>
export default {
  name: 'ReponseSolutionUnique',
  props: {
    enigmeId: {
      required: true,
    },
  },
  data: () => ({
    answer: null,
  }),
  methods: {
    async sendAnswer() {
      if(!this.answer) {
        return;
      }
      
      const response = await this.$axios.get('check_reponses_enigmes/' + this.enigmeId + '/unique/' + this.answer);
      const data = response.data['hydra:member'][0];

      if(data['message_response_is_incorrect']) {
        this.$emit('incorrect', data['message_response_is_incorrect']);
      } else {
        this.$emit('correct', data['message_response_is_correct'], data['image_response_is_correct']);
      }
    }
  }
};
</script>

<style scoped>
  #bloc-answer{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .q-input {
    width: 300px;
    max-width:100%;
    margin:0 auto;
  }
</style>