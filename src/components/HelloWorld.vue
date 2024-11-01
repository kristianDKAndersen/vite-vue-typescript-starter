<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const badabing: string = 'badabing';

    return {
      badabing,
    };
  },
});
</script>

<template>
  <h2>Hello World</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
