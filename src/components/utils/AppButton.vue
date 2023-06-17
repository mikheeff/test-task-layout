<script setup lang="ts">
  import { ButtonType } from '@/types/ButtonType';
  import { IconName } from '@/types/IconName';
  import { computed } from 'vue';

  interface Props {
    type?: ButtonType;
    iconName?: IconName;
    isIcon?: boolean;
    isIconSmall?: boolean;
    isIconLarge?: boolean;
    isSmall?: boolean;
  }

  const BUTTON_CLASS_MAP: Record<ButtonType, string> = {
    [ButtonType.DEFAULT]: 'app-button--default',
    [ButtonType.PRIMARY]: 'app-button--primary',
    [ButtonType.SECONDARY]: 'app-button--secondary',
    [ButtonType.OUTLINE]: 'app-button--outline',
    [ButtonType.LIGHT]: 'app-button--light',
  }

  const props = withDefaults(defineProps<Props>(), {
    type: ButtonType.DEFAULT,
    iconName: undefined,
    isIcon: false,
    isIconSmall: false,
    isIconLarge: false,
    isSmall: false,
  })

  const classes = computed(() => {
    return {
      [BUTTON_CLASS_MAP[props.type]]: true,
      'app-button--icon': props.isIcon,
      'app-button--icon-small': props.isIconSmall,
      'app-button--icon-large': props.isIconLarge,
      'app-button--small': props.isSmall,
    }
  })
</script>

<template>
  <QBtn
    class="app-button"
    :class="classes"
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
    color: utils.$color-distinct;
    padding: utils.spacing-unit(2) utils.spacing-unit(4);

    &.app-button--primary {
      background-color: utils.$color-primary;
      color: utils.$color-white;

      &:active {
        background-color: utils.$color-primary-dark;
      }
    }

    &.app-button--secondary {
      background-color: utils.$color-shade;
    }

    &.app-button--icon {
      padding: 6px;
      min-height: 32px;

      ::v-deep(.q-icon) {
        font-size: 20px;
      }
    }

    &.app-button--icon-small {
      padding: 7px;
      min-height: 28px;

      ::v-deep(.q-icon) {
        font-size: 14px;
      }
    }

    &.app-button--icon-large {
      padding: 11px;
      min-height: 40px;

      ::v-deep(.q-icon) {
        font-size: 18px;
      }
    }

    &.app-button--small {
      padding: 5px 12px 7px;
      min-height: 32px;

      ::v-deep(.q-icon) {
        font-size: 14px;
        margin-right: 6px;
        margin-top: 2px;
      }
    }

    &.app-button--outline {
      padding: 6px 10px;
      background-color: transparent;
      color: utils.$color-distinct;
      border: 1px solid utils.$color-grey-light;
    }

    &.app-button--light {
      background-color: utils.$color-white;
    }
  }
</style>
