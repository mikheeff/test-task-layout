<script setup lang="ts">
  import { useButton } from '@/composables/button';
  import type { ButtonProps }  from '@/composables/button';
  import { ButtonType } from '@/types/ButtonType';

  const props = withDefaults(defineProps<ButtonProps>(), {
    type: ButtonType.DEFAULT,
    iconName: undefined,
    isIcon: false,
    isIconSmall: false,
    isIconLarge: false,
    isSmall: false,
  });

  const { classes } = useButton(props);
</script>

<template>
  <QBtnDropdown
    v-bind="$attrs"
    class="app-dropdown app-button"
    :class="classes"
  >
    <template #label>
      <slot name="label" />
    </template>
    <slot />
  </QBtnDropdown>
</template>

<style scoped lang="scss">
  @use '@/styles/elements/button';

  .app-dropdown {
    ::v-deep(.q-btn-dropdown__arrow) {
      display: none;
    }
  }
</style>
