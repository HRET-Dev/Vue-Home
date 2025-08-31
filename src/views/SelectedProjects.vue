<script setup lang="ts">
// 状态文案/色板
const statusTextMap = {
  0: '进行中',
  1: '已完成',
  2: '已暂停'
} as const;

const statusToneMap = {
  0: 'badge-primary',
  1: 'badge-success',
  2: 'badge-error'
} as const;

// 项目数据结构
type Project = {
  name: string;
  status: 0 | 1 | 2;
  description: string;
  labels: string[];
};

const projects: Project[] = [
  {
    name: '企业级后台管理系统',
    status: 1,
    description: '基于Spring Boot + Vue.js构建的企业级后台管理系统，支持用户权限管理、数据统计分析等功能。',
    labels: ['Java', 'SpringBoot', 'MySQL', 'Vue.js']
  },
  {
    name: 'AiClient',
    status: 0,
    description: '由 Flutter 驱动的全平台AI客户端',
    labels: ['Dart', 'Flutter', 'Hive']
  },
];

function statusBadgeClass(status: Project['status']) {
  return ['badge', 'badge-soft', statusToneMap[status]];
}
</script>

<template>
  <section class="mx-auto max-w-6xl p-4">
    <div style="text-align: center; margin-bottom: 2%;">
            <h1 class="text-3xl font-bold mb-4">项目与作品</h1>
            <h3>职责 · 技术 · 结果</h3>
        </div>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="(project, idx) in projects" :key="project.name + '-' + idx">
        <article class="card w-full bg-base-100 shadow-sm hover:shadow-md transition-shadow rounded-xl">
          <div class="card-body">
            <header class="flex items-start gap-3">
              <h3 class="card-title flex-1 truncate">
                {{ project.name }}
              </h3>
              <span
                :class="statusBadgeClass(project.status)"
                :aria-label="`状态：${statusTextMap[project.status]}`"
              >
                {{ statusTextMap[project.status] }}
              </span>
            </header>

            <p class="mt-1 text-sm text-base-content/70">
              {{ project.description }}
            </p>

            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="(label, i) in project.labels"
                :key="label + '-' + i"
                class="badge badge-outline"
              >
                {{ label }}
              </span>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>
