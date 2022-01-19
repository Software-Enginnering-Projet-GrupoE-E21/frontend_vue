<template>
  <main class="mt-8 ml-10 pl-3 mr-10 mb-12">
    <div class="">
      <h2 style="color: #000" class="mt-0 pa-0">
        {{ course.title }}
      </h2>
      <div class="mt-0 mb-6">
        <span class="separetor-01"></span><span class="separetor-02"></span>
      </div>
    </div>

    <div>
      <v-row>
        <v-col cols="12" class=""> </v-col>

        <v-col cols="7" class="px-0">
          <div v-if="currentActivity">
            <Activity
              :data="currentActivity"
              :validarResposta="validarResposta"
              :send="(item) => send(item)"
            />
          </div>
          <div v-else-if="currentContent" class="pr-10">
            <Video
              :data="currentContent.video"
              :poster="currentContent.banner.url"
              v-if="currentContent.video"
            />
            <div class="pt-10 pr-15 mb-5">
              <h3>{{ currentContent.title }}</h3>
            </div>

            <v-divider></v-divider>

            <div class="d-flex my-5">
              <strong class="mr-10">Descrição</strong>
              <div class="pr-15">
                <p>
                  {{ currentContent.description }}
                </p>
              </div>
            </div>
            <v-divider></v-divider>

            <div class="d-flex my-5">
              <strong class="mr-10">Conteúdo</strong>
              <div class="pr-15">
                <p v-html="currentContent.content" />
              </div>
            </div>
            <v-divider></v-divider>
          </div>

          <div v-else>
            <div>
              <VisaoGeral :course="course" />
            </div>
          </div>
        </v-col>

        <v-col cols="5" class="px-0">
          <ExpansionContent
            :list="course"
            :selected="(item) => selected(item)"
            :selectedActivity="(item) => selectedActivity(item)"
          />
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Video from "@/components/communs/Video";
import ExpansionContent from "@/components/courses/countent-course/ExpansionContent";
import VisaoGeral from "@/components/courses/countent-course/VisaoGeral";
import Activity from "@/components/courses/countent-course/Activity";
export default {
  components: {
    Video,
    ExpansionContent,
    VisaoGeral,
    Activity,
  },
  beforeMount() {
    if (this.$route && this.$route.params) {
      const userToken = window.localStorage.getItem("userToken");
      const courseId = this.$route.params.id;
      this.$store.dispatch("listCourseById", { userToken, courseId });
    }
  },
  computed: {
    ...mapState(["course"]),
  },
  data() {
    return {
      tab: null,
      currentContent: null,
      currentActivity: null,
      validarResposta: {
        showValid: false,
        tipo: "success",
        alternativaCorreta: null,
      },
    };
  },
  methods: {
    selected(item) {
      this.currentActivity = null;
      this.currentContent = item;
    },
    selectedActivity(item) {
      this.$emit('switchActivity')
      this.currentActivity = item;
    },
  },
};
</script>

<style></style>
