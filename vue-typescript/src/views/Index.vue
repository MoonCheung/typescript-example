<template>
  <div class="home">
    <div class="sidebar">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <div class="box">
        <div class="box_item">
          <p class="title">{{ basisName }}</p>
          <ul class="box_item_content">
            <li>
              <router-link to="/basis/1/incAndDec">增减量</router-link>
            </li>
            <li>
              <router-link to="/basis/2/count">计算总数</router-link>
            </li>
            <li>
              <router-link to="/basis/3/prop">Props 实例</router-link>
            </li>
            <li>
              <router-link to="/basis/4/event">$emit&$on(废弃) 实例</router-link>
            </li>
          </ul>
        </div>
        <div class="box_item">
          <p class="title">{{ shizhanName }}</p>
          <ul class="box_item_content">
            <li>
              <router-link to="/shizhan/1/todoList">TodoList MVVM</router-link>
            </li>
          </ul>
        </div>
        <div class="box_item">
          <p class="title">{{ js30Name }}</p>
          <ul class="box_item_content">
            <li>
              <router-link to="/js30/1/drumKit">JS Durm Kit</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      basisName: 'Vue3 基础篇',
      shizhanName: 'Vue3 实战篇',
      js30Name: '基于Vue3的仿Javascript30'
    };
  },
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
