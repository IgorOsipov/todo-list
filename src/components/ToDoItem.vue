<template>
  <v-card>
    <v-img
      height="100"
      src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      cover
      class="text-white"
    >
      <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
        <v-toolbar-title class="text-h6"> Task </v-toolbar-title>
      </v-toolbar>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">Today</div>

      <v-timeline density="compact" align="start">
        <v-timeline-item
          v-for="task in props.task.tasks"
          :key="task.id"
          :dot-color="task.done ? 'blue-lighten-1' : 'rgba(0,0,0,0.12)'"
          size="30"
          width="100%"
          @click="handleTaskClick(task.id)"
          style="cursor: pointer"
        >
          <div class="d-flex justify-space-between align-center">
            <div
              class="font-weight-normal"
              :class="{ 'text-decoration-line-through': task.done }"
            >
              {{ task.message }}
            </div>
            <v-btn
              class="ma-2"
              variant="text"
              icon="mdi-close"
              color="blue-lighten-2"
              size="30"
              style="margin: 0 !important"
              @click.prevent.stop="handleDeleteTask(props.task.id, task.id)"
            />
          </div>
        </v-timeline-item>
      </v-timeline>

      <v-text-field
        class="pl-3 mt-1"
        variant="underlined"
        v-model="newTaskText"
        clearable
        clear-icon="mdi-close"
        append-inner-icon="mdi-plus"
        hide-details="auto"
        label="Add Task"
        bg-color="#fff"
        @click:appendInner="handleAddTask"
        @keydown.enter="handleAddTask"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { defineProps, ref } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const props = defineProps(["task"]);

  //delete task
  const handleDeleteTask = (taskGroupId, taskId) => {
    store.commit("deleteTaskGroup", { taskGroupId, taskId });
  };

  //add new task
  const newTaskText = ref("");
  const handleAddTask = () => {
    if (newTaskText.value) {
      store.commit("addTask", {
        taskGroupId: props.task.id,
        newTaskText: newTaskText.value,
      });
      newTaskText.value = "";
    }
  };

  //toogle task
  const handleTaskClick = (taskId) => {
    store.commit("toogleMessage", { taskGroupId: props.task.id, taskId });
  };
</script>

<style></style>