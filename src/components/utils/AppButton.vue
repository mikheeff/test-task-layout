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
  <QBtn
    class="app-button"
    v-bind="$attrs"
    :class="classes"
    :icon="iconName"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
  </QBtn>
</template>

<style scoped lang="scss">
  @use '@/styles/elements/button';
</style>
