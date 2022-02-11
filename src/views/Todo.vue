<template>
  <div class="todo">
    <v-text-field
      class="ma-3"
      v-model="newTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details="auto"
      clearable="true"
    ></v-text-field>
    <v-list v-if="tasks.length > 0" flat class="py-0">
      <v-list-item-group v-model="settings" multiple>
        <div v-for="task in tasks" :key="task.id">
          <v-list-item
            @click="doneTask(task.id)"
            :class="{ 'blue lighten-5': task.done }"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox
                  :input-value="task.done"
                  color="primary"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.done }"
                  >{{ task.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action @click.stop="deleteTask(task.id)">
                <v-btn icon>
                  <v-icon color="primary">mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
    </v-list>
    <div v-else class="tasks-empty">
      <v-icon color="blue darken-2" size="100"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No tasks.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      newTaskTitle: "",
      tasks: [],
    };
  },
  methods: {
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style >
  .tasks-empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 75%;
  }
</style>



