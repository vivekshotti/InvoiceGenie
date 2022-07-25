import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import 'flowbite';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faChartLine, faFolderOpen, faJetFighterUp, faChartPie, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

library.add(faHouse, faChartLine, faJetFighterUp, faFolderOpen, faChartPie, faCircleQuestion)

app.mount('#app')
