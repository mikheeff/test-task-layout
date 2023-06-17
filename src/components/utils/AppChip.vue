<template>
  <QChip
    class="app-chip"
    :square="true"
    :dense="true"
  >
    <slot />
  </QChip>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-chip {
    padding: 0 6px 2px;
    background-color: utils.$color-input;
    color: utils.$color-distinct;
    margin: 0;
  }
</style>
