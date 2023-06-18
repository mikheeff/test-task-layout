<script setup lang="ts">
  import type { IconName } from '@/types/IconName';

  interface Props {
    isActive?: boolean;
    iconName: IconName;
  }

  const props = withDefaults(defineProps<Props>(), {
    isActive: false,
  });
</script>

<template>
  <QItem
    class="the-sidebar-item"
    :clickable="true"
    :active="props.isActive"
  >
    <QItemSection
      class="the-sidebar-item__section"
      :side="true"
    >
      <QIcon
        class="the-sidebar-item__icon"
        :name="iconName"
        size="20px"
      />
    </QItemSection>

    <QItemSection>
      <slot />
    </QItemSection>

    <QItemSection
      v-if="$slots['side-content']"
      :side="true"
    >
      <slot name="side-content" />
    </QItemSection>
  </QItem>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .the-sidebar-item {
    padding: 10px utils.spacing-unit(4);
    display: flex;
    align-items: center;
    color: utils.$color-icon-light;
    border-radius: 4px;
    min-height: 40px;
    user-select: none;
    @include utils.apply-styles(utils.$text-body-semibold);

    &.q-item--active {
      background: rgba(255, 255, 255, 0.1);
      color: utils.$color-white;

      .the-sidebar-item__icon {
        color: utils.$color-white;
      }
    }

    &.q-hoverable:hover {
      ::v-deep( > .q-focus-helper) {
        &:after {
          opacity: 0.1;
        }
      }
    }

    .the-sidebar-item__icon {
      color: utils.$color-icon-light;
    }
  }
</style>
