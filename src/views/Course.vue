<template>
  <v-main>
    <v-app-bar color="primary" class="black--text" app outlined flat dark>
      <v-row>
        <v-col cols="12" class="text-end py-5">
          <v-btn
            depressed
            color="secondary"
            class="px-6"
            @click="userLogout"
            ><v-icon size="20" class="mr-2">far fa-user-circle</v-icon
            >Sair</v-btn
          >
        </v-col>
      </v-row>
    </v-app-bar>
    <div class="bg-secondary">
      <h1 class="mr-10">Meus Cursos</h1>
      <v-row class="mt-3">
        <v-btn text color="white" href="/cursos">Conteúdo</v-btn>
      </v-row>
    </div>
    <router-view></router-view>
    <Footer />
  </v-main>
</template>

<script>
import { mapActions } from "vuex";

import Footer from "@/components/communs/Footer";
export default {
  components: {
    Footer,
  },
  data: () => ({
    learningItems: [
      { title: "Meus Cursos", href: "/cursos" },
      { title: "Minhas Atividades", href: "/cursos/atividades" },
    ],
  }),
  methods: {
    ...mapActions(["logout"]),
    userLogout(){
      this.logout()
      this.$router.push('/');
    }
  }
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
