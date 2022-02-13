<template>
      <v-list-item-group v-model="settings" multiple>
        <v-list class ="pt-0" flat>
          <task v-for="task in $store.state.tasks" :key="task.id" :task="task">
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