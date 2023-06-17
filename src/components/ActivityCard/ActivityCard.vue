<script setup lang="ts">

  import ActivityCardStatusChip from '@/components/ActivityCardStatusChip/ActivityCardStatusChip.vue';
  import { ActivityStatus } from '@/types/ActivityStatus';
  import PriorityLabel from '@/components/PriorityLabel/PriorityLabel.vue';
  import { TaskPriority } from '@/types/TaskPriority';
  import { IconName } from '@/types/IconName';
</script>

<template>
  <div class="activity-card">
    <div class="activity-card-label activity-card__label">
      <div class="activity-card-label__icon-container">
        <QIcon
          class="activity-card-label__icon"
          :name="IconName.ASSIGNMENT_TURNED_IN"
        />
      </div>
      <div class="activity-card-label__line" />
    </div>
    <div class="card-content activity-card__content">
      <div class="card-content__header">
        <h4 class="card-content__type">
          Task
        </h4>
        <span class="card-content__date">
          19 Jun, 2021 09:35 am
        </span>
      </div>
      <h4 class="card-content__title">
        Product demo call with Ruth
      </h4>
      <p class="card-content__text">
        Please call and explain the customer about our product and answer.
      </p>
      <div class="card-content__footer">
        <div class="card-content__info">
          <ActivityCardStatusChip :status="ActivityStatus.NEED_ATTENTION" />
          <PriorityLabel :priority="TaskPriority.HIGH" />
        </div>
        <QAvatar size="24px">
          <img
            src="@/assets/images/ticket-avatar.png"
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
