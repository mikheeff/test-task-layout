<script setup lang="ts">
  import type { IconName } from '@/types/IconName';

  interface Props {
    iconName?: IconName;
  }

  // const props = withDefaults(defineProps<Props>(), {
  //   hasIcon: false
  // })

  const props = defineProps<Props>()
</script>

<template>
  <QInput
    class="app-input"
    v-bind="$attrs"
    :outlined="true"
    :dense="true"
  >
    <template
      v-if="props.iconName"
      #prepend
    >
      <QIcon
        class="app-input__icon"
        :name="props.iconName"
      />
    </template>
  </QInput>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .app-input {
    background-color: utils.$color-shade;
    border-radius: 4px;
    width: 100%;

    ::v-deep(.q-field__control) {
      height: 36px;
      border-radius: 4px;

      &:before {
        border-color: utils.$color-shade;
        transition: background-color utils.$transition-duration;
      }

      &:hover:before {
        border-color: utils.$color-shade;
        background-color: utils.$color-gray-light;
      }
    }

    ::v-deep(.q-field__prepend) {
      height: 36px;
      padding-right: utils.spacing-unit(2);
    }

    ::v-deep(.q-field__native) {
      color: utils.$color-neutral;

      &::placeholder {
        color: utils.$color-gray-dark;
      }
    }

    .app-input__icon {
      font-size: 16px;
      color: utils.$color-distinct;
    }
  }
</style>
