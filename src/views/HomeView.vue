<script setup>
import TechnicalStack from './TechnicalStack.vue';
import SelectedProjects from './SelectedProjects.vue';
import About from './About.vue';
</script>

<template>
    <div class="home">
        <!-- 技术栈 -->
        <TechnicalStack/>
        <div style="height: 3%;"></div>
        <!-- 项目 -->
        <SelectedProjects/>
        <div style="height: 3%;"></div>
        <!-- 关于我 -->
        <!-- <About/> -->
    </div>
</template>