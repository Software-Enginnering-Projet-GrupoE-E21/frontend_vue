<template>
  <v-main class="main">
    <div class="header px-10 py-2">
      <v-app-bar color="primary" class="black--text" app outlined flat dark>
        <v-row>
          <v-col cols="12" class="text-end py-5">
            <v-btn
              depressed
              color="secondary"
              class="px-6"
              @click="$router.push('/login')"
              ><v-icon size="20" class="mr-2">far fa-user-circle</v-icon
              >Login</v-btn
            >
          </v-col>
        </v-row>
      </v-app-bar>
      <v-row>
        <v-col cols="4" class="py-0">
          <div class="bg-logo" @click="$router.push('/')"></div>
        </v-col>
        <v-col cols="7" align="center">
          <v-btn text color="secondary"
            ><a class="nav-link" href="#dineduc">DinEduc</a></v-btn
          >
          <v-btn text color="secondary"
            ><a class="nav-link" href="#classes">Aulas</a></v-btn
          >
          <v-btn text color="secondary"
            ><a class="nav-link" href="#schoolPartnership"
              >Parcerias Escolas</a
            ></v-btn
          >
          <v-btn text color="secondary"
            ><a class="nav-link" href="#volunteers">Voluntários</a></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
.main {
  height: 11rem;
}

.header {
  width: 100%;
  height: 60px;
}

.bg-logo {
  width: 100%;
  height: 70px;
  background: url("../../assets/DinEducLogo.png") left no-repeat;
  background-size: contain;
}

.nav-link {
  text-decoration: none;
  color: black !important;
}
</style>
