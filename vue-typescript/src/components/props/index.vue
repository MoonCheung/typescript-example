<template>
  <div>
    name: {{ name }}
    <br />
    types: {{ types }}
    <br />
    list: {{ list }}
    <br />
    isVisible: {{ isVisible }}
    <br />
    <button @click="handleClick">改变类型</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface ChildPropsType {
  name?: string;
  list?: [string | number];
  isVisible?: boolean;
  onChange?: () => void;
}

export default defineComponent({
  name: 'PropsCmpt',
  props: {
    name: String as PropType<ChildPropsType>,
    // 自定义验证函数
    types: {
      validator: function(value: string): boolean {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].includes(value);
      }
    },
    list: {
      type: Array as PropType<ChildPropsType>,
      default: () => []
    },
    isVisible: {
      type: Boolean as PropType<ChildPropsType>,
      default: false
    },
    onChange: {
      type: Function as PropType<ChildPropsType>,
      default: () => {}
    }
  },
  methods: {
    handleClick(): void {
      (this.onChange as any)(this.types === 'success' ? 'success' : 'warning');
    }
  }
});
</script>
