<script lang="ts">
import type { Todo } from "@/types";
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit: function () {
      this.$store.commit("addTodo", {
        id: crypto.randomUUID(),
        status: "not-started",
        title: this.title,
      } as Todo);
      this.$router.push("/");
    },
  },
});
</script>

<template>
  <div id="root">
    <form v-on:submit.prevent="onSubmit">
      <label for="title">Title</label>
      <div>
        <input
          placeholder="Enter task name"
          required
          id="title"
          v-model="title"
          type="text"
        />
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
#root {
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
