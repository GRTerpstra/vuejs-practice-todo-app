<template>
  <div class="todo">
    <field-add-task />
    <task-list v-if="$store.state.tasks.length > 0" class="py-0" />
    <empty-task-list v-else />
  </div>
</template>

<script>
import FieldAddTask from "../components/todo/FieldAddTask.vue";
import TaskList from "../components/todo/TaskList.vue";
import EmptyTaskList from "../components/todo/EmptyTaskList.vue";

export default {
  name: "Todo",
  components: {
    "field-add-task": FieldAddTask,
    "task-list": TaskList,
    "empty-task-list": EmptyTaskList,
  },
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    commitAndClearTaskTitle() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style >

</style>
