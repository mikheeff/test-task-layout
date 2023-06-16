<template>
  <QTabs class="app-tabs">
    <slot />
  </QTabs>
</template>

<style scoped lang="scss">
@use '@/styles/utils/_index.scss' as utils;

  .app-tabs {
    ::v-deep(.q-tabs__content) {
      gap: utils.spacing-unit(8);
    }
  }
</style>
