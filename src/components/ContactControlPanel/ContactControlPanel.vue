<script setup lang="ts">
  import { IconName } from '@/types/IconName';
  import { ButtonType } from '@/types/ButtonType';
  import AppTabs from '@/components/utils/AppTabs.vue';
  import AppTab from '@/components/utils/AppTab.vue';
  import AppButton from '@/components/utils/AppButton.vue';
  import { useRootStore } from '@/stores/RootStore';
  import { ContactDetailsTab } from '@/types/ContactDetailsTab';

  const rootStore = useRootStore();
</script>

<template>
  <div class="contact-control-panel">
    <div class="contact-info contact-control-panel__main-content">
      <QAvatar
        class="contact-info__avatar"
        size="56px"
      >
        <img
          :src="rootStore.contactDetails.profileImage"
          alt="user-avatar"
        >
      </QAvatar>
      <div class="contact-info__details">
        <h1 class="contact-info__name">
          {{ rootStore.contactFullName }}
        </h1>
        <a
          class="contact-info__link"
          :href="rootStore.contactDetails.orgLink"
          target="_blank"
        >
          {{ rootStore.contactDetails.orgName }}
          <QIcon
            class="contact-info__link-icon"
            :name="IconName.NORTH_EAST"
          />
        </a>
      </div>
    </div>
    <div class="contact-panel-controls contact-control-panel__footer">
      <AppTabs
        v-model="rootStore.contactDetailsSelectedTab"
        class="contact-panel-controls__tabs"
      >
        <AppTab
          class="contact-panel-controls__tab"
          :name="ContactDetailsTab.ACTIVITIES"
        >
          Activities
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab"
          :name="ContactDetailsTab.LOGS"
        >
          Logs
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab"
          :name="ContactDetailsTab.VISITS"
        >
          Visits
        </AppTab>
        <AppTab
          class="contact-panel-controls__tab contact-panel-controls__tab--files"
          :name="ContactDetailsTab.FILES"
        >
          <span class="contact-panel-controls__tab-content">
            Files
            <span class="contact-panel-controls__tab-counter">
              {{ rootStore.contactDetails.filesAmount }}
            </span>
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
      color: utils.$color-icon-light;
    }

    .contact-panel-controls__buttons {
      display: flex;
      align-items: center;
      gap: utils.spacing-unit(2);
      margin-bottom: utils.spacing-unit(2);
    }
  }
</style>
