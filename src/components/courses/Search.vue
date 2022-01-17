<template>
  <v-main>
    <div class="ml-10 pl-3">
        <h2 style="color: #000" class="mt-0 pa-0"> Cursos disponíveis </h2>
        <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>

    </div>
    <div class="mx-12">
        <v-row>
            <v-col cols="7" class="pt-10">
                  <v-text-field 
                  outlined
                  append-icon="mdi-magnify"
                  placeholder="Qual curso procura?"></v-text-field>
            </v-col>
            <v-col
             cols="2"
             class="mt-6">
                <v-checkbox
                color="secondary"
                v-model="checkbox"
                :label="`Mais avaliados`"
                ></v-checkbox>
            </v-col>
            <v-col
             cols="3"
             class="mt-6">
                <v-checkbox
                color="secondary"
                v-model="checkbox"
                :label="`Classificação mais alta`"
                ></v-checkbox>
            </v-col>
        </v-row>
    </div>    
    <div class="mx-12 my-12">
       <v-row :align="'start'">
         <v-col 
            v-for="item in searchResult" 
            :key="item"
            cols="4">
          <v-card 
            height="100%"
            width="100%"
            min-height="500px"
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
                    href="detalhe"
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
                      <div class="text-left">
                          <span class="color-primary progresso-classificacao mr-2">{{item.classification}}</span>
                          <i :class="['fas fa-star', item.classification >= 1 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 2 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 3 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 4 ? 'color-primary' : '']"></i>
                          <i :class="['fas fa-star', item.classification >= 5 ? 'color-primary' : '']"></i>
                          <span class="progresso-total ml-3">({{item.total}})</span>
                          <div class="text-left mt-4">
                            <v-btn v-if="item.top" class="secondary" x-small tile text>Classificação Mais Alta</v-btn>
                          </div>
                      </div>
                      
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
      searchResult: [{ 
          title: '<strong>Entenda como organizar sua economia doméstica!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          classification: 1,
          total: 10,
          top: true,
        },
        { 
          title: '<strong>Saiba como iniciar um orçamento inteligente de forma simples!</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
          classification: 2,
          total: 0,
          top: true,
        },
        { 
          title: '<strong>Prós e contras do cartão de crédito</strong>', 
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.', 
          classification: 3,
          total: 90,
          top: false,
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

.progresso-classificacao{
    font-size: 1.3rem;
}

.progresso-total{
    color: #5A5A5A !important;
}

.border {
  border-bottom: 5px solid;
  border-bottom-color: #FFDA00;
}

.fa-star{
    font-size: 1.3rem;
}

.cardTitle{
    font-size: 1rem !important;
    line-height: 1rem !important;
}
</style>