<template>
  <v-text-field
    class="ma-3"
    v-model="newTaskTitle"
    @click:append="commitAndClearTaskTitle()"
    @keyup.enter="commitAndClearTaskTitle()"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details="auto"
    clearable="true"
  ></v-text-field>
</template>

<script>
export default {
  name: "FieldAddTask",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    commitAndClearTaskTitle() {
      this.$store.dispatch("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style>

</style>