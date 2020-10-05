<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Collapse',
  methods: {
    cut(childId) {
      this.$children.forEach(child => {
        console.log('ci', child._uid);
        if (child._uid !== childId) {
          child.show = false;
        }
      });
    }
  }
});
</script>
