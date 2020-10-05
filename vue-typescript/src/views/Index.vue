<template>
  <div class="home">
    <div class="sidebar">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <div class="box">
        <div class="box-item">
          <p class="title">Account</p>
          <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
          </ul>
        </div>
        <div class="box-item">
          <p class="title">Messages</p>
          <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
          </ul>
        </div>
        <div class="box-item ">
          <p class="title">Settings</p>
          <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
          </ul>
        </div>
        <div class="box-item">
          <p class="title">Logout</p>
          <ul class="box-item-content">
            <li>language</li>
            <li>love</li>
            <li>picture</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Home',
  setup() {
    // 第一种路由方法
    const router = useRouter();
    const route = useRoute();
    // mounted;
    onMounted(() => {
      console.log('查看路由器:', router);
      console.log('查看路由:', route.name);
    });
  }
});
</script>
