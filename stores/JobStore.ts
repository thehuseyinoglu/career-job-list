import { defineStore } from "pinia";
import axios from "axios";
import { type JobModel } from "~/models/job-model";

export const useJobStore = defineStore("jobsStore", {
  state: () => ({
    jobs: [] as JobModel[],
    jobDetail:{} as JobModel,
    filteredJobs:[] as any
    
  }),
  actions: {
    async getJobs(value: { keyword: string | null; location: string | null }) {
      try {
        const response = await axios.get(
          "https://668b30950b61b8d23b08b20d.mockapi.io/jobs"
        );
        this.jobs = response.data;
        let filteredJobs = response.data;

    if (value.keyword !== null && value.keyword !== undefined && value.keyword !== "") {
      filteredJobs = filteredJobs.filter((job: any) => {
        return (
          job.title.toLowerCase().includes(value.keyword!.toLowerCase()) ||
          job.company.toLowerCase().includes(value.keyword!.toLowerCase())
        );
      });
    }
    if (value.location !== null && value.location !== undefined && value.location !== "") {
      filteredJobs = filteredJobs.filter((job: any) => {
        return (
          job.city_name.toLowerCase().includes(value.location!.toLowerCase()) ||
          job.country_name.toLowerCase().includes(value.location!.toLowerCase())
        );
      });
    }
    this.jobs = filteredJobs
      } catch (err) {
        console.log(err);
      }
    },

    async getJobDetails(id:number) {
      try {
        const response = await axios.get(
          `https://668b30950b61b8d23b08b20d.mockapi.io/jobs/${id}`
        );
        this.jobDetail = response.data;      } catch (error) {
        console.log(error);
      }
    },
  },
});
