<template>
  <v-container>
      <v-col class="py-6">
          <h2>Entrar no DinEduc</h2>
      </v-col>
      <v-col class="pb-0 pt-6">
          <v-text-field
            v-model="formData.userEmail"
            dense
            placeholder="E-mail"
            color="secondary"
            prepend-inner-icon="far fa-envelope"
            outlined
            type="email"
          ></v-text-field>
          <v-text-field
            v-model="formData.password"
            dense
            placeholder="Senha"
            color="secondary"
            prepend-inner-icon="fas fa-lock"
            outlined
            class="pb-0"
            single-line
            hide-details="hide"
            type="password"
          ></v-text-field>
      </v-col>
      <v-col class="text-end pt-2">
          <a @click="select">Esqueceu sua senha</a>
      </v-col>
      <v-col>
          <v-btn
          color="secondary"
          width="100%"
          @click="Logar"
          >Entrar</v-btn>
      </v-col>
      <v-col>
        <div>
            <strong>Ou entre usando:</strong>
        </div>
        <v-btn @click="SendFacebook" class="mx-1" icon>
          <v-icon x-large color="blue">fab fa-facebook</v-icon>
        </v-btn>
        <v-btn  class="mx-1" icon>
          <v-icon x-large color="red">fab fa-google-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
            <strong>Ainda não é cadastrado?</strong>
            <a class="px-2" @click="$router.push('/')">Crie uma conta</a>
      </v-col>
  </v-container>
</template>

<script>
export default {
    props: {
      select: Function
    },
    data() {
      return {
        formData: {
          userEmail: null,
          password: null
        }
      }
    },
    methods: {
      SendFacebook() {
        this.formData.userEmail = 'douglas.almeida@gmail.com'
        this.formData.password = '@Doug1234'
      },
      Logar() {
        this.formData.userEmail = null
        this.formData.password = null
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>