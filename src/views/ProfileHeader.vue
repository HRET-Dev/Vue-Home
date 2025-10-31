<script setup>
// 读取联系方式 JSON 文件
import contactConfig from '@/config/contact.json';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
// 读取环境变量
const env = import.meta.env;
// 作者名称
const author = env.VITE_AUTHOR;
// 作者头像
const avatar = env.VITE_AVATAR;

// 联系方式
const contactList = contactConfig.map(item => ({
  name: item.name,
  icon: item.icon,
  url: item.url
}))
</script>

<template>
  <div>
    <!-- 用户信息 -->
    <div class="flex flex-col justify-center items-center m-auto md:flex-row">
      <div>
        <img :src="avatar" alt="avatar" class="avatar rounded-full" />
      </div>
      <div class="text-3xl font-normal mt-2 md:ml-5">
        <h1>Hi，</h1>
        <h1>I'm <span class="text-4xl font-medium">{{ author }}</span></h1>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="w-max m-auto mt-5 p-1">
      <a
        v-for="contact in contactList"
        :key="contact.name"
        :href="contact.url"
        target="_blank"
        class="cursor-pointer text-xl m-2"
      >
        <FontAwesomeIcon :icon="contact.icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 150px;
  height: 150px;
}
</style>
