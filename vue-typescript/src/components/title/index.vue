<template>
  <div>
    <h4 class="titleName">
      <!-- 插槽内容 -->
      <slot></slot>
    </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleName'
});
</script>
