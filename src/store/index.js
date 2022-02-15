import Vue from 'vue';
import Vuex from 'vuex';
import LocalBase from 'localbase';

let db = new LocalBase;
db.config.debug = false
Vue.use(Vuex);

export default new Vuex.Store({
  // VueX state contains all of your application level data in a single object.
  state: {
    // The environment variable that is saved in the .env file in the root of this project is assigned to the variable appTitle.
    appTitle: process.env.VUE_APP_TITLE,
    tasks: [],
    searchActive: true,
    snackbar: {
      show: false,
      message: "",
    },
    sorting: false,
    search: null,
  },
  // VueX mutations that you can trigger with the commit method.
  // VueX mutations CAN modify the VueX state but can NOT commit multiple mutations in one action.
  mutations: {
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    updateTaskList(state, tasks) {
      state.tasks = tasks;
    },
    editTask(state, payload) {
      state.tasks.filter((task) => task.id === payload.id)[0].title = payload.newTaskTitle;
    },
    editDueDate(state, payload) {
      state.tasks.filter((task) => task.id === payload.id)[0].dueDate = payload.dueDate;
    },
    updateSearch(state, search) {
      state.search = search;
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
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },    
    toggleSorting(state) {
      this.state.sorting = !this.state.sorting;
    }
  },
  // VueX actions that you can trigger with the dispatch method.
  // VueX actions can NOT modify the VueX state but CAN commit multiple mutations in one action.
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask);
        commit('showSnackbar', "Task added");
      })
    },
    doneTask({ state, commit }, taskId) {
      db.collection('tasks').doc({ id: taskId }).update({
        done: !state.tasks.filter((task) => task.id == taskId)[0].done
      }).then(() => {
        commit('doneTask', taskId)
      })
    },
    deleteTask({ commit }, taskId) {
      db.collection('tasks').doc({ id: taskId }).delete().then(() => {
        commit('deleteTask', taskId);
        commit('showSnackbar', "Task deleted");
      })
    },
    setTasks({ commit }, tasks) {
      commit('updateTaskList', tasks)
      db.collection('tasks').set(tasks)
    },
    editTask({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.newTaskTitle
      }).then(() => {
        commit('editTask', payload);
        commit('showSnackbar', "Task Edited");
      })
    },
    editDueDate({ commit }, payload) {
      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('editDueDate', payload);
        commit('showSnackbar', "Due date Edited");
      })
    },
    toggleSorting({ state, commit }) {
      if (state.search == "") {
        commit('toggleSorting');
      }
      else {
        commit('showSnackbar', "lukt niettt kut");
      }
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('updateTaskList', tasks);
      })

    }
  },
  getters: {
    tasksFiltered(state) {
      if (state.search == null) {
        return state.tasks;
      }
      else {
        return state.tasks.filter((task) => task.title.toLowerCase().includes(state.search.toLowerCase()));
      }
    }
  },
})
