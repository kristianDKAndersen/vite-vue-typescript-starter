<template>
  <div>
    <h1 class="text-lg">Front Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AdminDashboard',
  setup() {
    const somevar = 1;
    return {
      somevar,
    };
  },
});
</script>
