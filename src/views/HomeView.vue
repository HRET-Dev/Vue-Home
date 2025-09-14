<script setup>
import TechnologyStack from "@/views/TechnologyStack.vue";
import SkillsExpertise from "@/views/SkillsExpertise.vue";
import SiteView from "@/views/SiteView.vue";
</script>

<template>
    <div class="min-w-60 m-5 sm:m-auto">
      <div class="rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
        <!--技术栈-->
        <technology-stack />
        <div class="h-6"></div>
        <!--技术专长-->
        <skills-expertise />
        <div class="h-6"></div>
        <!--个人网站-->
        <site-view />
      </div>
    </div>
</template>
