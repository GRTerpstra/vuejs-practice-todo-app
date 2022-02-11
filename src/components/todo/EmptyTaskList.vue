<template>
  <div class="tasks-empty">
    <v-icon color="blue darken-2" size="100"> mdi-check </v-icon>
    <div class="text-h5 primary--text">No tasks</div>
  </div>
</template>

<script>
export default {
  name: "EmptyTaskList",
};
</script>

<style lang="scss">
.tasks-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 75%;
}
</style>