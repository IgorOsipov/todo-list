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
          v-for="message in messages"
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
              @click="deleteTask(message.id)"
            />
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref } from "vue";

  const messages = ref([
    {
      id: 1,
      from: "You",
      message: `Sure, I'll see you later.`,
      time: "10:42am",
      color: "deep-purple-lighten-1",
    },
    {
      id: 4,
      from: "John Doe",
      message: "Yeah, sure. Does 1:00pm work?",
      time: "10:37am",
      color: "green",
    },
    {
      id: 3,
      from: "You",
      message: "Did you still want to grab lunch today?",
      time: "9:47am",
      color: "deep-purple-lighten-1",
    },
  ]);

  const deleteTask = (id) => {
    messages.value = messages.value.filter((m) => m.id !== id);
  };
</script>

<style></style>