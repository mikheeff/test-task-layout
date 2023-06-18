<script setup lang="ts">

  import { IconName } from '@/types/IconName';
  import AppChip from '@/components/utils/AppChip.vue';
</script>

<template>
  <div class="contact-activities-controls">
    <div class="contact-activities-controls__filters">
      <AppChip class="contact-activities-controls__filter">
        All
        <span class="contact-activities-controls__filter-count">
          64
        </span>
      </AppChip>
      <AppChip class="contact-activities-controls__filter">
        Deals
        <span class="contact-activities-controls__filter-count">
          10
        </span>
      </AppChip>
      <AppChip class="contact-activities-controls__filter">
        Tasks
        <span class="contact-activities-controls__filter-count">
          12
        </span>
      </AppChip>
      <AppChip class="contact-activities-controls__filter">
        Calls
        <span class="contact-activities-controls__filter-count">
          3
        </span>
      </AppChip>
      <AppChip class="contact-activities-controls__filter">
        Emails
        <span class="contact-activities-controls__filter-count">
          24
        </span>
      </AppChip>
      <AppChip
        class="contact-activities-controls__filter"
        :is-grey="true"
        :icon-name="IconName.MORE_VERT"
      >
        More
      </AppChip>
    </div>
    <button class="contact-activities-controls__sort-button">
      Newest first
      <QIcon
        class="contact-activities-controls__sort-button-icon"
        size="16px"
        :name="IconName.ARROW_DROP_DOWN"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
  @use '../../styles/utils/index' as utils;

  .contact-activities-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: utils.spacing-unit(2);

    .contact-activities-controls__filters {
      display: flex;
      gap: utils.spacing-unit(1);
    }

    .contact-activities-controls__filter {
      &:focus {
        ::v-deep(.q-focus-helper) {
          background: currentColor;
          opacity: 0.15;
        }
      }
    }

    .contact-activities-controls__filter-count {
      color: utils.$color-icon-light;
      margin-left: utils.spacing-unit(1);
    }

    .contact-activities-controls__sort-button {
      @include utils.button-no-styles;
      color: utils.$color-neutral;
      display: flex;
      align-items: center;
      transition: color utils.$transition-duration;

      &:hover {
        color: utils.$color-distinct;
      }
    }

    .contact-activities-controls__sort-button-icon {
      color: utils.$color-distinct;
      margin-left: 2px;
    }
  }
</style>
