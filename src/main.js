import {createApp} from 'vue'
import App from './App.vue'

/* 导入 fontawesome 核心 */
import {library} from '@fortawesome/fontawesome-svg-core'

/* 导入字体 awesome 图标组件 */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// 导入需要使用的 fontawesome 图标
import {
  faCode,
  faTerminal,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

import {
  faJava,
  faPython,
  faJs,
  faVuejs,
  faDocker,
  faFlutter,
  faDartLang
} from '@fortawesome/free-brands-svg-icons'


// 将图标添加到 library 中
library.add(faCode, faJava, faPython, faJs, faVuejs, faDocker, faFlutter, faTerminal, faDartLang, faGlobe)

// 引入全局样式
import './style.css'

// 创建 Vue 应用实例并挂载
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)  // 注册 fontawesome 组件
  .mount('#app')  // 挂载到 #app
