<template>
  <v-container>
    <v-col class="py-6">
      <h2>Entrar no DinEduc</h2>
    </v-col>
    <v-col class="pb-0 pt-6">
      <v-text-field
        v-model="formData.username"
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
      <v-btn color="secondary" width="100%" @click="submitForm">Entrar</v-btn>
    </v-col>
    <v-col>
      <strong>Ainda não é cadastrado?</strong>
      <a class="px-2" @click="$router.push('/cadastro')">Crie uma conta</a>
    </v-col>
    <v-snackbar
      :timeout="2500"
      :value="!!error"
      absolute
      bottom
      left
      tile
      color="red accent-2"
    >
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" text v-bind="attrs" @click="error = ''"><v-icon>mdi-close</v-icon></v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    select: Function,
  },
  data() {
    return {
      formData: {
        username: null,
        password: null,
      },
      error: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submitForm() {
      try {
        await this.login({
          username: this.formData.username,
          password: this.formData.password,
        });
        this.$router.push("/cursos");
      } catch (err) {
        if (
          ["Username or password is invalid"].includes(
            err.response.data.description
          )
        )
          this.error = "Usuário/senha incorreto";

        if (
          [
            "username - must be a well-formed email address",
            "username - deve ser um endereço de e-mail bem formado",
          ].includes(err.response.data.message[0])
        )
          this.error = "Insira um email válido.";
      }

      setTimeout(() => this.error="", 2500);
    },
  },
};
</script>

<style></style>
