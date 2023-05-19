export const tasks = {
  state: () => ({
    tasks: [
      {
        id: 1,
        messages: [
          {
            id: 1,
            from: "You",
            message: `Sure, I'll see you later.`,
            time: "10:42am",
            color: "deep-purple-lighten-1",
          },
          {
            id: 2,
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
        ],
      },
      {
        id: 2,
        messages: [
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
        ],
      },
      {
        id: 3,
        messages: [
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
        ],
      },
      {
        id: 4,
        messages: [
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
        ],
      },
      {
        id: 5,
        messages: [
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
        ],
      },
      {
        id: 6,
        messages: [
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
        ],
      },
    ],
  }),
  getters: {},
  mutations: {
    deleteMessage(state, { taskId, messageId }) {
      const index = state.tasks.findIndex((t) => t.id === taskId);
      state.tasks[index].messages = state.tasks[index].messages.filter(
        (m) => m.id !== messageId
      );
    },
  },
  actions: {},
};
