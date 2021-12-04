<template>
  <v-main>
    <Header />
    <router-view></router-view>
    <Footer />
  </v-main>
</template>

<script>
import Header from "@/components/communs/Header";
import Footer from "@/components/communs/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>