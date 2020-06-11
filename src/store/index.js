import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import fbConfig from "../Firebase/FirebaseConfig";
// firestore
import "firebase/firestore";
const db = firebase.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobsList: [],
    jobDetails: [],
    searchTerm: "",
  },
  mutations: {
    setJobsList: (state, jobsList) => (state.jobsList = jobsList),
    setJobDetails: (state, jobDetails) => (state.jobDetails = jobDetails),
    setSearchTerm: (state, searchTerm) => (state.searchTerm = searchTerm),
  },
  getters: {
    getJobsList(state) {
      console.log(fbConfig);
      return state.jobsList;
    },
    getJobDetails(state) {
      return state.jobDetails;
    },
    getSearchTerm(state) {
      return state.searchTerm;
    },
  },
  actions: {
    async insertNewJobPost(state, payload) {
      console.log(payload);
    },
    // This function to load all jobs
    async loadJobsList(state) {
      let jobsPosts = [];
      const jobsPostsCollection = db.collection("jobsPosts");
      await jobsPostsCollection
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            jobsPosts.push({
              company: doc.data().company,
              id: doc.data().id,
              tags: doc.data().tags,
              position: doc.data().position,
              yearsOfExperience: doc.data().yearsOfExperience,
              location: doc.data().location,
              timePosted: doc.data().timePosted,
            });
          });
        })
        .catch((error) => console.log(error));
      state.commit("setJobsList", jobsPosts);
    },
    async getJobDetails(state, id) {
      const jobDetailsQuery = db
        .collection("jobsPosts")
        .where("id", "==", Number(id));
      await jobDetailsQuery
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            state.commit("setJobDetails", doc.data());
          });
        })
        .catch((error) => console.log(error));
    },
    async searchJobs(state, searchTerm) {
      let jobsList = [];
      const jobsListCollection = db
        .collection("jobsPosts")
        .where("tags", "array-contains", searchTerm);
      await jobsListCollection
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            jobsList.push({
              company: doc.data().company,
              id: doc.data().id,
              tags: doc.data().tags,
              position: doc.data().position,
            });
          });
          state.commit("setJobsList", jobsList);
        })
        .catch((error) => console.log(error));
    },
    updateSearchTerm(state, searchTerm) {
      state.commit("setSearchTerm", searchTerm);
    },
  },
  modules: {},
});
