<template>
  <QItemSection class="app-menu-item-section">
    <slot />
  </QItemSection>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-menu-item-section {
    @include utils.apply-styles(utils.$text-body-semibold);
    padding-right: 10px;

    &.q-item__section--avatar {
      min-width: auto;
      padding-top: utils.spacing-unit(1);

      ::v-deep(.q-icon) {
        font-size: 16px;
      }
    }
  }
</style>
