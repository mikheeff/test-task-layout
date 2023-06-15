<script setup lang="ts">
  import { ButtonType } from '@/types/ButtonType';
  import { IconName } from '@/types/IconName';

  const BUTTON_CLASS_MAP: Record<ButtonType, string> = {
    [ButtonType.PRIMARY]: 'app-button--primary',
    [ButtonType.SECONDARY]: 'app-button--secondary',
    [ButtonType.ICON_SMALL]: 'app-button--icon-small',
    [ButtonType.OUTLINE]: 'app-button--outline',
  }

  interface Props {
    type?: ButtonType;
    iconName?: IconName;
  }

  const props = withDefaults(defineProps<Props>(), {
    type: ButtonType.PRIMARY,
    iconName: undefined,
  })
</script>

<template>
  <QBtn
    class="app-button"
    :class="BUTTON_CLASS_MAP[props.type]"
    :icon="iconName"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
  </QBtn>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .app-button {
    @include utils.apply-styles(utils.$text-body-semibold);
    text-transform: none;

    &.app-button--primary {
      background-color: utils.$color-primary;
      padding: utils.spacing-unit(2) utils.spacing-unit(4);
      color: utils.$color-white;

      &:active {
        background-color: utils.$color-primary-dark;
      }
    }

    &.app-button--secondary {
      background-color: utils.$color-shade;
      color: utils.$color-distinct;
    }

    &.app-button--icon-small {
      padding: 6px;
      color: utils.$color-distinct;
      min-height: 32px;

      ::v-deep(.q-icon) {
        font-size: 20px;
      }
    }

    &.app-button--outline {
      padding: 6px 10px;
      background-color: transparent;
      color: utils.$color-distinct;
      border: 1px solid utils.$color-gray-light;
    }
  }
</style>
