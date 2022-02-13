<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" mobile-breakpoint="820" app>
      <v-img
        :src="require('./assets/logo.svg')"
        class="my-5"
        contain
        height="200"
      >
      <div class="top-drawer-wrapper mt-15">
        <v-avatar size="100">
          <img src="./assets/Profielfoto.jpeg" alt="Gerwin Terpstra" />
        </v-avatar>
        <div class="text-center text-subtitle-1 font-weight-bold">
          Gerwin Terpstra
        </div>
      </div>
      </v-img>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="{ path: item.to }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0 mt-2">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer />
          <search />
        </v-row>
        <v-row class="ma-0 mt-4">
          <v-app-bar-title class="text-h4 ml-4"> Vuetify Todo </v-app-bar-title>
        </v-row>
        <v-row class="ma-0">
          <live-date-time />
        </v-row>
        <v-row> </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <snackbar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "./components/shared/Snackbar.vue";
import Search from "./components/tools/Search.vue";
import LiveDateTime from "./components/tools/LiveDateTime.vue";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Todo", icon: "mdi-format-list-checks", to: "/todo" },
        { title: "About", icon: "mdi-about", to: "/about" },
      ],
      right: null,
    };
  },
  components: {
    snackbar: Snackbar,
    search: Search,
    LiveDateTime,
  },
};
</script>

<style lang="scss">
  .top-drawer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-container {
    @media(min-width: 960px){
        max-width: none !important;
    }
  }
</style>