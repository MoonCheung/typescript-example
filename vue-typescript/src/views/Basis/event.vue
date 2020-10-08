<template>
  <div>
    <title-name>$emit&$on(废弃) 实例</title-name>
    <child-event :name="name" @change="handleEventChange" @clear="handleClearInput" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import titleName from '@/components/title/index.vue';
import childEvent from '@/components/event_cmpt/index.vue';

export default defineComponent({
  name: 'Event',
  components: {
    childEvent,
    titleName
  },
  setup() {
    const name = ref<string>('');

    const handleEventChange = (event: any): void => {
      name.value = event.target.value;
    };

    const handleClearInput = (): void => {
      name.value = '';
    };

    return {
      name,
      handleEventChange,
      handleClearInput
    };
  }
});
</script>
