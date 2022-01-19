<template>
  <v-main>
    <div class="ml-10 pl-3">
      <h2 style="color: #000" class="mt-0 pa-0">Cursos disponíveis</h2>
      <div class="mt-0 mb-6">
        <span class="separetor-01"></span><span class="separetor-02"></span>
      </div>
    </div>
    <div class="mx-12 my-12">
      <v-row :align="'start'">
        <v-col v-for="(item, index) in courses" :key="index" cols="4">
          <v-card
            height="100%"
            width="100%"
            min-height="430px"
            outlined
            tile
            class="text-center"
            color="#F6F6F6"
          >
            <div class="border">
              <v-img
                :src="`http://20.45.41.19/${item.banner.url}`"
                :lazy-src="`http://20.45.41.19/${item.banner.url}`"
                class="grey lighten-2 pa-0 ma-0"
                height="100%"
                width="100%"
              >
                <div class="play">
                  <v-btn
                    elevation="2"
                    icon
                    plain
                    x-large
                    class="play-buttom"
                    fab
                    @click='$router.push(`/cursos/conteudo/${item.id}`)'
                  >
                    <i class="fas fa-play"></i>
                  </v-btn>
                </div>
              </v-img>
            </div>
            <div class="mx-0 mt-3 text-left">
              <v-card-title
                style="word-break: break-word"
                class="cardTitle"
                v-html="item.title"
              ></v-card-title>
              <v-card-text style="word-break: break-word">
                <div class="cardContent">{{ item.description }}</div>
                <div class="text-end">
                  <v-btn @click='$router.push(`/cursos/conteudo/${item.id}`)' depressed color="primary black--text mt-5"
                    >Começar</v-btn
                  >
                </div>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  beforeMount() {
    const token = window.localStorage.getItem('userToken');
    this.$store.dispatch("listCourses", token);
  },
  computed: {
    ...mapState(["courses"]),
  },
};
</script>

<style>
.play-buttom {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: rgba(207, 207, 196, 0.5);
}

.play-buttom i {
  font-size: 1.5rem;
  color: white;
}

.play {
  width: 100%;
  z-index: 1000;
  height: 100%;
  position: relative;
  background-color: rgba(128, 128, 128, 0.5);
}

.cardTitle {
  min-height: 65px;
  max-height: 65px;
  font-size: 1rem !important;
  line-height: 1rem !important;
}
.cardContent {
  min-height: 30px;
  max-height: 30px;
}
.separetor-01 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #4a1e75;
}

.separetor-02 {
  font-size: 3px;
  padding: 0 20px;
  height: 900px;
  width: 900px;
  background-color: #ffda00;
}

.progresso-classificacao {
  font-size: 1.3rem;
}

.progresso-total {
  color: #5a5a5a !important;
}

.border {
  border-bottom: 5px solid;
  border-bottom-color: #ffda00;
}
</style>
