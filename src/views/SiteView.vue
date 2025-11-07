<script setup>
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// 加载本地 JSON 文件
import siteConfig from '@/config/site.json';
// 处理站点数据
const siteList = siteConfig.map(item => ({
  name: item.name,
  url: item.url,
  icon: item.icon,
  iframe: item.iframe
}));

// 当前选中的站点 URL
let url = ref('');

// 网站点击事件
function openSiteDialog(selectedUrl) {
  // 设置 URL
  url.value = selectedUrl;
  // 显示弹框
  const dialog = document.getElementById('site-dialog');
  dialog.showModal();
}

// 关闭站点预览弹框事件
function closeSiteDialog() {
  const dialog = document.getElementById('site-dialog');
  dialog.close();
  // 清空 URL
  url.value = '';
}
</script>

<template>
  <div class="grid grid-cols-3">
    <!-- 网站列表 -->
    <div v-for="site in siteList" :key="site.name" class="border m-2 rounded-lg hover:shadow-lg hover:scale-105 duration-200">
      <div
        v-if="site.iframe"
        class="cursor-pointer text-center h-full flex flex-col justify-center items-center p-2 pt-3 pb-3 md:p-6 md:flex-row"
        @click.prevent="openSiteDialog(site.url)"
      >
        <FontAwesomeIcon :icon="site.icon" class="mb-1 md:mb-0 md:mr-2" />
        <p>{{ site.name }}</p>
      </div>
      <a
        v-else
        :href="site.url"
        target="_blank"
        class="cursor-pointer text-center h-full flex flex-col justify-center items-center p-2 pt-3 pb-3 md:p-6 md:flex-row"
      >
        <FontAwesomeIcon :icon="site.icon" class="mb-1 md:mb-0 md:mr-2" />
        <p>{{ site.name }}</p>
      </a>
    </div>
    <!-- 站点预览弹框 -->
    <dialog id="site-dialog" class="m-auto p-3 rounded-lg text-center">
      <div class="flex mb-2">
        <h2 class="text-lg font-bold">站点预览</h2>
        <div class="ml-auto">
          <a :href="url" target="_blank">
            <FontAwesomeIcon icon="up-right-from-square"/>
          </a>
          <span class="ml-2 mr-2">|</span>
          <button @click="closeSiteDialog()">
            <FontAwesomeIcon icon="xmark"/>
          </button>
        </div>
      </div>
      <iframe :src="url" class=
        "
        rounded-lg
        2xl:w-300
        2xl:h-200
        xl:w-250
        xl:h-180
        lg:w-200
        lg:h-150
        md:w-120
        md:h-150
        sm:w-80
        sm:h-100
        w-60
        h-80
        "
      ></iframe>
    </dialog>
  </div>
</template>

<style scoped>

</style>
