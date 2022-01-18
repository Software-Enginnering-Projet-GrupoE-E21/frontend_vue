<template>
  <v-main class="pt-0 mt-0">
    <v-card
      fill-height
      color="secondary"
      width="100%"
      height="550px"
      class="bg-student"
      outlined
      tile
    >
      <div class="content-left">
        <h2 style="color: #fff">
          Educação financeira para os jovens é um passo <br />
          importante para melhorar a condição financeira <br />
          do cidadão.
        </h2>
        <p class="color-primary mt-1">
          Clique no botão abaixo para se cadastrar como aluno
        </p>
        <v-btn
          depressed
          color="primary black--text mt-3 text-none"
          @click="$router.push('/cadastro')"
          >Inscreva-se</v-btn
        >
      </div>
    </v-card>
    <v-card
      fill-height
      color="#F6F6F6"
      width="100%"
      height="318px"
      outlined
      tile
      id="dineduc"
    >
      <div>
        <div class="hashtag text-center mt-10 pa-0">
          <strong>#DinEduc</strong>
        </div>
        <h2 style="color: #000" class="text-center mt-0 pa-0">
          Nosso Compromisso
        </h2>
        <div class="text-center mt-0 mb-6">
          <span class="separetor-01"></span><span class="separetor-02"></span>
        </div>
        <p class="text-center ma-0 pa-0">
          O compromisso da DinEduc é instruir e informar sobre finanças de forma
          simples, direta e didática aos jovens
        </p>
        <p class="text-center ma-0 pa-0">
          de modo a respeitar o perfil e o momento de vida de cada um.
        </p>
        <p class="text-center mt-6 mb-0 pb-0">
          A partir de nossas aulas, gamificações, orientações e outras
          atividades, ajudamos a construir um pensamento crítico
        </p>
        <p class="text-center ma-0 pa-0">
          sobre as escolhas do dia a dia e como essas decisões impactam no
          futuro de nossos alunos.
        </p>
      </div>
    </v-card>
    <v-card
      fill-height
      color="#fff"
      width="100%"
      height="318px"
      outlined
      class="mb-8"
      tile
      id="classes"
    >
      <div>
        <div class="hashtag text-center mt-10 pa-0">
          <strong>#Aulas</strong>
        </div>
        <h2 style="color: #000" class="text-center mt-0 pa-0">
          Conheça alguns temas das nossas aulas
        </h2>
        <div class="text-center mt-0 mb-10">
          <span class="separetor-01"></span>
          <span class="separetor-02"></span>
        </div>
      </div>
      <div class="mx-12">
        <v-row>
          <v-col v-for="(item, index) in items" :key="index" class="mx-0">
            <v-card
              width="175px"
              height="150px"
              outlined
              class="text-center"
              :color="item.color"
            >
              <v-icon
                :color="item.color == 'secondary' ? 'white' : 'black'"
                class="mt-7"
                large
                >{{ item.icon }}</v-icon
              >
              <v-card-text
                v-html="item.message"
                :class="
                  item.color == 'secondary' ? 'white--text' : 'black--text'
                "
              ></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-card
      fill-height
      color="primary"
      width="100%"
      height="500px"
      class="bg-student-learning"
      outlined
      tile
      id="schoolPartnership"
    >
      <div class="text-right mt-10 pt-6 mr-10" >
        <div class="content-right">
          <p class="black--text ma-0"><strong>#ParceriasEscolas</strong></p>
          <h2 class="black--text">Como funcionam as parcerias para aulas?</h2>
          <div class="text-left my-6 mb-4">
            <span class="separetor-01 separetor-4"></span>
            <span class="separetor-02 separetor-5"></span>
          </div>
          <p class="black--text">
            <br />
            Os parceiros da DinEduc são escolas públicas ou particulares que
            querem levar educação <br />
            financeira aos seus alunos. As escolas fazem o seu cadastro e o
            cadastro dos seus alunos e, <br />
            dentro das aulas selecionadas, os alunos participam do nosso
            gamification para aprender <br />
            com diversão e competitividade.
          </p>
        </div>
      </div>
    </v-card>
    <v-card
      fill-height
      color="secondary"
      width="100%"
      height="500px"
      outlined
      class="bg-teacher"
      tile
      id="volunteers"
    >
      <div class="content-left mt-16 pt-6">
        <p class="color-primary ma-0">#Voluntarios</p>
        <h2 style="color: #fff">
          Os voluntários são a nossa força que permite <br />
          trabalhar para atingir a nossa missão
        </h2>
        <div class="text-left my-6 mb-10">
          <span class="separetor-01 separetor-3"></span>
          <span class="separetor-02"></span>
        </div>
        <p class="white--text">
          Se você acredita que a educação financeira para os jovens pode mudar o
          país
          <br />e se identificacom o propósito, inscreva-se e venha ser um
          voluntário no DinEduc.
        </p>
      </div>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          message: "<strong>Hábito de <br/> economizar cedo</strong>",
          icon: "fas fa-piggy-bank",
          color: "secondary",
        },
        {
          message: "<strong>Orçamento <br/> familiar</strong>",
          icon: "fas fa-home",
          color: "primary",
        },
        {
          message: "<strong>Relação com o <br/> dinheiro</strong>",
          icon: "fas fa-wallet",
          color: "secondary",
        },
        {
          message: "<strong>Primeiros Passos <br/> para investir</strong>",
          icon: "fas fa-seedling",
          color: "primary",
        },
        {
          message: "<strong>Negociações e <br/> direito do consumidor</strong>",
          icon: "fas fa-balance-scale-right",
          color: "secondary",
        },
      ],
      itemsPost: [
        {
          title:
            "<strong>Entenda como organizar sua <br/> economia doméstica!</strong>",
          message:
            "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed tincidunt congue ligula in <br/>rutrum. Morbi nec lacus condimentum, <br/>hendrerit mi eu, feugiat.",
        },
        {
          title:
            "<strong>Saiba como iniciar um orçamento <br/> inteligente de forma simples!</strong>",
          message:
            "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed tincidunt congue ligula in <br/>rutrum. Morbi nec lacus condimentum, <br/>hendrerit mi eu, feugiat.",
        },
        {
          title: "<strong>Prós e contras do cartão de <br/> crédito</strong>",
          message:
            "Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed tincidunt congue ligula in <br/>rutrum. Morbi nec lacus condimentum, <br/>hendrerit mi eu, feugiat.",
        },
      ],
    };
  },
};
</script>

<style>
.content-left {
  position: relative;
  margin-top: 140px;
  margin-left: 50px;
}

.content-right {
  height: 100%;
  width: 58%;
  text-align: left;
  margin-left: auto;
  margin-right: 0;
}

.separetor-01 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #4a1e75;
}

.separetor-02 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #ffda00;
}

.separetor-3 {
  background: #50e0ff;
}

.separetor-4 {
  background: #4a1e75;
}

.separetor-5 {
  background: #f21c96;
}

.hashtag {
  margin-bottom: -8px;
  color: #5a6978;
}

.border {
  border-bottom: 5px solid;
  border-bottom-color: #ffda00;
}

.width-100 {
  width: 100%;
}

.bg-teacher {
  background: url("../assets/DashboardTeacherExplaining.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: auto 95%;
}

.bg-student {
  background: url("../assets/DashboardStudent.png");
  background-repeat: no-repeat;
  background-position: bottom right 200px;
  background-size: auto 100%;
}

.bg-student-learning {
  background: url("../assets/DashboardStudentLearning.png");
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: auto 100%;
}
</style>
