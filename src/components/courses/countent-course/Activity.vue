<template>
  <v-main class="py-0 px-2 pr-10">
    <v-progress-linear
      :value="100"
      height="20px"
      background-color="#949494"
    ></v-progress-linear>
    <div class="px-10 pt-10">
      <h3>{{ data.id }}. {{ data.question }}</h3>
      <div class="d-flex align-center">
        <div class="py-4 mr-6">
          <v-img
            src="../../../assets/q.png"
            height="auto"
            width="5.5rem"
          ></v-img>
        </div>
        <div class="card-pergunta">
          <p>{{ data.question }}</p>
        </div>
      </div>
    </div>

    <div class="linha-divisao"></div>

    <div class="my-10 px-10">
      <v-radio-group v-model="radioGroup">
        <v-radio
          v-for="answer in data.answer"
          :key="answer.id"
          :label="answer.text"
          :value="answer.id"
          @click="
            showValid = true;
            correctAnswer = answer.correct;
            showAnswerFeedback = null;
          "
        ></v-radio>
      </v-radio-group>
    </div>

    <div class="d-flex" v-if="showValid">
      <v-spacer></v-spacer>
      <v-btn color="#2EA400" depressed width="160px" @click="validateAnswer"
        >Verificar</v-btn
      >
    </div>

    <div v-if="showAnswerFeedback">
      <v-alert text prominent :type="showAnswerFeedback.feedbackType">
        <v-row align="center">
          <v-col class="pl-5" v-if="!showAnswerFeedback.correctAnswer">
            Que pena!<br />
            Resposta Incorreta.
          </v-col>
          <v-col class="pl-5" v-else>
            Exelente! <br />
            Resposta Correta.
          </v-col>
        </v-row>
      </v-alert>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      radioGroup: null,
      correctAnswer: false,
      showValid: false,
      showAnswerFeedback: null,
    };
  },
  methods: {
    validateAnswer() {
      if (this.correctAnswer) {
        this.showValid = false;
        this.showAnswerFeedback = {
          correctAnswer: true,
          feedbackType: "success",
        };
      } else {
        this.showValid = false;
        this.showAnswerFeedback = {
          correctAnswer: false,
          feedbackType: "error",
        };
      }

      setTimeout(() => (this.showAnswerFeedback = null), 1000);
    },
  },
};
</script>

<style>
.linha-divisao {
  height: 10px;
  background-color: #cfcfcf;
}
.card-pergunta {
  width: 100%;
  padding: 5px 20px;
  border: 1px solid #cfcfcf;
  border-radius: 6px;
}
</style>
