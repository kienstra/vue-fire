<template>
  <div id="app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Real time voice chat</p>
    </header>
    <router-view></router-view>
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
