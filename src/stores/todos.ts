import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateStatus(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          if (todo.status === "complete") {
            console.log("complete");
            todo.status = "not-started";
          } else {
            todo.status = "complete";
          }
          return todo;
        }
        return todo;
      });
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
});

export { store };
