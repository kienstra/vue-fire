import { ref } from 'vue'
import { projectFirestore } from '../firebase'

const getPosts = async () => {
  const posts = ref([])
  const error = ref(null)

  try {
    const response = await projectFirestore.collection('posts').get()

    posts.value = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
  } catch (e) {
    error.value = e.message
    console.log(e.message);
  }
}

export default getPosts
