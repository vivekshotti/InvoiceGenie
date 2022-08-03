import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import 'flowbite';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faChartLine, faFolderOpen, faJetFighterUp, faChartPie, faCircleQuestion, faGear, faRightFromBracket, faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(plugin, defaultConfig)

app.use(createPinia())
app.use(router)

library.add(faHouse, faChartLine, faJetFighterUp, faFolderOpen, faChartPie, faCircleQuestion, faGear, faRightFromBracket, faCircleMinus, faCirclePlus)

app.mount('#app')
