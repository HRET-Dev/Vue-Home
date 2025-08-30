<script setup>
/**
 * name：技术栈名称
 * 
 * level：技术栈等级
 * 
 * levelValue：技术栈等级描述
 * 
 * percent：技术栈掌握程度
 * 
 * icon：技术栈图标
 */
const techStackList = [
    {
        name: 'Java',
        level: 3,
        levelValue: '高级',
        percent: '85',
        icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png',
    },
    {
        name: 'SpringBoot',
        level: 3,
        levelValue: '高级',
        percent: '80',
        icon: 'https://img.icons8.com/color/48/spring-logo.png',
    },
    {
        name: 'JavaScript',
        level: 2,
        levelValue: '中级',
        percent: '70',
        icon: 'https://img.icons8.com/pulsar-gradient/48/javascript.png',
    },
    {
        name: 'Vue',
        level: 2,
        levelValue: '中级',
        percent: '80',
        icon: 'https://img.icons8.com/color/48/vue-js.png',
    },
    {
        name: 'Docker',
        level: 3,
        levelValue: '高级',
        percent: '88',
        icon: 'https://img.icons8.com/dusk/50/docker.png',
    },
    {
        name: 'Python',
        level: 2,
        levelValue: '中级',
        percent: '50',
        icon: 'https://img.icons8.com/color/48/python.png',
    },
    {
        name: 'Flutter',
        level: 1,
        levelValue: '初级',
        percent: '30',
        icon: 'https://img.icons8.com/color/48/flutter.png',
    },
    {
        name: 'Terminal',
        level: 2,
        levelValue: '中级',
        percent: '66',
        icon: 'https://img.icons8.com/fluency/48/linux-terminal.png',
    },
];
</script>

<template>
    <section class="mx-auto max-w-6xl px-4 py-6">
        <div style="text-align: center; margin-bottom: 2%;">
            <h1 class="text-xl font-semibold mb-4">技术栈</h1>
            <h3>持续学习新技术，保持技术栈的现代化和多样性</h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <article v-for="tech in techStackList" :key="tech.name"
                class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="card-body">
                    <div class="flex items-center gap-3">
                        <div class="avatar placeholder">
                            <div
                                class="bg-base-200 text-base-content rounded-full w-10 h-10 flex items-center justify-center">
                                <span class="text-lg leading-none">
                                    <img :src="tech.icon" :alt="tech.name" />
                                </span>
                            </div>
                        </div>

                        <h3 class="card-title text-base sm:text-lg">{{ tech.name }}</h3>

                        <div class="badge">
                            {{ tech.levelValue }}
                        </div>
                    </div>

                    <div>
                        <progress class="progress w-56" :value="tech.percent" max="100"></progress>
                        <span style="margin-left: 2%;">{{ tech.percent }}%</span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>