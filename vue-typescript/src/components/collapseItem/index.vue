<template>
  <div>
    <div class="title" @click="change">{{ title }}</div>
    <div v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CollapseItem',
  props: ['title'],
  data() {
    return {
      show: false
    };
  },
  methods: {
    change() {
      console.log('手风琴子组件:', this._uid);
      this.$parent.cut(this._uid);
      this.show = !this.show;
    }
  }
});
</script>
