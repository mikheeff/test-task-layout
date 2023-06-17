<script setup lang="ts">
  import TheHeader from '@/components/TheHeader/TheHeader.vue';
  import TheSidebar from '@/components/TheSidebar/TheSidebar.vue';
  import MainPage from '@/components/ContactPage/ContactPage.vue';
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
      <QPageContainer class="app__container">
        <div class="app__page-container">
          <MainPage />
        </div>
      </QPageContainer>
    </QLayout>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .app {
    background-color: utils.$color-shade;

    .app__page-container {
      max-width: 1100px;
      margin: 0 auto;
    }
  }
</style>
