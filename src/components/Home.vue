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
import User from './User';
import getPosts from '../composable/getPosts';
export default {
  components: {
    Login,
    User,
  },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  },
}
</script>
