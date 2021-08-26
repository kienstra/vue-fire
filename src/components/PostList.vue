<!-- Mainly copied from https://github.com/iamshaunjp/Vue-3-Firebase/blob/946ce5c2029e31f71fb7e1d6e49f53717d38073b/dojo-blog/src/components/PostList.vue -->
<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {}
}
</script>