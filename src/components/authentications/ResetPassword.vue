<template>
  <v-container>
    <v-col class="py-6">
      <h2>Redefinir Senha</h2>
    </v-col>
    <v-col class="pb-0 pt-6" v-if="!confirmation">
      <v-text-field
      v-model="emailAddress"
        dense
        placeholder="Insira seu e-mail"
        :rules="[rules.required, rules.validateEmail]"
        color="secondary"
        outlined
        prepend-inner-icon="far fa-envelope"
        type="text"
      ></v-text-field>
      <v-btn
        color="secondary"
        class="my-3"
        width="100%"
        @click="sendEmail"
        >Redefinir Senha</v-btn
      >
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
          <v-btn icon color="white" text v-bind="attrs" @click="error = ''"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </template>
      </v-snackbar>
    </v-col>
    <v-col v-else class="py-10">
      <v-icon class="px-1 py-0" x-large>far fa-envelope</v-icon>
      <div>
        <strong
          >Verifique a caixa de entrada do email informado e siga as instruções
          para redefinição de senha.</strong
        >
      </div>
      <v-btn
        color="secondary"
        class="my-5 px-6"
        @click="
          exit();
          confirmation = false;
        "
        >Voltar</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    exit: Function,
  },
  data() {
    return {
      error: "",
      emailAddress: null,
      confirmation: false,
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        validateEmail: (value) => this.validateEmail(value),
      },
    };
  },
  methods: {
    validateEmail(value) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "E-mail inválido.";
    },
    validateForm() {
      this.error = "";
      if (!this.emailAddress) {
        this.error = "Lembre-se de preencher o campo.";
        return;
      }

      if (this.validateEmail(this.emailAddress) === "E-mail inválido.") {
        this.error = "E-mail inválido.";
        return;
      }

      return true;
    },
    sendEmail() {
      if (this.validateForm()) {
        this.confirmation = true;
      }

      setTimeout(() => (this.error = ""), 2500);
    },
  },
};
</script>

<style></style>
