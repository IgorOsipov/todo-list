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
          v-for="message in props.task.messages"
          :key="message.id"
          :dot-color="message.color"
          size="30"
          width="100%"
        >
          <div class="d-flex justify-space-between align-center">
            <div class="font-weight-normal">
              <strong>{{ message.from }}</strong> @{{ message.time }}
            </div>
            <v-btn
              class="ma-2"
              variant="text"
              icon="mdi-close"
              color="blue-lighten-2"
              size="30"
              style="margin: 0 !important"
              @click="deleteTask(props.task.id, message.id)"
            />
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { defineProps } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const props = defineProps(["task"]);

  const deleteTask = (taskId, messageId) => {
    store.commit("deleteMessage", { taskId, messageId });
  };
</script>

<style></style>