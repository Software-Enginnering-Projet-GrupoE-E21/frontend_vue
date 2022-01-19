import { coursesService } from "../services/courses.service";

export default {
  state: {
    course: {},
    courses: [],
  },
  mutations: {
    SET_COURSES(state, { courses }) {
      state.courses = courses;
    },
    SET_COURSE(state, { course }) {
      state.course = course;
    },
  },
  actions: {
    async listCourses({ commit }, userToken) {
      const courses = await coursesService.listCourses(userToken);
      commit("SET_COURSES", { courses });

      return courses;
    },
    async listCourseById({ commit }, { userToken, courseId }) {
      const course = await coursesService.listCourseById(userToken, courseId);
      commit("SET_COURSE", { course });

      return course;
    },
  },
};
