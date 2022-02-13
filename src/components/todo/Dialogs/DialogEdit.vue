<template>
  <v-dialog value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit task? </v-card-title>
      <v-card-text
        >Edit the title of this task:
        <v-text-field
          v-model="newTaskTitle"
          @keyup.enter="
            editTask();
          "
      /></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          :disabled="newTaskTitle == '' || newTaskTitle == task.title"
          color="green"
          text
          @click="editTask()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEdit",
  props: ["task"],
  data() {
    return {
      newTaskTitle: "",
    };
  },
  // The mounted lifecycle hook runs when the DOM is mounted and has full access to the DOM elements and can manipulate the DOM after rendering.
  // The created lifecycle hook only runs before the DOM is rendered and therefore can't manipulate the DOM after rendering.
  mounted() {
    this.newTaskTitle = this.task.title;
  },
  computed: {
    taskTitleValid() {
      return this.newTaskTitle != "" && this.newTaskTitle != this.task.title;
    }
  },
  methods: {
    editTask() {
      if (this.taskTitleValid) {
        let payload = {
          id: this.task.id,
          newTaskTitle: this.newTaskTitle,
        };
        this.$store.dispatch("editTask", payload);
        this.$emit('close');
      }
    },
  },
};
</script>

<style>
</style>