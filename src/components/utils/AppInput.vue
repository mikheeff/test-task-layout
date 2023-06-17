<script setup lang="ts">
  import type { IconName } from '@/types/IconName';
  import type { QInputProps } from 'quasar';
  import { InputType } from '@/types/InputType';
  import { computed } from 'vue';

  type Props = {
    iconName?: IconName;
    inputType?: InputType;
    isLarge?: boolean;
  } & Pick<QInputProps, 'modelValue'>

  interface Emits {
    (event: 'update:model-value', value: QInputProps['modelValue']): void;
  }

  const INPUT_CLASS_MAP: Record<InputType, string> = {
    [InputType.DEFAULT]: 'app-input--default',
    [InputType.LIGHT]: 'app-input--light',
    [InputType.WARNING]: 'app-input--warning',
  }

  const props = withDefaults(defineProps<Props>(),  {
    inputType: InputType.DEFAULT,
    iconName: undefined,
  })

  const emit = defineEmits<Emits>();

  const classes = computed(() => {
    return {
      [INPUT_CLASS_MAP[props.inputType]]: true,
      'app-input--large': props.isLarge
    }
  })
</script>

<template>
  <QInput
    class="app-input"
    :class="classes"
    v-bind="$attrs"
    :model-value="modelValue"
    :outlined="true"
    :dense="true"
    @update:model-value="(value) => emit('update:model-value', value)"
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

  $input-height-large: 40px;
  $input-height: 36px;

  .app-input {
    background-color: utils.$color-shade;
    border-radius: 4px;
    width: 100%;

    &.app-input--large {
      ::v-deep(.q-field__prepend) {
        height: $input-height-large;
      }
    }

    &.app-input--light {
      background-color: utils.$color-white;
    }

    &.app-input--warning {
      background-color: utils.$color-yellow-light;

      &.q-field--highlighted {
      ::v-deep(.q-field__control:after) {
          border-color: utils.$color-warning;
        }
      }

      ::v-deep(.q-field__control) {
        &:before {
          border-color: utils.$color-yellow;
        }

        &:hover:before {
          border-color: utils.$color-yellow;
          background-color: utils.$color-yellow;
        }
      }
    }

    &:not(&.q-textarea--autogrow) {
      ::v-deep(.q-field__control) {
        height: $input-height;
      }

      &.app-input--large {
        ::v-deep(.q-field__control) {
          height: $input-height-large;
        }
      }
    }

    ::v-deep(.q-field__control) {
      border-radius: 4px;

      &:before {
        border-color: utils.$color-shade;
        transition: background-color utils.$transition-duration;
      }

      &:hover:before {
        border-color: utils.$color-shade;
        background-color: utils.$color-grey-light;
      }
    }

    ::v-deep(.q-field__prepend) {
      height: $input-height;
      padding-right: utils.spacing-unit(2);
    }

    ::v-deep(.q-field__native) {
      color: utils.$color-neutral;

      &::placeholder {
        color: utils.$color-grey-dark;
      }
    }

    .app-input__icon {
      font-size: 16px;
      color: utils.$color-distinct;
    }
  }
</style>
