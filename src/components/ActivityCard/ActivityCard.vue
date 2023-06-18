<script setup lang="ts">
  import ActivityCardStatusChip from '@/components/ActivityCardStatusChip/ActivityCardStatusChip.vue';
  import PriorityLabel from '@/components/PriorityLabel/PriorityLabel.vue';
  import { IconName } from '@/types/IconName';
  import type { Activity } from '@/types/Activity';
  import { ActivityType } from '@/types/ActivityType';
  import { computed } from 'vue';
  import { Utils } from '@/classes/utils';

  interface Props {
    activity: Activity;
  }

  const ACTIVITY_TYPE_NAME_MAP: Record<ActivityType, string> = {
    [ActivityType.TASK]: 'Task',
    [ActivityType.DEAL]: 'Deal',
    [ActivityType.TICKET]: 'Ticket',
    [ActivityType.EMAIL_CAMPAIGN]: 'Email Campaign',
    [ActivityType.TEXT_MESSAGE_CAMPAIGN]: 'Text Message Campaign',
    [ActivityType.EMAIL]: 'Email',
    [ActivityType.CHAT]: 'Chat',
  };

  const ACTIVITY_TYPE_LABEL_ICON_MAP: Record<ActivityType, IconName> = {
    [ActivityType.TASK]: IconName.ASSIGNMENT_TURNED_IN,
    [ActivityType.DEAL]: IconName.PAID,
    [ActivityType.TICKET]: IconName.MAIL,
    [ActivityType.EMAIL_CAMPAIGN]: IconName.CAMPAIGN,
    [ActivityType.TEXT_MESSAGE_CAMPAIGN]: IconName.CAMPAIGN,
    [ActivityType.EMAIL]: IconName.MAIL,
    [ActivityType.CHAT]: IconName.FORUM,
  };

  const props = defineProps<Props>();

  const TEXT_MAX_LENGTH = 75;
  const text = computed(() => props.activity.text.length > TEXT_MAX_LENGTH
    ? props.activity.text.slice(0, TEXT_MAX_LENGTH).concat('...')
    : props.activity.text);

  const date = computed(() => Utils.convertISODate(props.activity.date));
  const isPastActivity = computed(() => new Date(props.activity.date) < new Date());
  const isUpcomingActivity = computed(() => {
    const difference = Utils.differenceInDays(new Date(props.activity.date), new Date());

    return difference >= 0 && difference <= 2;
  });
</script>

<template>
  <div class="activity-card">
    <div class="activity-card-label activity-card__label">
      <div class="activity-card-label__icon-container">
        <QIcon
          class="activity-card-label__icon"
          :name="ACTIVITY_TYPE_LABEL_ICON_MAP[props.activity.type]"
        />
      </div>
      <div class="activity-card-label__line" />
    </div>
    <div class="card-content activity-card__content">
      <div class="card-content__header">
        <h4 class="card-content__type">
          {{ ACTIVITY_TYPE_NAME_MAP[props.activity.type] }}
        </h4>
        <span
          class="card-content__date"
          :class="{ 'card-content__date--past': isPastActivity, 'card-content__date--upcoming': isUpcomingActivity }"
        >
          {{ date }}
        </span>
      </div>
      <h4 class="card-content__title">
        {{ props.activity.title }}
      </h4>
      <p class="card-content__text">
        {{ text }}
      </p>
      <div class="card-content__footer">
        <div class="card-content__info">
          <ActivityCardStatusChip :status="props.activity.status" />
          <PriorityLabel
            v-if="props.activity.priority"
            :priority="props.activity.priority"
          />
        </div>
        <QAvatar size="24px">
          <img
            :src="props.activity.contactImage"
            alt="ticket-avatar"
          >
        </QAvatar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .activity-card {
    display: flex;

    .activity-card__content {
      display: flex;
      flex-grow: 1;
      background-color: utils.$color-white;
      border-radius: 4px;
      padding: utils.spacing-unit(4);
    }
  }

  .activity-card-label {
    padding: 10px 10px 0 0;
    display: flex;
    flex-direction: column;

    .activity-card-label__icon-container {
      display: flex;
      flex-shrink: 0;
      padding: 10px;
      border-radius: 50%;
      background-color: utils.$color-white;
      margin-bottom: 10px;
    }

    .activity-card-label__icon {
      font-size: 16px;
    }

    .activity-card-label__line {
      position: relative;
      display: flex;
      flex-grow: 1;

      &:before {
        @include utils.absolute-x-center;
        content: '';
        width: 1px;
        background-color: utils.$color-grey-light;
        height: 100%;
      }
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;

    .card-content__type {
      @include utils.apply-styles(utils.$text-caption-bold);
      color: utils.$color-icon-light;
    }

    .card-content__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      margin-bottom: utils.spacing-unit(2);
    }

    .card-content__date {
      @include utils.apply-styles(utils.$text-body-regular);
      color: utils.$color-distinct;

      &.card-content__date--past {
        color: utils.$color-attention;
      }

      &.card-content__date--upcoming {
        color: utils.$color-warning;
      }
    }

    .card-content__title {
      @include utils.apply-styles(utils.$text-subhead-semibold);
      color: utils.$color-neutral;
      margin-bottom: utils.spacing-unit(2);
    }

    .card-content__text {
      color: utils.$color-neutral;
      margin-bottom: 14px;
    }

    .card-content__footer {
      display: flex;
      justify-content: space-between;
    }

    .card-content__info {
      display: flex;
      align-items: center;
      gap: utils.spacing-unit(6);
    }
  }
</style>
