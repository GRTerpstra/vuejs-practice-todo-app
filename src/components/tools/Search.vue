<template>
    <!-- You can't do two way binding with state properties, so use the value directive here instead of the v-model directive.  -->
  <v-text-field
    :value="$store.state.search"
    @input="$store.commit('updateSearch', $event)"
    class="expanding-search mt-3"
    outlined
    append-icon="mdi-magnify"
    placeholder="Search"
    @focus="searchActive = true"
    @blur="searchActive = false"
    filled
    dense
    :class="{ closed: !searchActive && $store.state.search == null }"
    clearable
  ></v-text-field>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchActive: false,
    };
  },
};
</script>

<style lang="scss">
.v-input__slot {
  cursor: pointer !important;
}
.expanding-search {
  transition: 0.75s !important;
}
.closed {
  max-width: 2.813rem !important;
  transition: 0.75s !important;
}

.closed .v-input__slot {
  background-color: rgba(255, 255, 255, 0%) !important;

  fieldset {
    transition: 0.25s !important;
    border-color: transparent !important;
  }
}

.closed .v-input__append-inner {
  padding: 0 !important;
}
</style>