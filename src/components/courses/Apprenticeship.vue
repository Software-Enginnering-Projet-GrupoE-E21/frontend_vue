<template>
  <v-main>
    <div class="ml-10 pl-3">
        <h2 style="color: #000" class="mt-0 pa-0"> Cursos em andamento </h2>
        <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>

    </div>
    <div class="mx-12">
       <v-row :align="'start'">
         <v-col 
            v-for="item in inProgress" 
            :key="item"
            cols="4">
          <v-card 
            height="100%"
            width="100%"
            outlined
            tile
            class="text-center"
            color="#F6F6F6">
            <div class="border">
              
              <v-img
              src="../../assets/background_card_01.jpg"
              lazy-src="../../assets/background_card_01.jpg"
              class="grey lighten-2 pa-0 ma-0"
              height="100%"
              width="100%"
              >
                <div class="play">
                  <v-btn
                    elevation="2"
                    icon
                    plain
                    x-large
                    class="play-buttom"
                    fab
                    href="cursos/conteudo"
                  >
                  <i class="fas fa-play"></i>
                  </v-btn>
                </div>
              </v-img>
              </div>
            <div class="mx-0 mt-3 text-left">
                <v-card-title
                  style="word-break: break-word"
                  class="cardTitle" 
                  v-html="item.title"></v-card-title>
                <v-card-text 
                  style="word-break: break-word">
                  <div class="cardContent">{{item.message}}</div>
                  <div class="progresso my-5">
                      <v-progress-linear color="secondary" :value="item.conclusion"></v-progress-linear>
                      <div class="text-left p-0 m-0">{{item.conclusion}}% concluído</div>
                      <div class="text-right">
                          <i :class="['fas fa-star', item.classification >= 1 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 2 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 3 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 4 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 5 ? 'color-primary' : '']"></i>
                      </div>
                      <p class="text-right p-0 m-0">Sua classificação</p>
                  </div>
                </v-card-text>
            </div>
          </v-card>
         </v-col>
       </v-row>
       
     </div>

     <div class="ml-10 pl-3 mt-10">
        <h2 style="color: #000" class="mt-0 pa-0"> Cursos finalizados </h2>
        <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>
    </div>
    <div class="mx-12 my-12">
       <v-row :align="'start'">
         <v-col 
            v-for="item in finalized" 
            :key="item"
            cols="4">
          <v-card 
            height="100%"
            width="100%"
            outlined
            tile
            class="text-center"
            color="#F6F6F6">
            <div class="border">
              <v-img
              src="../../assets/background_card_01.jpg"
              lazy-src="../../assets/background_card_01.jpg"
              class="grey lighten-2 pa-0 ma-0"
              height="100%"
              width="100%"
              >
                <div class="play">
                  <v-btn
                    elevation="2"
                    icon
                    plain
                    x-large
                    class="play-buttom"
                    fab
                  >
                  <i class="fas fa-play"></i>
                  </v-btn>
                </div>
              </v-img>
            </div>
            <div class="mx-0 mt-3 text-left">
                <v-card-title
                  style="word-break: break-word"
                  class="cardTitle" 
                  v-html="item.title"></v-card-title>
                <v-card-text 
                  style="word-break: break-word">
                  <div class="cardContent">{{item.message}}</div>
                  <div class="progresso my-5">
                      <v-progress-linear color="secondary" :value="item.conclusion"></v-progress-linear>
                      <div class="text-left p-0 m-0">{{item.conclusion}}% concluído</div>
                      <div class="text-right">
                          <i :class="['fas fa-star', item.classification >= 1 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 2 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 3 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 4 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 5 ? 'color-primary' : '']"></i>
                      </div>
                      <p class="text-right p-0 m-0">Sua classificação</p>
                  </div>
                </v-card-text>
            </div>
          </v-card>
         </v-col>
       </v-row>
       
     </div>
        
  </v-main>
</template>

<script>
export default {
 data() {
    return { 
      inProgress: [{ 
          title: '<strong>Entenda como organizar sua economia doméstica!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          classification: 1,
          conclusion: 10,
        }
      ],
      finalized: [{ 
          title: '<strong>Entenda como organizar sua economia doméstica!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          classification: 1,
          conclusion: 10,
        },
        { 
          title: '<strong>Saiba como iniciar um orçamento inteligente de forma simples!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          classification: 2,
          conclusion: 0,
        },
        { 
          title: '<strong>Prós e contras do cartão de crédito</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.', 
          classification: 3,
          conclusion: 90
        }
      ]
    }
  }
}
</script>

<style>
.play-buttom{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: rgba(207, 207, 196, 0.5);
}
.play-buttom i{
  font-size: 1.5rem;
  color: white;
}
.play{
  width: 100%;
  z-index: 1000;
  height: 100%;
  position: relative;
  background-color: rgba(128, 128, 128, 0.5);
}
.cardTitle{
  min-height: 65px;
  max-height: 65px;
}
.cardContent{
  min-height: 90px;
  max-height: 90px;
}
.separetor-01 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #4A1E75;
}

.separetor-02 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #FFDA00;
}

.border {
  border-bottom: 5px solid;
  border-bottom-color: #FFDA00;
}

.progresso p {
    font-size: 0.7rem;
}

.fa-star{
    font-size: 1.3rem;
}

.cardTitle{
    font-size: 1rem !important;
    line-height: 1rem !important;
}
</style>