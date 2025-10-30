import {createApp} from 'vue'
import App from './App.vue'

/* 导入 fontawesome 核心 */
import {library} from '@fortawesome/fontawesome-svg-core'

/* 导入字体 awesome 图标组件 */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

// 导入需要使用的 fontawesome 图标
import {
  faUpRightFromSquare,
  faXmark,
  faBlog,
  faCloud,
  faHardDrive,
  faEnvelope,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons'


// 将图标添加到 library 中
library.add(faUpRightFromSquare, faXmark, faBlog, faCloud, faHardDrive, faEnvelope, faSquarePollVertical)

// 引入全局样式
import './style.css'

// 创建 Vue 应用实例并挂载
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)  // 注册 fontawesome 组件
  .mount('#app')  // 挂载到 #app
