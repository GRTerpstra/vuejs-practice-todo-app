<template>
  <div class="text-subtitle-2 ml-4">
    {{ date | niceDate }}
    {{ date | niceTime }}
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "LiveDateTime",
  data() {
    return {
      date: new Date(),
    };
  },
  filters: {
    niceDate(date) {
      return format(new Date(date), "dd MMMM");
    },
    niceTime(date) {
      return format(new Date(date), "HH:mm");
    },
  },
  methods: {
    refreshDate() {
      setInterval(() => {
        this.date = new Date();
      }, 1000);
    },
  },
  mounted() {
      this.refreshDate();
  }
};
</script>

<style>
</style>