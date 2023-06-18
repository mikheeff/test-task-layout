import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import '@/styles/styles.scss';


createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(createPinia())
  .mount('#app');

