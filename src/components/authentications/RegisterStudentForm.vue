<template>
  <v-container>
    <v-col class="py-6">
      <h2>Cadastro de Aluno</h2>
    </v-col>
    <v-col class="pb-0 pt-6">
      <v-text-field
        v-model="formData.userName"
        dense
        placeholder="Nome Completo"
        color="secondary"
        outlined
        type="text"
      />
      <v-text-field
        v-model="formData.userEmail"
        dense
        placeholder="E-mail"
        color="secondary"
        outlined
        type="email"
      />
      <v-text-field
        v-model="formData.userEmailConfirmation"
        dense
        placeholder="Confirmar E-mail"
        color="secondary"
        outlined
        type="email"
      ></v-text-field>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.userPassword"
            dense
            placeholder="Senha"
            color="secondary"
            outlined
            class="pb-0"
            single-line
            hide-details="hide"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.userPasswordconfirmation"
            dense
            placeholder="Confirmar Senha"
            color="secondary"
            outlined
            class="pb-0"
            single-line
            hide-details="hide"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.userBirthDate"
            dense
            placeholder="Data de Nascimento"
            color="secondary"
            outlined
            class="pb-0"
            single-line
            hide-details="hide"
            type="text"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.userCpf"
            dense
            placeholder="CPF"
            color="secondary"
            outlined
            class="pb-0"
            single-line
            hide-details="hide"
            type="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-radio-group v-model="formData.userGender" row>
        <v-radio color="secondary" label="Feminino" value="famale"></v-radio>
        <v-radio color="secondary" label="Masculino" value="male"></v-radio>
        <v-radio color="secondary" label="Outro" value="other"></v-radio>
      </v-radio-group>

      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            dense
            single-line
            class="pb-0"
            color="secondary"
            :items="states"
            label="Estado"
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            dense
            single-line
            color="secondary"
            :items="cities"
            label="Cidade"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <div class="text-start">
        <a @click="select">Termos de uso</a>
        <v-checkbox
          v-model="formData.userAcceptedTerms"
          label="Concordo com os Termos"
          color="secondary"
          class="mt-1"
          value="termsAgreement"
          hide-details
        ></v-checkbox>
      </div>
    </v-col>
    <v-col class="text-start mt-4">
      <v-btn
        depressed
        color="primary black--text mt-3 text-none"
        @click="register"
        >Cadastrar</v-btn
      >
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    select: Function,
  },
  data() {
    return {
      cities: ["São Paulo", "Campinas", "Itu", "Cotia"],
      states: ["SP"],
      formData: {
        userName: null,
        userEmail: null,
        userEmailConfirmation: null,
        userPassword: null,
        userPasswordconfirmation: null,
        userBirthDate: null,
        userCpf: null,
        userGender: null,
        userAcceptedTerms: false,
      },
    };
  },
  methods: {
    register() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>