<script setup lang="ts">
  interface Props {
    isSmall?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    isSmall: false
  });
</script>
<template>
  <QTabs
    class="app-tabs"
    :class="{ 'app-tabs--small': props.isSmall }"
  >
    <slot />
  </QTabs>
</template>

<style scoped lang="scss">
@use '@/styles/utils/_index.scss' as utils;

  .app-tabs {
    ::v-deep(.q-tabs__content) {
      gap: utils.spacing-unit(8);
    }

    &.app-tabs--small {
      ::v-deep(.app-tab) {
        min-height: 31px;
      }
      ::v-deep(.q-tabs__content) {
        gap: utils.spacing-unit(6);
      }
    }
  }
</style>
