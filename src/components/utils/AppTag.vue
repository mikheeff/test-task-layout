<template>
  <span class="app-tag">
    <slot />
  </span>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .app-tag {
    @include utils.apply-styles(utils.$text-caption);
    color: utils.$color-white;
    padding: 0 6px;
    background-color: utils.$color-attention;
    border-radius: 12px;
    display: flex;
  }
</style>
