<script setup>
// 技术栈数据
const techStackList = [
    {
        name: 'Java',
        level: 3,
        levelValue: '高级',
        percent: '90',
        icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-java-is-a-general-purpose-programming-language-that-is-class-based-logo-color-tal-revivo.png',
    },
    {
        name: 'SpringBoot',
        level: 3,
        levelValue: '高级',
        percent: '90',
        icon: 'https://img.icons8.com/color/48/spring-logo.png',
    },
    {
        name: 'Vue',
        level: 2,
        levelValue: '中级',
        percent: '80',
        icon: 'https://img.icons8.com/color/48/vue-js.png',
    },
    {
        name: 'JavaScript',
        level: 2,
        levelValue: '中级',
        percent: '70',
        icon: 'https://img.icons8.com/pulsar-gradient/48/javascript.png',
    },
    {
        name: 'Docker',
        level: 3,
        levelValue: '高级',
        percent: '90',
        icon: 'https://img.icons8.com/dusk/50/docker.png',
    },
];
</script>

<template>
    <section class="mx-auto max-w-6xl px-4 py-6">
        <h2 class="text-xl font-semibold mb-4">技术栈</h2>

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