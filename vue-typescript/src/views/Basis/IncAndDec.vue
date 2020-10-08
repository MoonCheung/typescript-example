<template>
  <div>
    <title-name>这是增减按钮</title-name>
    <button @click="() => count++">增加</button>
    <span style="margin: 0 10px">{{ count }}</span>
    <button @click="() => count--" :disabled="count === 0">减少</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import titleName from '@/components/title/index.vue';

export default defineComponent({
  name: 'IncAndDecs',
  components: {
    titleName
  },
  setup() {
    const count = ref<number>(1);

    return {
      count
    };
  }
});
</script>
