<script setup>
// 技术栈列表
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const techStackList = [
  {
    name: 'Java',
    icon: ['fab', 'java'],
    iconColor: 'text-red-500'
  },
  {
    name: 'JavaScript',
    icon: ['fab', 'js'],
    iconColor: 'text-yellow-500'
  },
  {
    name: 'Vue',
    icon: ['fab', 'vuejs'],
    iconColor: 'text-green-500'
  },
  {
    name: 'Python',
    icon: ['fab', 'python'],
    iconColor: 'text-blue-500'
  },
  {
    name: 'Dart',
    icon: ['fab', 'dart-lang'],
    iconColor: 'text-blue-500'
  }
]
</script>

<template>
  <div
    class="min-w-50 bg-base-100 rounded-lg shadow-sm duration-200 hover:shadow-lg hover:scale-101 p-4 sm:p-5 md:p-6">
    <div>
      <font-awesome-icon :icon="['fas', 'code']" class="text-blue-500 mr-2 text-lg"/>
      <span class="text-lg">技术栈</span>
    </div>
    <div class="flex flex-wrap ">
      <div v-for="item in techStackList" :key="item.name" class="m-2">
        <font-awesome-icon :icon="item.icon" :class="item.iconColor" class="mr-1.5"/>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
