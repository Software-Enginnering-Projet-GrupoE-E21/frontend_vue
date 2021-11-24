<template>
  <v-main class="main">
      <div class="header px-10 py-2">
          <v-app-bar
            color="primary"
            class="black--text"
            app
            outlined
            flat
            dark>
            <v-row>
              <v-col cols="6" class="py-4">
                  <span class="mr-6">Siga-nos nas redes sociais</span>
                  <v-btn icon color="secundary"><v-icon class="black--text">fab fa-youtube</v-icon></v-btn>
                  <v-btn icon color="secundary"><v-icon class="black--text">fab fa-twitter</v-icon></v-btn>
                  <v-btn icon color="secundary"><v-icon class="black--text">fab fa-facebook</v-icon></v-btn>
                  <v-btn icon color="secundary"><v-icon class="black--text">fab fa-instagram</v-icon></v-btn>
              </v-col>
              <v-col cols="6" class="text-end py-5">
                    <span>Central de Ajuda</span>
                    <span class="mx-4">|</span>
                    <span class="mr-12">Contato</span>
                  <v-btn
                    depressed 
                    color="secondary"
                    class="px-6"
                    @click="$router.push('/login')"
                    ><v-icon size="20" class="mr-2">far fa-user-circle</v-icon>Login</v-btn>
              </v-col>
          </v-row>
          </v-app-bar>
          <v-row class="">
              <v-col cols="3" class="py-0">
                <div class="bg-logo"></div>
              </v-col>
              <v-col cols="6" class="pt-4" align="center"> 
                    <v-btn text color="secondary">DinEduc</v-btn>
                    <v-btn text color="secondary">Aulas</v-btn>
                    <v-btn text color="secondary">Voluntários</v-btn>
                    <v-btn text color="secondary">Parcerias Escolas</v-btn>
                    <v-btn text color="secondary">Blog</v-btn>
              </v-col>
              <v-col cols="3" class="pt-0 pl-10">
                  <v-text-field 
                  outlined
                  append-icon="mdi-magnify"
                  placeholder="Pesquisar aqui"></v-text-field>
              </v-col>
            </v-row>
      </div>
  </v-main>
</template>

<script>
export default {

}
</script>

<style>
.main {
  height: 13rem;
}

.header{
    width: 100%;
    height: 60px
}

.bg-logo{
  width: 100%;
  height: 70px;
  background: url('../../assets/DinEducLogo.png') left no-repeat;
  background-size: contain;
}
</style>