<script setup lang="ts">
  import type { IconName } from '@/types/IconName';
  import AppTag from '@/components/utils/AppTag.vue';

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
      <AppTag
        v-if="$slots.counter"
        class="the-sidebar-item__icon-counter"
      >
        <slot name="counter" />
      </AppTag>
    </QItemSection>

    <QItemSection>
      <slot />
    </QItemSection>

    <QItemSection
      v-if="$slots.counter"
      :side="true"
    >
      <AppTag
        v-if="$slots.counter"
        class="the-sidebar-item__counter"
      >
        <slot name="counter" />
      </AppTag>
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

    .the-sidebar-item__section {
      position: relative;
    }

    .the-sidebar-item__icon {
      color: utils.$color-icon-light;
    }

    .the-sidebar-item__icon-counter {
      position: absolute;
      top: -7px;
      right: -7px;
    }
  }
</style>
