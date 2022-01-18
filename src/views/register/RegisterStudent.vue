<template>
  <v-main>
    <v-app-bar color="primary" class="black--text" app outlined flat dark>
      <v-row>
        <v-col cols="4">
          <v-btn icon color="black" text @click="$router.push('/')"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          >
        </v-col>
        <v-col cols="8" class="text-end py-5">
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
    <v-container class="py-0 mt-6 mb-12">
      <v-card class="pa-10 text-center" fill-height tile>
        <v-row>
          <v-col cols="5">
            <div class="bg-register"></div>
          </v-col>
          <v-col cols="7">
            <div v-show="loginShow">
              <RegisterStudentForm :select="() => (loginShow = false)" />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <Footer />
  </v-main>
</template>

<script>
import Footer from "@/components/communs/Footer";
import RegisterStudentForm from "@/components/authentications/RegisterStudentForm";

export default {
  components: {
    RegisterStudentForm,
    Footer,
  },
  data() {
    return {
      loginShow: true,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 10rem;
}

.size-100 {
  width: 100%;
  height: 100%;
}

.bg-register {
  background: url("../../assets/RegisterStudentBackground.png") center no-repeat;
  background-size: contain;
  height: 100%;
}

.heigth-fixed {
  height: 38.5rem;
}
</style>
