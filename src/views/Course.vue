<template>
  <v-main>
  <v-app-bar color="primary" class="black--text" app outlined flat dark>
      <v-row>
        <v-col cols="12" class="text-end py-5">
          <v-btn
            depressed
            color="secondary"
            class="px-6"
            @click="$router.push('/')"
            ><v-icon size="20" class="mr-2">far fa-user-circle</v-icon
            >Sair</v-btn
          >
        </v-col>
      </v-row>
    </v-app-bar>
    <div class="bg-secondary">
      <h1 class="mr-10">Meus Cursos</h1>
      <v-row class="mt-3">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="white" text>
              Meu Aprendizado
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in learningItems" :key="index">
              <v-list-item-title>
                <v-btn :href="item.href" text color="secondary">{{
                  item.title
                }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text color="white" href="/cursos/pesquisa">Conteúdo</v-btn>
      </v-row>
    </div>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  components: {},
  data: () => ({
    learningItems: [
      { title: "Meus Cursos", href: "/cursos" },
      { title: "Minhas Atividades", href: "/cursos/atividades" },
    ]
  }),
};
</script>

<style>
.bg-secondary {
  background-color: #4a1e75;
  width: 100%;
  color: #fff;
  padding-top: 20px;
  padding-left: 50px;
}
</style>
