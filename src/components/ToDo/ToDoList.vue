<template>
  <v-row align="start" justify="start">
    <v-col v-for="task in tasks" :key="task.id" cols="12" sm="6" lg="4" xl="3">
      <to-do-item />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import ToDoItem from "./ToDoItem.vue";

const tasks = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]);
</script>

<style scoped></style>