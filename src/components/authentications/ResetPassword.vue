<template>
  <v-container>
      <v-col class="py-6">
          <h2>Redefinir Senha</h2>
      </v-col>
      <v-col class="pb-0 pt-6" v-if="!confirmation">
          <v-text-field
            dense
            placeholder="Nova Senha"
            color="secondary"
            outlined
            prepend-inner-icon="fas fa-lock"
            type="password"
          ></v-text-field>
          <v-text-field
            dense
            placeholder="Repetir Nova Senha"
            color="secondary"
            outlined
            prepend-inner-icon="fas fa-lock"
            type="password"
          ></v-text-field>
          <v-btn
          color="secondary"
          class="my-3"
          width="100%"
          @click="confirmation = true">Redefinir Senha</v-btn>
      </v-col>
      <v-col v-else class="py-10">
        <v-icon class="px-1 py-0" x-large>far fa-envelope</v-icon>
        <div>
            <strong>Verifique a caixa de entrada do email informado e siga as instruções para redefinição de senha.</strong>
        </div>
        <v-btn
          color="secondary"
          class="my-5 px-6"
          @click="exit(); confirmation = false">Voltar</v-btn>
      </v-col>
  </v-container>
</template>

<script>

export default {
    props: {
        exit: Function
    },
    data() {
        return {
            confirmation: false
        }
    }
}

</script>

<style>

</style>