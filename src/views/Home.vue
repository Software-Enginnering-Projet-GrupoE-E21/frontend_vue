<template>
  <v-main>
    <Header/>
    <v-container class="py-0">
      <router-view></router-view>
    </v-container>
    <Footer/>
  </v-main>
</template>

<script>
import Header from '@/components/communs/Header'
import Footer from '@/components/communs/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>