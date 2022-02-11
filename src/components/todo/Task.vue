<template>
  <v-list-item
        @click="$store.commit('doneTask', task.id)"
        :class="{ 'blue lighten-5': task.done }"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action
            @click.stop="$store.commit('deleteTask', task.id)"
          >
            <v-btn icon>
              <v-icon color="primary">mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
</template>

<script>
export default {
    name: "Task",
    props: ['task']
}
</script>

<style>

</style>