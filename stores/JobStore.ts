import { defineStore } from "pinia";
import axios from "axios";
import {type JobModel} from "~/models/job-model"

export const useJobStore = defineStore("jobsStore", {
  state: () => ({
    jobs: [] as JobModel[],
  }),
  actions: {
    async getJobs(value: { keyword: string | null; location: string|null }) {
       try {
         const response = await axios.get("https://668b30950b61b8d23b08b20d.mockapi.io/jobs");
         this.jobs = response.data;
       } catch (err) {
         console.log(err);
       }
    },
  },
});
