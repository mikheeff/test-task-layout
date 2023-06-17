<script setup lang="ts">
  import { TaskPriority } from '@/types/TaskPriority';
  import { IconName } from '@/types/IconName';

  const PRIORITY_ICON_MAP: Record<TaskPriority, IconName> = {
    [TaskPriority.LOW]: IconName.ARROW_DOWNWARD,
    [TaskPriority.HIGH]: IconName.EXPAND_LESS,
    [TaskPriority.URGENT]: IconName.KEYBOARD_DOUBLE_ARROW_UP,
  }

  const PRIORITY_LABEL_MAP: Record<TaskPriority, string> = {
    [TaskPriority.LOW]: 'Low',
    [TaskPriority.HIGH]: 'High',
    [TaskPriority.URGENT]: 'Urgent',
  }

  const PRIORITY_CLASS_MAP: Record<TaskPriority, string> = {
    [TaskPriority.LOW]: 'priority-label--low',
    [TaskPriority.HIGH]: 'priority-label--high',
    [TaskPriority.URGENT]: 'priority-label--urgent',
  }

  interface Props {
    priority: TaskPriority;
  }

  const props = defineProps<Props>()
</script>

<template>
  <span
    class="priority-label"
    :class="PRIORITY_CLASS_MAP[props.priority]"
  >
    <QIcon
      class="priority-label__icon"
      :name="PRIORITY_ICON_MAP[props.priority]"
    />
    {{ PRIORITY_LABEL_MAP[props.priority] }}
  </span>
</template>

<style scoped lang="scss">
  @use '../../styles/utils/index' as utils;

  .priority-label {
    padding: 1px 0 3px;
    display: flex;
    align-items: flex-end;
    @include utils.apply-styles(utils.$text-body-semibold);

    .priority-label__icon {
      font-size: 16px;
      margin-right: utils.spacing-unit(1);
    }

    &.priority-label--low {
      .priority-label__icon {
        color: utils.$color-success;
      }
    }
    &.priority-label--high,
    &.priority-label--urgent {
      .priority-label__icon {
        color: utils.$color-attention;
      }
    }
  }
</style>
