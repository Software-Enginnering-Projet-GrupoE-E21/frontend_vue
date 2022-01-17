<template>
  <v-main>
    <div class="ml-10 pl-3">
        <h2 style="color: #000" class="mt-0 pa-0"> Minhas atividades dos cursos em andamento </h2>
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
              ></v-img>
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
                  </div>
                  <div>
                      
                      <div 
                        :class="[
                            'text-left p-0 m-0', 
                            (item.activityNote < 6 ) ? 'activityReproved' : 
                            (item.activityNote >= 6 && item.activityNote < 8 ) ? 'activityAttention' : 
                            (item.activityNote >= 8 ) ? 'activityApproved' : '']">
                            Nota: {{item.activityNote}}
                        </div>
                        <div class="d-flex flex-row mt-1">
                            <div class="text-left mr-2"><strong>Conquistas:</strong></div>
                            <div class="mr-1">
                                <v-img
                                    src="../../assets/crowns.png"
                                    lazy-src="../../assets/crowns.png"
                                    height="1.2rem"
                                    width="1.5rem"
                                    ></v-img>
                            </div>
                            <div> <strong>{{item.conquests}} coroas</strong></div>
                        </div>
                  </div>
                  <div class="text-right">
                      <v-btn 
                        href="ranking"
                        depressed 
                        color="primary black--text mt-3 text-none"
                        >Abrir Trilha</v-btn>
                  </div>
                </v-card-text>
            </div>
          </v-card>
         </v-col>
       </v-row>
       
     </div>

     <div class="ml-10 pl-3 mt-10">
        <h2 style="color: #000" class="mt-0 pa-0"> Minhas atividades dos cursos finalizados </h2>
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
              ></v-img>
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
                  </div>
                  <div>
                      
                    <div 
                        :class="[
                            'text-left p-0 m-0', 
                            (item.activityNote < 6 ) ? 'activityReproved' : 
                            (item.activityNote >= 6 && item.activityNote < 8 ) ? 'activityAttention' : 
                            (item.activityNote >= 8 ) ? 'activityApproved' : '']">
                            Nota: {{item.activityNote}}
                        </div>
                        <div class="d-flex flex-row mt-1">
                            <div class="text-left mr-2"><strong>Conquistas:</strong></div>
                            <div class="mr-1">
                                <v-img
                                    src="../../assets/crowns.png"
                                    lazy-src="../../assets/crowns.png"
                                    height="1.2rem"
                                    width="1.5rem"
                                    ></v-img>
                            </div>
                            <div> <strong>{{item.conquests}} coroas</strong></div>
                        </div>
                  </div>
                  <div class="text-right">
                      <v-btn 
                        href="ranking"
                        depressed 
                        color="primary black--text mt-3 text-none"
                        >Abrir Trilha</v-btn>
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
          conclusion: 10,
          activityNote: 9.2,
          conquests: 3,
        }
      ],
      finalized: [{ 
          title: '<strong>Entenda como organizar sua economia doméstica!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          conclusion: 10,
          activityNote: 3,
          conquests: 10,
        },
        { 
          title: '<strong>Saiba como iniciar um orçamento inteligente de forma simples!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          conclusion: 0,
          activityNote: 7.1,
          conquests: 9,
        },
        { 
          title: '<strong>Prós e contras do cartão de crédito</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.', 
          conclusion: 90,
          activityNote: 10,
          conquests: 5,
        }
      ]
    }
  }
}
</script>

<style>

.conquistas{
    padding-right: 0 !important;
}

.coroa{
    padding-left: 0 !important;
    padding-right: 0 !important;
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

.activityApproved{
    color: #2EA400;
}

.activityReproved{
    color: #EA2B2B;
}

.activityAttention{
    color: #2B00FF;
}
</style>