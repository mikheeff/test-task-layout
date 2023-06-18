<script lang="ts" setup>
  import { AppStatusChipType } from '@/types/AppStatusChipType';

  interface Props {
    type?: AppStatusChipType;
  }

  const APP_STATUS_CHIP_CLASS_MAP: Record<AppStatusChipType, string> = {
    [AppStatusChipType.PURPLE]: 'app-status-chip--purple',
    [AppStatusChipType.PURPLE_DOT]: 'app-status-chip--purple-dot',
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
      color: utils.$color-purple-dark;
    }

    &.app-status-chip--green {
      background-color: utils.$color-green-light;
      border-color: utils.$color-green;
      color: utils.$color-green-dark;
    }

    &.app-status-chip--purple-dot {
      padding: utils.spacing-unit(1) 0;
      text-transform: none;
      color: utils.$color-distinct;
      background-color: transparent;
      border-color: transparent;
      letter-spacing: 0;
      @include utils.apply-styles(utils.$text-body-semibold);

      &:before {
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: utils.$color-violet;

        margin-right: utils.spacing-unit(2);
      }
    }

    &.app-status-chip--grey {
      background-color: utils.$color-cold-grey-light;
      border-color: utils.$color-cold-grey;
      color: utils.$color-cold-grey-dark;
    }

    &.app-status-chip--mint {
      background-color: utils.$color-mint-light;
      border-color: utils.$color-mint;
      color: utils.$color-mint-dark;
    }
  }
</style>
