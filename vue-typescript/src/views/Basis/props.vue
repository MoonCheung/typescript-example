<template>
  <div>
    <title-name>Props 实例</title-name>
    <v-props
      name="hello Vue3的API相应props name"
      :is-visible="true"
      :types="status"
      @change="handlePropChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VProps from '@/components/props/index.vue';
import titleName from '@/components/title/index.vue';

interface PropType {
  type: string;
}

export default defineComponent({
  name: 'Props',
  components: {
    VProps,
    titleName
  },
  setup() {
    const status = reactive<PropType>({
      type: 'success'
    });

    return {
      status
    };
  },
  methods: {
    handlePropChange(e: string) {
      this.status.type = e;
    }
  }
});
</script>
