<template>
  <v-btn class="button-done-sorting" @click="$store.commit('toggleSorting')" color="primary">
    Done sorting
  </v-btn>
</template>

<script>
export default {
  name: "ButtonDoneSorting",
};
</script>

<style lang="scss">
    .button-done-sorting {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translate(-50%);
    }
</style>