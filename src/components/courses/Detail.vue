<template>
  <v-main>
       <div class="ml-10 pl-3">
            <h2 style="color: #000" class="mt-0 pa-0"> Detalhes do curso </h2>
            <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>
        </div>
        <v-card 
                fill-height
                color="secondary"
                width="100%"
                height="450px"
                outlined
                tile
                class="mt-10">
                <v-row>
                    <v-col cols="7" class="mt-10 ml-10">
                        <div class="content-left">
                        <h2 style="color: #fff">
                            {{item.title}}
                        </h2>
                        <p style="color: #fff" class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.</p>
                    </div>
                    <div class="mt-6 d-flex pa-2">
                        <v-avatar size="36" class="ml-2">
                        <img src="../../assets/user_card.png" alt="User">
                        </v-avatar>
                        <div style="color: #fff" class="flex-row body-2 ml-3 mr-9 my-auto">Augusto Andrade</div>
                    </div>
                    <v-row>
                    <div class="ml-2 mt-15">
                      <div class="text-left">
                            <span class="color-primary progresso-classificacao mr-2">{{item.classification}}</span>
                            <i :class="['fas fa-star', item.classification >= 1 ? 'color-primary' : '']"></i>
                            <i :class="['fas fa-star', item.classification >= 2 ? 'color-primary' : '']"></i>
                            <i :class="['fas fa-star', item.classification >= 3 ? 'color-primary' : '']"></i>
                            <i :class="['fas fa-star', item.classification >= 4 ? 'color-primary' : '']"></i>
                            <i :class="['fas fa-star', item.classification >= 5 ? 'color-primary' : '']"></i>
                            <span class="progresso-total ml-3">({{item.total}})</span>
                            <div class="text-left mt-4">
                                <v-btn class="btn" v-if="item.top" x-small tile text>Classificação Mais Alta</v-btn>
                            </div>
                      </div>
                      
                  </div>
                </v-row>
                    </v-col>
                    <v-col cols="4">
                        <v-card 
                            tile 
                            class="mt-12 ml-10" 
                            width="400">
                                    <v-img
                                    height="200px"
                                    src="../../assets/background_card_01.jpg"
                                    >
                                    </v-img>
                                    <v-card-title>Informações:</v-card-title>
                                    <v-card-text 
                                    style="word-break: break-word">
                                    <div>Alunos: {{item.students}}</div>
                                    <div>Idiomas: {{item.language}}</div>
                                    <div>Legendas: {{item.subtitle}}</div>
                                    <div>Aulas: {{item.classes}}</div>
                                    <div>Video: {{item.media}}</div>
                                    <div class="text-center">
                                        <v-btn 
                                        depressed 
                                        color="primary black--text mt-5 "
                                        >Inscreva-se</v-btn>
                                    </div>
                                    </v-card-text>
                                </v-card>
                    </v-col>
                    
                </v-row>
                
                </v-card>

                <v-card 
                    fill-height
                    color="#fff"
                    width="100%"
                    height="318px"
                    outlined
                    class="mt-16"
                    tile>
                    <div class="mx-12">
                        <v-row>
                            <v-col cols="3">
                                <div>Descrição</div>
                            </v-col>
                            <v-col cols="9">
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                            </v-col>
                        </v-row>
                    </div>
                    <v-divider class="mt-10"></v-divider>
                    <div class="mx-12 mt-12">
                        <v-row>
                            <v-col cols="3">
                                <div>O que você aprenderá</div>
                            </v-col>
                            <v-col cols="9">
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                            </v-col>
                        </v-row>
                    </div>
                    </v-card>
        
  </v-main>
</template>

<script>
export default {
    data() {
        return {
            item: { 
                title: 'Entenda como organizar sua economia doméstica!', 
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
                classification: 3,
                total: 10,
                top: true,
                language: 'Português',
                classes: 3,
                subtitle: 'Não',
                media: 42,
                students: 900
            }
        }
    },
}
</script>

<style>
.progresso-classificacao{
    font-size: 1.3rem;
}

.btn{
    background-color: #00A6FF;
}

.progresso-total{
    color: #5A5A5A !important;
}


.border {
  border-bottom: 5px solid;
  border-bottom-color: #FFDA00;
}

</style>