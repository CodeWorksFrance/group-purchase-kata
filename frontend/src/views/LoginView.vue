<template>
  <v-container fluid class="h-100 d-flex align-center justify-center">
    <v-card :width="width" elevation="8">
      <v-card-text>
        <v-form @keypress.enter="onSubmit">
          <v-text-field
            label="username"
            type="text"
            v-model="username"
            variant="underlined"
          />
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            variant="underlined"
          />
          <div class="form-group">
            <v-btn @click="onSubmit" block color="primary">
              Se connecter
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "../stores/auth";
import { useDisplay } from "vuetify";

const store = useAuthStore();
const username = ref("");
const password = ref("");

const width = computed(() => {
  switch (useDisplay().name.value) {
    case "xs":
      return "100%";
    case "sm":
      return 400;
  }

  return 500;
});

const onSubmit = () => {
  store.login(username.value, password.value);
};

// const items = store.items;
</script>

<style scoped>
.root {
}
</style>
