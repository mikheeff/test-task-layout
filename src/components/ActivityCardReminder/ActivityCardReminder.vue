<script setup lang="ts">
  import { computed } from 'vue';
  import { Utils } from '@/classes/utils';
  import { IconName } from '@/types/IconName';

  interface Props {
    date: string;
  }
  const props = defineProps<Props>();

  const isPastActivity = computed(() => new Date(props.date) < new Date());
  const isUpcomingActivity = computed(() => {
    return Utils.isToday(new Date(props.date)) || Utils.isTomorrow(new Date(props.date));
  });
  const dateLabel = computed(() => {
    const time = Utils.getTimeFromISODate(props.date);
    if (Utils.isTomorrow(new Date(props.date))) {
      return `Tomorrow ${time}`;
    }

    if (Utils.isToday(new Date(props.date))) {
      return `Today ${time}`;
    }

    return '';
  });

  const classes = computed(() => ({
    'activity-card-reminder--warning': isUpcomingActivity.value,
    'activity-card-reminder--attention': isPastActivity.value,
  }));
</script>

<template>
  <span
    v-if="isPastActivity || isUpcomingActivity"
    class="activity-card-reminder"
    :class="classes"
  >
    <template v-if="isUpcomingActivity">
      <QIcon
        class="activity-card-reminder__icon"
        size="16px"
        :name="IconName.NOTIFICATIONS"
      />
      {{ dateLabel }}
    </template>
    <template v-else>
      <QIcon
        class="activity-card-reminder__icon"
        :name="IconName.ERROR"
        size="16px"
      />
      Task overdue
    </template>
  </span>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .activity-card-reminder {
    display: flex;
    align-items: center;
    @include utils.apply-styles(utils.$text-body-semibold);

    &.activity-card-reminder--warning {
      color: utils.$color-warning;
    }

    &.activity-card-reminder--attention {
      color: utils.$color-attention;
    }

    .activity-card-reminder__icon {
      margin-right: utils.spacing-unit(1);
    }
  }
</style>
