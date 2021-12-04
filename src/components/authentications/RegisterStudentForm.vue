<template>
  <v-container>
    <v-col class="py-6">
      <h2>Cadastro de Aluno</h2>
    </v-col>
    <v-col class="pb-0 pt-6">
      <v-text-field
        v-model="formData.userEmail"
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
        v-model="formData.userEmail"
        dense
        placeholder="Confirmar E-mail"
        color="secondary"
        outlined
        type="email"
      ></v-text-field>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.password"
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
            v-model="formData.password"
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
            v-model="formData.password"
            dense
            placeholder="Data de Nascimento"
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
            v-model="formData.password"
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
      <v-radio-group v-model="row" row>
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
            :items="items"
            label="Estado"
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            dense
            single-line
            :items="items"
            label="Cidade"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <div class="text-start">
        <a @click="select">Termos de uso</a>
        <v-checkbox
          v-model="ex4"
          label="Concordo com os Termos"
          color="secondary"
          value="termsAgreement"
          hide-details
        ></v-checkbox>
      </div>
    </v-col>
    <v-col class="text-start mt-4">
      <v-btn color="primary" @click="Logar">Cadastrar</v-btn>
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
      formData: {
        userEmail: null,
        password: null,
      },
    };
  },
  methods: {
    SendFacebook() {
      this.formData.userEmail = "douglas.almeida@gmail.com";
      this.formData.password = "@Doug1234";
    },
    Logar() {
      this.formData.userEmail = null;
      this.formData.password = null;
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>