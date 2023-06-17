<script lang="ts" setup>
  import { AppStatusChipType } from '@/types/AppStatusChipType';

  interface Props {
    type?: AppStatusChipType;
  }

  const APP_STATUS_CHIP_CLASS_MAP: Record<AppStatusChipType, string> = {
    [AppStatusChipType.PURPLE]: 'app-status-chip--purple',
    [AppStatusChipType.GREY]: 'app-status-chip--grey',
    [AppStatusChipType.MINT]: 'app-status-chip--mint',
    [AppStatusChipType.GREEN]: 'app-status-chip--green',
  };

  const props = withDefaults(defineProps<Props>(), {
    type: AppStatusChipType.GREY
  });
</script>

<template>
  <QChip
    :class="APP_STATUS_CHIP_CLASS_MAP[props.type]"
    class="app-status-chip"
  >
    <slot />
  </QChip>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-status-chip {
    margin: 0;
    padding: 3px utils.spacing-unit(2);
    text-transform: uppercase;
    border: 1px solid;

    @include utils.apply-styles(utils.$text-chip);

    &.app-status-chip--purple {
      background-color: utils.$color-purple-light;
      border-color: utils.$color-purple;
      color: utils.$color-purple-dark
    }

    &.app-status-chip--green {
      background-color: utils.$color-green-light;
      border-color: utils.$color-green;
      color: utils.$color-green-dark
    }
  }
</style>
