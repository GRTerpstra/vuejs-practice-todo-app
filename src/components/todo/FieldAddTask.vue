<template>
  <v-text-field
    class="ma-3"
    v-model="newTaskTitle"
    @keyup.enter="commitAndClearTaskTitle()"
    outlined
    label="Add Task"
    hide-details="auto"
    clearable
  >
    <template v-slot:append>
      <v-icon
        @click="commitAndClearTaskTitle()"
        color="primary"
        :disabled="!taskTitleValid"
      >
        mdi-plus</v-icon
      >
    </template></v-text-field
  >
</template>

<script>
export default {
  name: "FieldAddTask",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed: {
    taskTitleValid() {
      return this.newTaskTitle != "";
    },
  },
  methods: {
    commitAndClearTaskTitle() {
      if (this.taskTitleValid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style>
</style>