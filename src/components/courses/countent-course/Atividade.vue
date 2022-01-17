<template>
    <v-main class="py-0 px-2">
        <v-progress-linear :value="((data.pergunta / data.totalPerguntas) * 100)" height="20px" background-color="#949494"></v-progress-linear>
        
        <div class="px-10 pt-10">
            <h3>{{data.pergunta}}. {{data.tituloPergunta}}</h3>
            <div class="d-flex align-center">
                <div class="py-4 mr-6">
                    <v-img
                        src="../../../assets/q.png"
                        height="auto"
                        width="5.5rem"
                    ></v-img>
                </div>
                <div class="card-pergunta">
                    <p>{{data.descricaoPergunta}}</p>
                </div>
            </div>
        </div>

        <div class="linha-divisao"></div>

        <div class="my-10 px-10">
            <v-radio-group v-model="radioGroup">
                <v-radio
                    v-for="n in data.alternativas"
                    :key="n"
                    :label="n.descricao"
                    :value="n.id"
                ></v-radio>
            </v-radio-group>
        </div>
        
        <div class="d-flex" v-if="!validarResposta.showValid">
            <v-btn color="#969FAA" depressed width="160px" @click="send()">Pular</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="#2EA400" depressed width="160px" @click="send(radioGroup)">Verificar</v-btn>
        </div>

        <div v-else>
            <v-alert
                text
                prominent
                :type="validarResposta.tipo"
            >
                <v-row align="center">
                    <v-col class="pl-5" v-if="validarResposta.alternativaCorreta">
                        Resposta Correta: <br>
                        Alternativa {{validarResposta.alternativaCorreta}}
                    </v-col>
                    <v-col class="pl-5" v-else>
                        Exelente! <br>
                        Resposta Correta.
                    </v-col>
                    
                    <v-col class="shrink">
                        <v-btn :color="validarResposta.tipo" depressed>Continuar</v-btn>
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
        validarResposta: Object,
        send: Function
    },
    data() {
        return {
            radioGroup: null
        }
    },
}
</script>

<style>
.linha-divisao {
    height: 10px;
    background-color: #CFCFCF;
}
.card-pergunta {
    width: 100%;
    padding: 5px 20px;
    border: 1px solid #CFCFCF;
    border-radius: 6px;
}
</style>