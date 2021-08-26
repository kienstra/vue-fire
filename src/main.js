import { createApp, VueCompositionApi } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home';

const router = new VueRouter({
  routes: [{ path: "/", component: Home }],
});

createApp(App)
  .use(router)
  .use(VueCompositionApi)
  .mount("#app")
