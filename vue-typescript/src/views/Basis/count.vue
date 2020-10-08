<template>
  <div class="count">
    <input v-model.trim="num1" oninput="value=value.replace(/[^\d]/g,'')" />
    <span>+</span>
    <input v-model.trim="num2" oninput="value=value.replace(/[^\d]/g,'')" />
    <span>=</span>
    <span>{{ count }}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

interface CountType {
  num1: number;
  num2: number;
  count: any;
}

const countStatus = function() {
  const state: any = reactive<CountType>({
    num1: 0,
    num2: 0,
    count: computed<number>(() => parseInt(state.num1) + parseInt(state.num2))
  });
  return toRefs(state);
};

export default defineComponent({
  name: 'Count',
  setup() {
    // 解构对象
    const { num1, num2, count } = countStatus();

    onBeforeMount(() => {
      console.log('onBeforeMount!');
    });
    onMounted(() => {
      console.log('mounted!');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate value:', num1.value, num2.value);
    });
    onUpdated(() => {
      console.log('updated value:', num1.value, num2.value);
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });

    return {
      num1,
      num2,
      count
    };
  }
});
</script>
