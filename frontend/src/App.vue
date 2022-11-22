<template>
  <v-app id="inspire" :theme="userTheme">
    <v-navigation-drawer v-model="drawer" v-if="useAuthStore().isLogged()">
      <v-btn
        variant="text"
        block
        prepend-icon="mdi-logout"
        @click="useAuthStore().logout()"
      >
        Se déconnecter
      </v-btn>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="useAuthStore().isLogged()"
      />
      <v-toolbar-title>Group Purchase App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn icon @click="openGithubLink">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="main">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuthStore } from "./stores/auth";

const drawer = ref(null);

const setTheme = (theme) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
};

const getTheme = () => {
  return localStorage.getItem("user-theme");
};

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark";
  } else {
    return "light";
  }
};
const openGithubLink = () => {
  window.open("//github.com/CodeWorksFrance/group-purchase-kata");
};
const userTheme = ref(getTheme() || getMediaPreference());

onMounted(() => setTheme(userTheme.value));
</script>

<style scoped>
.main {
}
</style>
