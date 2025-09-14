<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// 网站列表
const siteList = [
  {
    name: "Hexo 博客",
    url: "https://blog.hret.cn",
    icon: "https://storage.hret.cn/blog/hret-logo.jpg",
    bgColor: "hover:bg-blue-500",
    textColor: "hover:text-white",
  },
  {
    name: "Halo 博客",
    url: "https://www.hret.dev",
    icon: "https://www.hret.dev/upload/hret-blog-logo.jpg",
    bgColor: "hover:bg-blue-500",
    textColor: "hover:text-white",
  },
  {
    name: "Alist 云盘",
    url: "https://alist.hret.dev",
    icon: "https://alist.hret.dev/favicon.ico",
    bgColor: "hover:bg-blue-500",
    textColor: "hover:text-white",
  },
  {
    name: "临时域名邮箱",
    url: "https://email.hret.loc.cc",
    icon: "https://email.hret.loc.cc/logo.png",
    bgColor: "hover:bg-blue-500",
    textColor: "hover:text-white",
  },
  {
    name: "Komari 服务器探针",
    url: "https://komari.hret.pp.ua",
    icon: "https://komari.hret.pp.ua/favicon.ico",
    bgColor: "hover:bg-blue-500",
    textColor: "hover:text-white",
  },
]
</script>

<template>
  <div
    class="min-w-50 rounded-lg shadow-sm duration-200 hover:shadow-lg hover:scale-101 p-2 sm:p-4">
    <div>
      <font-awesome-icon :icon="['fas', 'globe']" class="text-blue-500 mr-2 text-lg"/>
      <span class="text-lg">个人网站</span>
    </div>
    <div class="flex flex-wrap">
      <a v-for="item in siteList" :key="item.name" :href="item.url" target="_blank" class="m-auto">
        <div
          class="text-center border border-gray-100 rounded-lg p-4 m-2 duration-200 hover:scale-105"
          :class="[item.bgColor, item.textColor]"
        >
          <h3>
            <img
              v-if="item.icon != null"
              class="m-auto w-12 rounded-lg mb-2"
              :src="item.icon"
              :alt="item.name"
              @error="e => e.target.src = '/favicon.ico'"
            />
            <img
              v-else
              class="m-auto w-12 mb-2"
              src="/favicon.ico"
              :alt="item.name"
            />
            <i>{{ item.name }}</i>
          </h3>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
