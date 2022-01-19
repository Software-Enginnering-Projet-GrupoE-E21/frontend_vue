<template>
  <v-main class="py-0 pr-10">
    <v-img
      v-if="course.banner"
      :src="`http://20.45.41.19/${course.banner.url}`"
      :lazy-src="`http://20.45.41.19/${course.banner.url}`"
      class="grey lighten-2 mb-5"
      height="100px"
      width="100%"
    />
    <div class="pr-15 mb-5">
      <h3>Sobre este curso</h3>
    </div>

    <v-divider></v-divider>

    <div class="d-flex my-5">
      <strong class="mr-10">Informações</strong>
      <div>
        <div v-if="course.lessons">Quantidade de seções: {{ course.lessons.length }}</div>
        <div v-if="course.tests">Quantidade de atividades: {{ course.tests.questions.length }}</div>
        <div>
          Data de publicação do curso: {{ formatDate(course.published_at) }}
        </div>
        <div>Idiomas: Português</div>
      </div>
    </div>

    <v-divider></v-divider>

    <div class="d-flex my-5">
      <strong class="mr-10">Descrição</strong>
      <div class="pr-15">
        <p>
          {{ course.description }}
        </p>
      </div>
    </div>
    <v-divider></v-divider>
  </v-main>
</template>

<script>
export default {
  props: ["course"],
  methods: {
    formatDate(date) {
      const parsedDate = new Date(date);
      var options = { year: "numeric", month: "long", day: "numeric" };

      return parsedDate.toLocaleString("pt-BR", options);
    },
  },
};
</script>

<style>
.especialidade {
  font-size: 13px;
}
</style>
