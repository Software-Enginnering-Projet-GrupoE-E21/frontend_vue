<template>
  <v-container>
    <v-col class="py-6">
      <h2>Cadastro de Aluno</h2>
    </v-col>
    <v-col class="pb-0 pt-6">
      <v-row>
        <v-col>
          <v-text-field
            v-model="firstName"
            :rules="[rules.required]"
            dense
            placeholder="Nome"
            color="secondary"
            outlined
            type="text"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="lastName"
            :rules="[rules.required]"
            dense
            placeholder="Sobrenome"
            color="secondary"
            outlined
            type="text"
          />
        </v-col>
      </v-row>
      <v-text-field
        v-model="emailAddress"
        :rules="[rules.required, rules.validateEmail]"
        dense
        placeholder="E-mail"
        color="secondary"
        outlined
        type="email"
      />
      <v-text-field
        v-model="password"
        dense
        :rules="[rules.required, rules.validatePassword]"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        placeholder="Senha"
        color="secondary"
        outlined
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-row>
        <v-col>
          <v-text-field
            v-model="birthDate"
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
            v-model="document"
            :rules="[rules.required]"
            v-mask="'##.###.###-#'"
            dense
            placeholder="RG"
            color="secondary"
            outlined
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="inviteCode"
        :rules="[rules.required]"
        dense
        placeholder="Código de convite"
        color="secondary"
        outlined
        class="pb-0"
        type="text"
      ></v-text-field>
    </v-col>
    <v-col class="text-start mt-4">
      <v-btn
        depressed
        color="primary black--text mt-3 text-none"
        @click="submitForm"
        >Cadastrar</v-btn
      >
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
        <v-btn icon color="white" text v-bind="attrs" @click="error = ''"
          ><v-icon>mdi-close</v-icon></v-btn
        >
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
      error: "",
      showPassword: false,
      showPasswordConfirmation: false,
      firstName: null,
      lastName: null,
      emailAddress: null,
      password: null,
      birthDate: null,
      document: null,
      inviteCode: null,
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        validateEmail: (value) => this.validateEmail(value),
        validatePassword: (value) => this.validatePassword(value),
        validateBirthDate: (value) => this.validateBirthDate(value),
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    validateForm() {
      this.error = "";
      if (
        !this.firstName ||
        !this.lastName ||
        !this.emailAddress ||
        !this.password ||
        !this.birthDate ||
        !this.document ||
        !this.inviteCode
      ) {
        this.error = "Lembre-se de preencher todos os campos.";
        return;
      }

      if (this.validateEmail(this.emailAddress) === "E-mail inválido.") {
        this.error = "E-mail inválido.";
        return;
      }

      if (
        this.validatePassword(this.password) ===
        "A senha deve conter no mínimo 8 caractéres, uma letra maiúscula, uma minúscula, um número e um caractér especial."
      ) {
        this.error =
          "A senha deve conter no mínimo 8 caractéres, uma letra maiúscula, uma minúscula, um número e um caractér especial.";
        return;
      }

      if (
        this.validateBirthDate(this.birthDate) ===
        "Data de nascimento inválida."
      ) {
        this.error = "Data de nascimento inválida.";
        return;
      }

      return true;
    },
    validateBirthDate: (value) => {
      if (value) {
        const birthDateSplited = value.split("/");
        const formatedBirthDate = new Date(
          birthDateSplited[2],
          birthDateSplited[1],
          birthDateSplited[0]
        );

        return formatedBirthDate < new Date() || "Data de nascimento inválida.";
      }

      return true;
    },
    validateEmail: (value) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "E-mail inválido.";
    },
    validatePassword: (value) => {
      const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return (
        pattern.test(value) ||
        "A senha deve conter no mínimo 8 caractéres, uma letra maiúscula, uma minúscula, um número e um caractér especial."
      );
    },
    formatedBirthDate() {
      const birthDateSplited = this.birthDate.split("/");
      return `${birthDateSplited[2]}-${birthDateSplited[1]}-${birthDateSplited[0]}`;
    },
    formatedDocument() {
      return this.document.replace(/[^\w\s]/gi, "");
    },
    async submitForm() {
      if (this.validateForm()) {
        try {
          await this.register({
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            document: this.formatedDocument(),
            birthdate: this.formatedBirthDate(),
            password: this.password,
            inviteCode: this.inviteCode,
          });
          this.$router.push("/cursos");
        } catch (err) {
          if (
            ["Email address or document already in use"].includes(
              err.response.data.message[0]
            )
          )
            this.error = "Email ou documento já cadastrado na plataforma.";

          if (
            ["Organization is not allowed to register more users"].includes(
              err.response.data.message[0]
            )
          )
            this.error = "Código de convite inválido. Entre em contato com a organização para solicitar um novo código.";
        }

        setTimeout(() => (this.error = ""), 2500);
      }

      setTimeout(() => (this.error = ""), 2500);
    },
  },
};
</script>

<style></style>
