<template>
  <v-container class="mt-8">
    <div class="ml-10 pl-3">
        <h2 style="color: #000" class="mt-0 pa-0">Entenda a importância da educação financeira desde cedo</h2>
        <div class="mt-0 mb-6"><span class="separetor-01"></span><span class="separetor-02"></span></div>
    </div>

    <div>
        <v-row>
            <v-col cols="12" class="">
                
            </v-col>

            <v-col cols="7" class="px-0">
                <div v-if="showAtividade">
                    <Atividade :data="dadosAtividade" :validarResposta="validarResposta" :send="(item) => send(item)"/>
                </div>

                <div v-else>
                    <Video/>
                    <div class="my-3">
                        <v-tabs v-model="tab" centered color="black">
                            <v-tab>Visão Geral</v-tab>
                            <v-tab>Perguntas e Respostas</v-tab>
                            <v-tab>Caderno</v-tab>
                            <v-tab>Recursos</v-tab>
                        </v-tabs>

                        <v-divider></v-divider>

                        <v-tabs-items v-model="tab">
                            <v-tab-item :tab="tab"> 
                                <VisaoGeral/>
                            </v-tab-item>
                            <v-tab-item :tab="tab"> teste 2 </v-tab-item>
                            <v-tab-item :tab="tab"> teste 3 </v-tab-item>
                            <v-tab-item :tab="tab"> teste 4 </v-tab-item>
                        </v-tabs-items>
                    </div>
                </div>
            </v-col>

            <v-col cols="5" class="px-0">
                <ExpansionContent :list="conteudoCurso" :selected="(item) => selected(item)"/>
            </v-col>
        </v-row>
    </div>

  </v-container>
</template>

<script>
import Video from '@/components/communs/Video'
import ExpansionContent from '@/components/courses/countent-course/ExpansionContent'
import VisaoGeral from '@/components/courses/countent-course/VisaoGeral'
import Atividade from '@/components/courses/countent-course/Atividade'
export default {
    components: {
        Video,
        ExpansionContent,
        VisaoGeral,
        Atividade
    },
    data() {
        return {
            tab: null,
            showAtividade: false,
            conteudoCurso: [
                {
                    id: 1,
                    secao: 1,
                    nomeSecao: "Apresentação",
                    conteudo: [
                        {
                            id: 1,
                            nomeAula: "Apresentação Professor",
                            duracao: 2,
                            atividade: false,
                            iniciado: true,
                            finalizado: true,
                        },
                        {
                            id: 2,
                            nomeAula: "Dinamica das Aulas",
                            duracao: 2,
                            atividade: false,
                            iniciado: true,
                            finalizado: true
                        }
                    ]
                },
                {
                    id: 2,
                    secao: 1,
                    nomeSecao: "Apresentação",
                    conteudo: [
                        {
                            id: 1,
                            nomeAula: "Apresentação Professor",
                            duracao: 2,
                            atividade: false,
                            iniciado: true,
                            finalizado: true
                        },
                        {
                            id: 2,
                            nomeAula: "Dinamica das Aulas",
                            duracao: 5,
                            atividade: true,
                            iniciado: true,
                            finalizado: false
                        }
                    ]
                },
                {
                    id: 3,
                    secao: 1,
                    nomeSecao: "Apresentação",
                    conteudo: [
                        {
                            id: 1,
                            nomeAula: "Apresentação Professor",
                            duracao: 2,
                            atividade: false,
                            iniciado: false,
                            finalizado: false
                        },
                        {
                            id: 2,
                            nomeAula: "Dinamica das Aulas",
                            duracao: 2,
                            atividade: false,
                            iniciado: false,
                            finalizado: false
                        }
                    ]
                },
                {
                    id: 4,
                    secao: 1,
                    nomeSecao: "Apresentação",
                    conteudo: [
                        {
                            id: 1,
                            nomeAula: "Apresentação Professor",
                            duracao: 2,
                            atividade: false,
                            iniciado: false,
                            finalizado: false
                        },
                        {
                            id: 2,
                            nomeAula: "Dinamica das Aulas",
                            duracao: 2,
                            atividade: false,
                            iniciado: false,
                            finalizado: false
                        }
                    ]
                }
            ],
            dadosAtividade: {
                pergunta: 1,
                totalPerguntas: 5,
                tituloPergunta: "Selecione a opção correta",
                descricaoPergunta: "Por que você deve economizar desde cedo?",
                alternativas: [
                    {
                        id: 1,
                        descricao: "A. Alternativa incorreta"
                    },
                    {
                        id: 2,
                        descricao: "B. Alternativa incorreta"
                    },
                    {
                        id: 3,
                        descricao: "C. Alternativa incorreta"
                    },
                    {
                        id: 4,
                        descricao: "D. Alternativa incorreta"
                    }
                ]
            },
            validarResposta: {
                showValid: false,
                tipo: 'success',
                alternativaCorreta: null
            }
        }
    },
    methods: {
        selected(item) {
            console.log(item)
            if (item.atividade == true) 
                this.showAtividade = true
        },
        send(item) {
            console.log(item)
            if (item) {
                if (item == 1) {
                    this.validarResposta.showValid = true
                } else {
                    this.validarResposta = {
                        showValid: true,
                        tipo: 'error',
                        alternativaCorreta: 'A'
                    }
                }
            }
        }
    },
}
</script>

<style>

</style>