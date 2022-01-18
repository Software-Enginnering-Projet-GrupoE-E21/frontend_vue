<template>
  <v-footer padless :fixed="false" color="primary" class="pa-10 mt-0 bg-sac">
    <v-row>
      <v-col cols="3" class="text-left">
        <strong>#DinEduc</strong>
        <p class="caption mt-3 mb-6">
          O compromisso da DinEduc é instruir
          <br />e informar sobre finanças de forma <br />simples e direta para
          os jovens.
        </p>
      </v-col>
      <v-col cols="3">
        <div>
          <div class="mb-2"><strong>DinEduc</strong></div>
          <div class="mb-2"><strong>Aulas</strong></div>
          <div class="mb-2"><strong>Parcerias Escolas</strong></div>
          <div class="mb-2"><strong>Voluntários</strong></div>
        </div>
      </v-col>
      <v-col cols="6">
        <strong>#NewsLetter</strong>
        <p class="caption mt-0">Receba novidades no seu e-mail</p>
        <div class="d-flex">
          <div class="mr-3 width-50">
            <v-text-field
              class="white"
              hide-details="hide"
              outlined
              placeholder="E-mail"
              dense
              color="secondary"
            />
          </div>
          <v-btn color="secondary">Assinar</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.width-50 {
  width: 50%;
}

.bg-sac {
  background: url("../../assets/DashboardSac.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: auto 95%;
}
</style>
