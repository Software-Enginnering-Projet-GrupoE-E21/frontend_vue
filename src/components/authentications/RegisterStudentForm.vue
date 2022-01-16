<template>
  <v-container>
    <v-col class="py-6">
      <h2>Cadastro de Aluno</h2>
    </v-col>
    <v-col class="pb-0 pt-6">
      <v-text-field
        v-model="formData.userName"
        :rules="[rules.required]"
        dense
        placeholder="Nome Completo"
        color="secondary"
        outlined
        type="text"
      />
      <v-text-field
        v-model="formData.userEmail"
        :rules="[rules.required, rules.email]"
        dense
        placeholder="E-mail"
        color="secondary"
        outlined
        type="email"
      />
      <v-row>
        <v-col class="pb-0">
          <v-text-field
            v-model="formData.userPassword"
            dense
            :rules="[rules.required, rules.passwordMinCharacters]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            placeholder="Senha"
            color="secondary"
            outlined
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-col>
        <v-col class="pb-0">
          <v-text-field
            v-model="formData.userPasswordconfirmation"
            dense
            :rules="[
              rules.required,
              rules.passwordMinCharacters,
              rules.validatePasswordConfirmation,
            ]"
            :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
            placeholder="Confirmar Senha"
            color="secondary"
            outlined
            :type="showPasswordConfirmation ? 'text' : 'password'"
            @click:append="showPasswordConfirmation = !showPasswordConfirmation"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.userBirthDate"
            :rules="[rules.required, rules.validateBirthDate]"
            v-mask="'##/##/####'"
            dense
            placeholder="Data de Nascimento"
            color="secondary"
            outlined
            type="text"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="formData.userCpf"
            :rules="[rules.required]"
            :mask="['###.###.###-##']"
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
            @change="getCities"
            v-model="formData.userState"
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
            v-model="formData.userCity"
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
import { mapState } from 'vuex';

export default {
  props: {
    select: Function,
  },
  beforeMount(){
    this.$store.dispatch('getRegisterFormStates');
  },
  computed: {
    ...mapState(['states', 'cities']),
  },
  data() {
    return {
      showPassword: false,
      showPasswordConfirmation: false,
      formData: {
        userName: null,
        userEmail: null,
        userPassword: null,
        userPasswordconfirmation: null,
        userBirthDate: null,
        userCpf: null,
        userGender: null,
        userAcceptedTerms: false,
        userState: '',
        userCity: '',
      },
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "E-mail inválido.";
        },
        passwordMinCharacters: (value) => {
          if (value) {
            return (
              value.length >= 8 ||
              "A senha deve conter pelo menos 8 caractéres."
            );
          }

          return true;
        },
        validatePasswordConfirmation: (value) =>
          value === this.formData.userPassword ||
          "As senhas precisam ser idênticas.",
        validateBirthDate: (value) => {
          if (value) {
            const birthDateSplited = value.split("/");
            const formatedBirthDate = new Date(
              birthDateSplited[2],
              birthDateSplited[1] - 1,
              birthDateSplited[0]
            );

            return (
              formatedBirthDate < new Date() || "Data de nascimento inválida."
            );
          }

          return true;
        },
      },
    };
  },
  methods: {
    getCities(){
      this.$store.dispatch('getRegisterFormCities', this.formData.userState);
    },
    register() {
      console.log("oi");
    },
  },
};
</script>

<style>
</style>