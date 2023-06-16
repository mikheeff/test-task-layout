<script setup lang="ts">
  import { ButtonType } from '@/types/ButtonType';
  import { IconName } from '@/types/IconName';
  import { computed } from 'vue';

  interface Props {
    type?: ButtonType;
    iconName?: IconName;
    isIcon?: boolean;
    isIconSmall?: boolean;
  }

  const BUTTON_CLASS_MAP: Record<ButtonType, string> = {
    [ButtonType.DEFAULT]: '',
    [ButtonType.PRIMARY]: 'app-button--primary',
    [ButtonType.SECONDARY]: 'app-button--secondary',
    [ButtonType.OUTLINE]: 'app-button--outline',
  }

  const props = withDefaults(defineProps<Props>(), {
    type: ButtonType.PRIMARY,
    iconName: undefined,
    isIcon: false,
    isIconSmall: false,
  })

  const classes = computed(() => {
    return {
      [BUTTON_CLASS_MAP[props.type]]: true,
      'app-button--icon': props.isIcon,
      'app-button--icon-small': props.isIconSmall,
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

    &.app-button--outline {
      padding: 6px 10px;
      background-color: transparent;
      color: utils.$color-distinct;
      border: 1px solid utils.$color-gray-light;
    }
  }
</style>
