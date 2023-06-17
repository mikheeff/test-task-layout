<template>
  <dl class="app-content-item">
    <dt class="app-content-item__key">
      <slot name="key" />
    </dt>
    <dd class="app-content-item__value">
      <slot name="value" />
    </dd>
  </dl>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-content-item {
    .app-content-item__key {
      @include utils.apply-styles(utils.$text-caption);
      display: flex;
      margin-bottom: 5px;
    }

    .app-content-item__value {
      display: flex;
      align-items: center;
    }
  }
</style>
