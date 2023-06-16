<template>
  <QTab class="app-tab">
    <slot />
  </QTab>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .app-tab {
    padding: 0;
    min-height: 36px;

    &.q-hoverable:hover {
      ::v-deep( > .q-focus-helper) {
        border-radius: 3px;
      }
    }

    ::v-deep(.q-tab__content) {
      @include utils.apply-styles(utils.$text-body-semibold);
      flex-direction: row;
      text-transform: none;
      padding: 0;
      align-items: flex-start;
    }

    ::v-deep(.q-tab__indicator) {
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      background-color: utils.$color-primary;
    }
  }
</style>
