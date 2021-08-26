<template>
  <div id="app">
    <header>
      <h1>Vue Voxer</h1>
      <p>Real time voice chat</p>
    </header>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { auth } from './firebase'
import getPosts from './composable/getPosts';
import PostList from './components/PostList'
console.log(auth)

export default {
  name: 'App',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  },
}
</script>
