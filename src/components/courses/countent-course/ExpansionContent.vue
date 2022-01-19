<template>
  <v-main class="pa-0">
    <div class="titulo-conteudo px-5 py-3">
      <h3 @click="selected(null)">Conteúdo do Curso</h3>
    </div>
    <v-expansion-panels v-model="painel" multiple accordion outline flat tile>
      <v-expansion-panel
        v-for="(item, i) in list.lessons"
        :key="i"
      >
        <v-expansion-panel-header color="#CFCFCF">
          <strong>Seção {{ i + 1 }}: {{ item.title }}</strong>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div  @click="selected(item)" class="d-flex align-center conteudo-selecionado">
            <div class="mt-4">
              {{ i + 1 }}.
              {{ item.title }}
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel v-if="list.tests">
        <v-expansion-panel-header color="#CFCFCF">
          <strong>{{ list.tests.title }}</strong>
        </v-expansion-panel-header>
        <v-expansion-panel-content
          v-for="(item, i) in list.tests.questions"
          :key="i"
        >
          <div @click="selectedActivity(item)" class="d-flex align-center conteudo-selecionado">
            <div class="my-4 py-0">
              Atividade
              {{ i + 1 }}
            </div>
          </div>
          <v-divider></v-divider>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script>
export default {
  props: {
    list: Object,
    selected: Function,
    selectedActivity: Function,
  },
  data() {
    return {
      painel: [],
    };
  },
  mounted() {
    this.expand();
  },
  methods: {
    expand() {
      this.painel = [0, 1, 2, 3, 4, 5];
    },
  },
};
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
.section-title {
  top: 1px;
}
</style>
