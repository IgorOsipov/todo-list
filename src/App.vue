<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">

      <v-list :items="items">
        <v-list nav>
          <v-list-item v-for="item in items" :key="item.value" :prepend-icon="item.icon" :title="item.title"
            :to="item.path">
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="toogleMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>TODO List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

//menu
const drawer = ref(false);
const items = [
  {
    icon: "mdi-home-variant",
    title: "Home",
    path: "/"
  },
  {
    icon: "mdi-information-variant",
    title: "About",
    path: "/about"
  }
];
function toogleMenu() {
  drawer.value = !drawer.value
}

</script>

<style></style>
