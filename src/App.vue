<template>
  <div id="app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Real time voice chat</p>
    </header>
  </div>

</template>

<script>

import { auth } from './firebase'
console.log(auth)

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
