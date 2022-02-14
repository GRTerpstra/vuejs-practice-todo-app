<template>
  <v-list-item-group multiple>
    <v-list class="pt-0" flat>
      <draggable v-model="tasks" handle=".handle">
        <task v-for="task in tasks" :key="task.id" :task="task"> </task>
      </draggable>
    </v-list>
  </v-list-item-group>
</template>

<script>
import Task from "./Task.vue";
import draggable from "vuedraggable";

export default {
  name: "TaskList",
  tasks: [],
  components: {
    task: Task,
    draggable: draggable,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(tasks) {
        this.$store.dispatch("setTasks", tasks);
      },
    },
  },
};
</script>

<style>
</style>