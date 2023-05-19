<template>
  <div class="wrapper">
    <input
      type="checkbox"
      :checked="model?.status === 'complete'"
      @change="onStatusChange"
    />
    <div>{{ model?.title }}</div>
    <button type="button" @click="onDelete">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Todo } from "@/types";

export default defineComponent({
  props: {
    model: Object as PropType<Todo>,
  },
  methods: {
    onStatusChange: function () {
      if (!this.model) return;

      this.$store.commit("updateStatus", this.model.id);
    },
    onDelete: function () {
      if (!this.model) return;

      this.$store.commit("removeTodo", this.model.id);
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 1rem;
}

button {
  background-color: unset;
  border: none;
  color: red;
  font-weight: 700;
}
</style>
