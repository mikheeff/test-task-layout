<script setup lang="ts">
  import TheHeader from '@/components/TheHeader/TheHeader.vue';
  import TheSidebar from '@/components/TheSidebar/TheSidebar.vue';
</script>

<template>
  <div
    id="layout-app"
    class="app"
  >
    <QLayout
      view="lHh Lpr lff"
      class="app__layout"
    >
      <TheHeader class="app__header" />
      <TheSidebar class="app__sidebar" />
    </QLayout>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .app {
    background-color: utils.$color-gray;
  }
</style>
