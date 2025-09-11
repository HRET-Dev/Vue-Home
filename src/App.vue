<script setup>
import HomeView from './views/HomeView.vue';

const env = import.meta.env;
const siteDate = env.VITE_SITE_DATE;
const author = env.VITE_AUTHOR;
const icp = env.VITE_ICP;
const ga = env.VITE_GA;
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HomeView />

    <footer class="min-w-60 footer footer-center p-3">
      <aside>
        <div>
          <!-- 网站信息 -->
          <span>© {{ siteDate }} {{ author }}</span>

          <!-- ICP 备案信息 -->
          <span v-if="icp">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="footer-link">{{ icp }}</a>
          </span>

          <!-- 网安备案信息 -->
          <span v-if="ga">
            <a :href="'https://beian.mps.gov.cn/#/query/webSearch?police=' + ga" target="_blank" class="footer-link">
              <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" alt="公安图标" />
              <span>{{ ga }}</span>
            </a>
          </span>
        </div>
      </aside>
    </footer>
  </div>
</template>


<style scoped>
footer {
  margin-top: auto;
  margin-bottom: 0;
  color: #666;
  font-size: 12px;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.footer-link {
  margin-left: 8px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #007bff;
}

.footer-link img {
  width: 14px;
  display: inline-block;
  margin-right: 5px;
}
</style>
