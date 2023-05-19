export const tasks = {
  state: () => ({
    taskGroup: [
      {
        id: 1,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: true,
          },
          {
            id: 2,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
      {
        id: 2,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: false,
          },
          {
            id: 4,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
      {
        id: 3,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: false,
          },
          {
            id: 4,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
      {
        id: 4,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: false,
          },
          {
            id: 4,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
      {
        id: 5,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: false,
          },
          {
            id: 4,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
      {
        id: 6,
        tasks: [
          {
            id: 1,
            message: `Sure, I'll see you later.`,
            done: false,
          },
          {
            id: 4,
            message: "Yeah, sure. Does 1:00pm work?",
            done: false,
          },
          {
            id: 3,
            message: "Did you still want to grab lunch today?",
            done: false,
          },
        ],
      },
    ],
  }),
  getters: {},
  mutations: {
    addTask(state, { taskGroupId, newTaskText }) {
      const index = state.taskGroup.findIndex((t) => t.id === taskGroupId);
      const newMessage = new Object({
        id: Date.now(),
        message: newTaskText,
        done: false,
      });

      state.taskGroup[index].tasks.push(newMessage);
    },
    deleteTaskGroup(state, { taskGroupId, taskId }) {
      const index = state.taskGroup.findIndex((t) => t.id === taskGroupId);
      state.taskGroup[index].tasks = state.taskGroup[index].tasks.filter(
        (m) => m.id !== taskId
      );
    },
    toogleMessage(state, { taskGroupId, taskId }) {
      const taskGroupIndex = state.taskGroup.findIndex(
        (t) => t.id === taskGroupId
      );
      const messageIndex = state.taskGroup[taskGroupIndex].tasks.findIndex(
        (m) => m.id === taskId
      );
      state.taskGroup[taskGroupIndex].tasks[messageIndex].done =
        !state.taskGroup[taskGroupIndex].tasks[messageIndex].done;
    },
  },
  actions: {},
};
