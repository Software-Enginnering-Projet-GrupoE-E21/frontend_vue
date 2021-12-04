<template>
  <v-main>
    <Header />
    <v-container class="py-0 mb-12">
      <v-card class="pa-10 text-center" fill-height tile>
        <v-row>
          <v-col cols="5">
            <div class="bg-register"></div>
          </v-col>
          <v-col cols="7"> 
            <div v-show="sigInShow">
              <RegisterStudentForm :select="() => (sigInShow = false)" />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <Footer />
  </v-main>
</template>

<script>
import Header from "@/components/communs/Header";
import Footer from "@/components/communs/Footer";
import RegisterStudentForm from "@/components/authentications/RegisterStudentForm";

export default {
  components: {
    Header,
    RegisterStudentForm,
    Footer,
  },
  data() {
    return {
      sigInShow: true,
    };
  },
};
</script>

<style scoped>
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