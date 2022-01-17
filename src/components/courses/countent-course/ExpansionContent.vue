<template>
    <v-main class="pa-0">
        <div class="titulo-conteudo px-5 py-3">
            <h3>Conteúdo do Curso</h3>
        </div>
        <v-expansion-panels 
            v-model="painel"
            multiple
            accordion 
            outline 
            flat 
            tile
        >
            <v-expansion-panel
                v-for="(item, i) in list"
                :key="i" 
            >
                <v-expansion-panel-header color="#CFCFCF">
                    <strong>Seção {{i+1}}: {{item.nomeSecao}}</strong>
                </v-expansion-panel-header>
                <v-expansion-panel-content 
                    v-for="(conteudo, i) in item.conteudo" :key="i" 
                    :color="conteudo.iniciado && !conteudo.finalizado ? '#D1AFFF' : ''"
                >
                    <div @click="selected(conteudo)" class="conteudo-selecionado">
                        <v-checkbox v-model="conteudo.finalizado" color="secondary" dense>
                            <template v-slot:label>
                                <div class="d-flex">
                                    {{i+1}}.
                                    <v-img
                                        v-if="conteudo.atividade"
                                        src="../../../assets/crowns.png"
                                        height="1.2rem"
                                        width="1.5rem"
                                        class="mx-1"
                                    ></v-img>
                                    {{conteudo.nomeAula}}
                                </div>
                            </template>
                        </v-checkbox>
                        <div class="tempo-duracao">
                            <v-icon x-small v-if="conteudo.atividade">fas fa-question-circle</v-icon>
                            <v-icon x-small v-else>fas fa-play-circle</v-icon>
                            {{conteudo.duracao}}{{conteudo.atividade ? 'perguntas' : 'm'}}
                        </div>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        
    </v-main>
</template>

<script>
export default {
    props : {
        list: Array,
        selected: Function
    },
    data() {
        return {
            painel: []
        }
    },
    mounted() {
        console.log(this.list)
        this.ExpandirAulasExecutadas() 
    },
    methods: {
        ExpandirAulasExecutadas() {
            this.painel = [0, 1]
        },
    },
}
</script>

<style>
.titulo-conteudo {
    background-color: #feda00;
}
.tempo-duracao {
    margin-top: -20px !important;
    padding-left: 32px;
    font-size: 13px;
    font-family: Lato;
    color: #949494;
}
.conteudo-selecionado {
    cursor: pointer;
}
</style>