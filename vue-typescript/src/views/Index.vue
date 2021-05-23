<template>
  <div class="home">
    <div class="sidebar">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <div class="box">
        <div class="box_item">
          <p class="title">{{ names.basisName }}</p>
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
          <p class="title">{{ names.shizhanName }}</p>
          <ul class="box_item_content">
            <li>
              <router-link to="/shizhan/1/todoList">TodoList MVVM</router-link>
            </li>
            <li>
              <router-link to="/shizhan/2/canvas">canvas图形</router-link>
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
import { defineComponent, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface NameType {
  basisName: string;
  shizhanName: string;
}

export default defineComponent({
  name: 'Home',
  setup() {
    const names = reactive<NameType>({
      basisName: 'Vue3 基础篇',
      shizhanName: 'Vue3 实战篇'
    });
    // 第一种路由方法
    const router = useRouter();
    const route = useRoute();
    // mounted;
    onMounted(() => {
      console.log('查看路由器:', router);
      console.log('查看路由:', route.name);
    });

    return {
      names
    };
  }
});
</script>
