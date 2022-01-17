<template>
  <v-main>
    <div class="bg-secondary">
        <h1 class="mr-10">Meus Cursos</h1>
        <v-row class="mt-3">
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn 
                    v-bind="attrs"
                    v-on="on"
                    color="white"
                    text>
                    Meu Aprendizado
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in itemsAprendizado"
                    :key="index"
                >
                <v-list-item-title>
                    <v-btn
                        :href="item.href" 
                        text 
                        color="secondary">{{ item.title }}</v-btn>
                </v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            <v-btn 
                text
                color="white"
                href="/cursos/pesquisa"
            >Conteúdo</v-btn>
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn 
                    v-bind="attrs"
                    v-on="on"
                    color="white"
                    text>
                    Comunidade
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in itemsComunidade"
                    :key="index"
                >
                <v-list-item-title>
                    <v-btn 
                        :href="item.href" 
                        text 
                        color="secondary">{{ item.title }}</v-btn>
                </v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </v-row>
    </div>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
      itemsAprendizado: [
        { title: 'Meus Cursos', href: '/cursos' },
        { title: 'Minhas Atividades', href: '/cursos/atividades' }
      ],
      itemsComunidade: [
        { title: 'Fórum', href: '/cursos' },
        { title: 'Minhas Interações', href: '/cursos' },
        { title: 'Ranking', href: '/cursos/ranking' }
      ],
    })
};
</script>

<style>
.bg-secondary{
    background-color: #4a1e75;
    width: 100%;
    color: #fff;
    padding-top: 20px;
    padding-left: 50px;
}
</style>