<script setup lang="ts">
  import { IconName } from '@/types/IconName';
  import { ButtonType } from '@/types/ButtonType';
  import AppTabs from '@/components/utils/AppTabs.vue';
  import AppTab from '@/components/utils/AppTab.vue';
  import AppButton from '@/components/utils/AppButton.vue';

  import { ref } from 'vue';

  enum Tab {
    ACTIVITIES = 'ACTIVITIES',
    LOGS = 'LOGS',
    VISITS = 'VISITS',
    FILES = 'FILES',
  }

  const selectedTab = ref(Tab.ACTIVITIES)
</script>

<template>
  <div class="contact-control-panel">
    <div class="contact-info contact-control-panel__main-content">
      <QAvatar
        class="contact-info__avatar"
        size="56px"
      >
        <img
          src="@/assets/images/user-avatar.png"
          alt="user-avatar"
        >
      </QAvatar>
      <div class="contact-info__details">
        <h2 class="contact-info__name">
          Jennifer Crowford
        </h2>
        <a
          class="contact-info__link"
          href="/"
          target="_blank"
        >
          Sunflower Limited
          <QIcon
            class="contact-info__link-icon"
            :name="IconName.NORTH_EAST"
          />
        </a>
      </div>
    </div>
    <div class="contact-panel-controls contact-control-panel__footer">
      <AppTabs
        v-model="selectedTab"
        class="contact-panel-controls__tabs"
      >
        <AppTab
          class="contact-panel-controls__tab"
          :name="Tab.ACTIVITIES"
        >
          Activities
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab"
          :name="Tab.LOGS"
        >
          Logs
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab"
          :name="Tab.VISITS"
        >
          Visits
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab contact-panel-controls__tab--files"
          :name="Tab.FILES"
        >
          <span class="contact-panel-controls__tab-content">
            Files
            <span class="contact-panel-controls__tab-counter">8</span>
          </span>
        </AppTab>
      </AppTabs>

      <div class="contact-panel-controls__buttons">
        <AppButton
          :type="ButtonType.SECONDARY"
          :is-small="true"
          :icon-name="IconName.PHONE"
        >
          Call
        </AppButton>
        <AppButton
          :type="ButtonType.SECONDARY"
          :is-small="true"
          :icon-name="IconName.MAIL"
        >
          Email
        </AppButton>
        <AppButton
          :type="ButtonType.SECONDARY"
          :is-small="true"
          :icon-name="IconName.CHAT"
        >
          Text
        </AppButton>
        <AppButton
          :type="ButtonType.SECONDARY"
          :is-small="true"
          :icon-name="IconName.EDIT"
        >
          Edit
        </AppButton>
        <AppButton
          :type="ButtonType.SECONDARY"
          :is-small="true"
          :icon-name="IconName.MORE_VERT"
        >
          More
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .contact-control-panel {
    padding: utils.spacing-unit(8) utils.spacing-unit(8) 0;
    background: center / cover url('@/assets/images/background-colored.png') no-repeat;
    border-radius: 8px;
  }

  .contact-info {
    display: flex;
    margin-bottom: utils.spacing-unit(8);

    .contact-info__details {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .contact-info__avatar {
      margin-right: utils.spacing-unit(4);
    }

    .contact-info__name {
      @include utils.apply-styles(utils.$text-page-title);
      color: utils.$color-neutral;
      margin: 0;
    }


    .contact-info__link {
      display: flex;
      align-items: center;
      color: utils.$color-neutral;

      &:hover {
        color: utils.$color-distinct;
      }
    }

    .contact-info__link-icon {
      margin-left: 2px;
    }
  }

  .contact-panel-controls {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .contact-panel-controls__tab {
      &.contact-panel-controls__tab--files {
        display: flex;
      }
    }

    .contact-panel-controls__tab-content {
      display: flex;
      align-items: baseline;
    }

    .contact-panel-controls__tab-counter {
      @include utils.apply-styles(utils.$text-caption);
      margin-left: 6px;
      color: utils.$color-gray-dark;
    }

    .contact-panel-controls__buttons {
      display: flex;
      align-items: center;
      gap: utils.spacing-unit(2);
      margin-bottom: utils.spacing-unit(2);
    }
  }
</style>