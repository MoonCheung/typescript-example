import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/styles/index.less'; // global css

const app = createApp({});
app.config.globalProperties.$router = router;

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
