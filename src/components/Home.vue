<template>
  <div>
    <h3>Home</h3>
    <User>
      <template v-slot:user>
        <div v-if="user">
          Logged in as {{ user.uid }}
        </div>
        <Login v-else/>
      </template>
    </User>
  </div>
</template>

<script>
import Login from './Login';
import User from './User'
export default {
  components: {
    Login,
    User,
  }
}
</script>
