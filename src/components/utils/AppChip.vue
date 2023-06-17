<script setup lang="ts">
  import type { IconName } from '@/types/IconName';

  interface Props {
    isGrey?: boolean;
    isClickable?: boolean;
    iconName: IconName;
  }
  const props = withDefaults(defineProps<Props>(), {
    isGrey: false,
    isClickable: true,
    iconName: undefined,
  })
</script>

<template>
  <QChip
    class="app-chip"
    :class="{'app-chip--grey': props.isGrey}"
    :clickable="props.isClickable"
    :icon="iconName"
  >
    <slot />
  </QChip>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-chip {
    padding: utils.spacing-unit(1) utils.spacing-unit(3);
    background-color: utils.$color-white;
    color: utils.$color-distinct;
    margin: 0;
    box-shadow: none !important;
    @include utils.apply-styles(utils.$text-caption);

    ::v-deep(.q-chip__icon--left) {
      font-size: 16px;
      color: utils.$color-distinct;
    }

    &.app-chip--grey {
      background-color: utils.$color-distinct;
      color: utils.$color-white;

      ::v-deep(.q-chip__icon--left) {
        color: utils.$color-white;
      }
    }
  }
</style>
