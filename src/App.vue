<script setup lang="ts"></script>

<template>
  <div id="app">
    <header>
      <div class="header-container">
        <router-link to="/">
          <h3>Todo Vuex</h3>
        </router-link>
        <router-link to="add-todo">Add</router-link>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  border-bottom: 1px solid var(--gray);
  padding: 1rem;
}

h3 {
  color: var(--black);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
</style>
