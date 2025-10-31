<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import HomeView from './views/HomeView.vue';
// 读取环境变量
const env = import.meta.env;
// 网站时间
const siteDate = env.VITE_SITE_DATE;
// 作者名称
const author = env.VITE_AUTHOR;
// ICP 备案号
const icp = env.VITE_ICP;
// 网安备案号
const ga = env.VITE_GA;

// 显示网安备案的状态
let showGa = ref(window.innerWidth > 768);

// 更新网安备案的显示状态
const updateShowGa = () => {
  showGa.value = window.innerWidth > 768;
}

// 组件挂载钩子
onMounted(() => {
  // 添加窗口大小变化事件监听器
  window.addEventListener('resize', updateShowGa)
})
// 组件卸载钩子
onUnmounted(() => {
  // 移除窗口大小变化事件监听器
  window.removeEventListener('resize', updateShowGa)
})
</script>

<template>
  <div class="app">
    <div class="min-h-screen flex flex-col p-2">
      <HomeView />

      <footer class="footer p-3">
          <div class="flex flex-row text-center justify-center text-xs">
            <!-- 网站信息 -->
            <p>© {{ siteDate }} {{ author }}</p>

            <!-- ICP 备案信息 -->
            <p v-if="icp">
              <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="footer-link">{{ icp }}</a>
            </p>

            <!-- 网安备案信息 -->
            <p v-if="ga" v-show="showGa">
              <a :href="'https://beian.mps.gov.cn/#/query/webSearch?police=' + ga" target="_blank" class="footer-link">
                <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" alt="公安图标" />
                <span>{{ ga }}</span>
              </a>
            </p>
          </div>
      </footer>
    </div>
  </div>
</template>


<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(-45deg, #3b82f6, #9333ea, #14b8a6, #f97316);
  background-size: 400% 400%;
  animation: gradientMove 15s ease infinite;
  color: #f8fafc;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

footer {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 12px;
}

.footer-link {
  margin-left: 8px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ff00cc;
}

.footer-link img {
  width: 14px;
  display: inline-block;
  margin-right: 5px;
}
</style>
