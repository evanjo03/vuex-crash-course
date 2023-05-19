<script lang="ts">
import type { Todo } from "@/types";
import { defineComponent } from "vue";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  data: function () {
    return {};
  },
  components: {
    TodoItem,
  },
  computed: {
    todos: function (): Todo[] {
      return this.$store.state.todos;
    },
  },
});
</script>

<template>
  <div id="dashboard">
    <TodoItem v-for="todo in todos" :model="todo" :key="todo.id" />
  </div>
</template>

<style scoped>
#dashboard {
  padding: 2rem;
}
</style>
