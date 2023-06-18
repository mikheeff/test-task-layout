<template>
  <QItem
    class="app-menu-item-section"
    v-bind="$attrs"
  >
    <slot />
  </QItem>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-menu-item-section {
    min-height: auto;
    padding: 5px utils.spacing-unit(5) 7px;
  }
</style>
