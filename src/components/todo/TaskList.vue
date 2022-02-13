<template>
      <v-list-item-group multiple>
        <v-list class ="pt-0" flat>
          <task v-for="task in $store.getters.tasksFiltered" :key="task.id" :task="task">
          </task>
          </v-list>
      </v-list-item-group>
</template>

<script>
import Task from './Task.vue'
export default {
  name:'TaskList',
  components: {
    "task": Task
  }
}
</script>

<style>

</style>