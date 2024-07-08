import { defineStore } from "pinia";

export const useFilterStore = defineStore("filterStore", {
  state: () => ({
    filter: {keyword:'', location:''},
  }),
  actions: {
    setFilter(value: { keyword: string; location: string }) {
      this.filter = value;
    },
  },
});
