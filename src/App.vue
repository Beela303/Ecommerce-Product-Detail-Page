<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>


<style lang="scss">
:root {
  --background-color: #C599B6;
}

* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: 'clash grotesk', sans-serif;

  text-decoration: none;
}

body {
  overflow-x: hidden;
}

button {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  cursor: pointer;
}

li {
  list-style-type: none;
}
</style>
