import { ref } from 'vue'
import { projectFirestore } from '../firebase'

const getPost = async (id) => {
  const post = ref(null)
  const error = ref(null)

  try {
    const response = await projectFirestore.collection('posts').doc(id).get()

    post.value = { ...response.data(), id: response.id }
  } catch (e) {
    error.value = e.message
    console.log(e.message);
  }
}

export default getPost
