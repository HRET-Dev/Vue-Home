<script setup>
import ProfileHeader from "@/views/ProfileHeader.vue";
import SiteView from "@/views/SiteView.vue";
</script>

<template>
    <div class="min-w-60 m-auto">
      <!-- 用户信息 -->
      <profile-header />
      <!--网站列表-->
      <site-view class="mt-5" />
    </div>
</template>
