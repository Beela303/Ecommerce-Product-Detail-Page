<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>


<style lang="scss">
:root {
  --ORANGE: #FFA439;
  --TEXT-BLUE: #3E3E59;

  --BORDER01: #B8B8B8;
  --BORDER02: #A3A3A3;
  --BORDER03: #333333;

  --BLACK01: #0B0F0E;
  --BLACK02: #292929;
  --BLACK03: #141414;
  --BLACK04: #121212;

  --GRAY01: #E4E9EE;
  --GRAY02: #525252;
  --GRAY03: #818B9C;
  --GRAY04: #C4C8CC;
  --GRAY05: #7A7A7A;
  --GRAY06: #F2F2F2;
  --GRAY07: #787A7C;

  --WHITE01: #FFF;
  --WHITE02: #EBEBEB;
  --WHITE03: #E6E6E6;
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

a {
  text-decoration: none;
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
