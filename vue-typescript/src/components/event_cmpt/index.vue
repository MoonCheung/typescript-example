<template>
  <div>
    name:{{ name || '默认值为空' }}<br />
    <input :value="name" @input="handleChange($event)" />
    <button @click="handleChickReset">重置成功</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'childEvent',
  props: {
    name: {
      type: [String, Object]
    }
  },
  methods: {
    handleChange(event: any) {
      // 阻止捕获或者冒泡阶段中当前事件的进一步传播
      event.stopPropagation();
      this.$emit('change', event);
    },
    handleChickReset(event: any) {
      // 阻止捕获或者冒泡阶段中当前事件的进一步传播
      event.stopPropagation();
      document.getElementsByTagName('input')[0].value = '';
      this.$emit('clear');
    }
  }
});
</script>
