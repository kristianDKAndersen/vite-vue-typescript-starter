<script lang="ts">
import { RouterView } from 'vue-router';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const bunm = 'bunm';
    const chone = 'chone';

    return {
      bunm,
      chone,
      RouterView,
    };
  },
});
</script>

<template>
  <main class="mx-auto flex h-full flex-col items-center">
    <RouterView />
  </main>
</template>

<style scoped></style>
