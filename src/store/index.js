import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    snackbar: {
      show: false,
      message: "",
    },
  },
  mutations: {
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    editTask(state, payload) {
      state.tasks.filter((task) => task.id === payload.id)[0].title = payload.newTaskTitle;
    },
    showSnackbar(state, message) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 175;
      };
      setTimeout(() => {
        state.snackbar.message = message;
        state.snackbar.show = true;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', "Task added");
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showSnackbar', "Task deleted");
    },
    editTask({commit}, payload) {
      commit('editTask', payload);
      commit('showSnackbar', "Task Edited");
    }
  },
  getters: {
  },
  modules: {
  }
})
