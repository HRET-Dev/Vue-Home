<script setup>
// awesome 图标
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// 技术信息列表
const technology = [
  {
    name: 'Java',
    percent: '85',
    icon: ['fab', 'java'],
    iconColor: 'text-red-500'
  },
  {
    name: 'JavaScript',
    percent: '70',
    icon: ['fab', 'js'],
    iconColor: 'text-yellow-500'
  },
  {
    name: 'Vue',
    percent: '80',
    icon: ['fab', 'vuejs'],
    iconColor: 'text-green-500'
  },
  {
    name: 'Docker',
    percent: '88',
    icon: ['fab', 'docker'],
    iconColor: 'text-indigo-500'
  },
  {
    name: 'Python',
    percent: '50',
    icon: ['fab', 'python'],
    iconColor: 'text-blue-500'
  },
  {
    name: 'Flutter',
    percent: '30',
    icon: ['fab', 'flutter'],
    iconColor: 'text-blue-400'
  },
  {
    name: 'Terminal',
    percent: '66',
    icon: ['fas', 'terminal'],
    iconColor: 'text-gray-800'
  },
];
</script>

<template>
  <div>
    <ul
      class="list min-w-50 bg-base-100 rounded-lg shadow-sm duration-200 hover:shadow-lg hover:scale-101 active:shadow-lg active:scale-101 p-4 sm:p-5 md:p-6 ">
      <li class="list-title">
        <font-awesome-icon :icon="['fas', 'code']" class="text-blue-500 mr-2 text-lg"/>
        <span class="text-lg">技术专长</span>
      </li>
      <li class="mt-4 flex flex-col" v-for="item in technology" :key="item.name">
        <div class="flex items-center group">
          <div class="flex items-center">
            <font-awesome-icon :icon="item.icon" :class="item.iconColor"/>
            <span class="ml-2 group-hover:text-blue-600 group-active:text-blue-600">{{ item.name }}</span>
          </div>
          <span class="ml-auto text-gray-500 group-hover:text-blue-600 group-active:text-blue-600">{{ item.percent }}%</span>
        </div>
        <div class="mt-2 h-2 rounded-full bg-gray-200">
          <div class="h-2 rounded-full bg-blue-500" :style="{ width: item.percent + '%' }"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
