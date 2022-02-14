<template>
  <div>
    <v-list-item
      :ripple="false"
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
      class="white"
    >
      <v-list-item-action>
        <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title
          :class="{ 'text-decoration-line-through': task.done }"
          >{{ task.title }}</v-list-item-title
        >
      </v-list-item-content>
      <v-list-item-action v-if="task.dueDate != null">
        <v-list-item-action-text>
          <v-icon small>mdi-calendar</v-icon>
          {{ task.dueDate | niceDate }}</v-list-item-action-text
        >
      </v-list-item-action>
      <v-list-item-action>
        <task-menu :task="task" />
      </v-list-item-action>
      <v-list-item-action v-if="$store.state.sorting">
        <v-btn color="primary" icon>
          <v-icon class="handle">mdi-drag</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { format, compareAsc } from "date-fns";
import TaskMenu from "./TaskMenu.vue";
export default {
  name: "Task",
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "dd MMM");
    },
  },
  components: {
    "task-menu": TaskMenu,
  },
};
</script>

<style lang="scss">
.sortable-ghost {
  opacity: 0;
}
.sortable-chosen {
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 30%);
}
</style>