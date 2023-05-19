<template>
  <v-row>
    <v-col v-for="task in tasks" :key="task.id" cols="12" sm="6" lg="4" xl="3">
      <to-do-item :task="task" />
    </v-col>
  </v-row>
</template>

<script setup>
  import { computed } from "vue";
  import { useStore } from "vuex";
  import ToDoItem from "./ToDoItem.vue";

  const store = useStore();
  const tasks = computed(() => store.state.tasks.tasks);
</script>

<style scoped></style>