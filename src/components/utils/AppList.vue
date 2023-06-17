<template>
  <QList class="app-list">
    <slot />
  </QList>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-list {
    padding: 10px 0;
    width: 188px;

    ::v-deep(.q-separator) {
      background-color: utils.$color-grey-light;
    }
  }
</style>
