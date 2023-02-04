import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import Vueaxios from 'vue-axios'

loadFonts()

createApp(App).use(router)
  .use(Vueaxios, axios)
  .use(router)
  .use(vuetify)
  .mount('#app')
