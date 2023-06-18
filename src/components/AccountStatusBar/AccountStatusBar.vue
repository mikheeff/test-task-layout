<script setup lang="ts">
  import { ButtonType } from '@/types/ButtonType';
  import AppDropdown from '@/components/utils/AppDropdown.vue';
  import AppList from '@/components/utils/AppList.vue';
  import AppMenuItemSection from '@/components/utils/AppMenuItemSection.vue';
  import AppMenuItem from '@/components/utils/AppMenuItem.vue';
  import AccountStatusIndicator from '@/components/AccountStatusIndicator/AccountStatusIndicator.vue';
  import { useRootStore } from '@/stores/RootStore';
  import { AccountStatus } from '@/types/AccountStatus';
  import { ref } from 'vue';
  import AppToggle from '@/components/utils/AppToggle.vue';

  const rootStore = useRootStore();

  const ACCOUNT_STATUS_LABEL_MAP: Record<AccountStatus, string> = {
    [AccountStatus.ONLINE]: 'Online',
    [AccountStatus.AWAY]: 'Away',
    [AccountStatus.OFFLINE]: 'Offline',
    [AccountStatus.DO_NOT_DISTURB]: 'Do not disturb',
  };

  const isOpened = ref(false);
</script>

<template>
  <AppDropdown
    class="account-status-bar"
    :class="{ 'account-status-bar--opened': isOpened }"
    :type="ButtonType.SECONDARY"
    menu-self="top left"
    menu-anchor="bottom left"
    @before-show="isOpened = true"
    @before-hide="isOpened = false"
  >
    <template #label>
      <AccountStatusIndicator class="account-status-bar__status-indicator" />
      {{ ACCOUNT_STATUS_LABEL_MAP[rootStore.accountStatus] }}
    </template>
    <AppList class="account-status-bar__list">
      <AppMenuItem
        v-close-popup
        :clickable="true"
        :active="rootStore.accountStatus === AccountStatus.ONLINE"
        class="account-status-bar__list-item"
        @click="rootStore.accountStatus = AccountStatus.ONLINE"
      >
        <AppMenuItemSection
          class="account-status-bar__list-item-section"
          :avatar="true"
        >
          <AccountStatusIndicator
            class="account-status-bar__list-item-section-status-indicator"
            :status="AccountStatus.ONLINE"
          />
        </AppMenuItemSection>
        <AppMenuItemSection class="account-status-bar__list-item-section">
          {{ ACCOUNT_STATUS_LABEL_MAP[AccountStatus.ONLINE] }}
        </AppMenuItemSection>
      </AppMenuItem>
      <div class="list-sub-item account-status-bar__list-sub-item">
        <div class="list-sub-item__section">
          <span
            class="list-sub-item__section-text"
            :class="{ 'list-sub-item__section-text--disabled': !rootStore.isAcceptCalls }"
          >
            Accept calls
          </span>
          <AppToggle v-model="rootStore.isAcceptCalls" />
        </div>
        <div class="list-sub-item__section">
          <span
            class="list-sub-item__section-text"
            :class="{ 'list-sub-item__section-text--disabled': !rootStore.isAcceptChats }"
          >
            Accept chats
          </span>
          <AppToggle v-model="rootStore.isAcceptChats" />
        </div>
      </div>
      <AppMenuItem
        v-close-popup
        :clickable="true"
        :active="rootStore.accountStatus === AccountStatus.AWAY"
        class="account-status-bar__list-item"
        @click="rootStore.accountStatus = AccountStatus.AWAY"
      >
        <AppMenuItemSection
          class="account-status-bar__list-item-section"
          :avatar="true"
        >
          <AccountStatusIndicator
            class="account-status-bar__list-item-section-status-indicator"
            :status="AccountStatus.AWAY"
          />
        </AppMenuItemSection>
        <AppMenuItemSection class="account-status-bar__list-item-section">
          {{ ACCOUNT_STATUS_LABEL_MAP[AccountStatus.AWAY] }}
        </AppMenuItemSection>
      </AppMenuItem>
      <AppMenuItem
        v-close-popup
        :clickable="true"
        :active="rootStore.accountStatus === AccountStatus.DO_NOT_DISTURB"
        class="account-status-bar__list-item"
        @click="rootStore.accountStatus = AccountStatus.DO_NOT_DISTURB"
      >
        <AppMenuItemSection
          class="account-status-bar__list-item-section"
          :avatar="true"
        >
          <AccountStatusIndicator
            class="account-status-bar__list-item-section-status-indicator"
            :status="AccountStatus.DO_NOT_DISTURB"
          />
        </AppMenuItemSection>
        <AppMenuItemSection class="account-status-bar__list-item-section">
          {{ ACCOUNT_STATUS_LABEL_MAP[AccountStatus.DO_NOT_DISTURB] }}
        </AppMenuItemSection>
      </AppMenuItem>
      <AppMenuItem
        v-close-popup
        :clickable="true"
        :active="rootStore.accountStatus === AccountStatus.OFFLINE"
        class="account-status-bar__list-item"
        @click="rootStore.accountStatus = AccountStatus.OFFLINE"
      >
        <AppMenuItemSection
          class="account-status-bar__list-item-section"
          :avatar="true"
        >
          <AccountStatusIndicator
            class="account-status-bar__list-item-section-status-indicator"
            :status="AccountStatus.OFFLINE"
          />
        </AppMenuItemSection>
        <AppMenuItemSection class="account-status-bar__list-item-section">
          {{ ACCOUNT_STATUS_LABEL_MAP[AccountStatus.OFFLINE] }}
        </AppMenuItemSection>
      </AppMenuItem>
    </AppList>
  </AppDropdown>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .account-status-bar {
    transition-property: background-color, color;
    transition-duration: utils.$transition-duration;

    &.account-status-bar--opened {
      background-color: utils.$color-distinct;
      color: utils.$color-white;
    }
  }


  .account-status-bar__list {
    padding: utils.spacing-unit(1) 0;
    width: 245px;
  }
  .account-status-bar__status-indicator {
    margin-right: 6px;
  }

  .account-status-bar__list-item-section {
    &.q-item__section--avatar {
      padding-top: 0;
    }
  }

  .account-status-bar__list-item {
    padding: utils.spacing-unit(2) utils.spacing-unit(3);

    &.q-item--active {
      background-color: utils.$color-shade;
    }
  }

  .list-sub-item {
    .list-sub-item__section {
      display: flex;
      justify-content: space-between;
      padding: utils.spacing-unit(1) utils.spacing-unit(4)  utils.spacing-unit(1) utils.spacing-unit(9);
      color: utils.$color-neutral;
      @include utils.apply-styles(utils.$text-body-semibold);
    }

    .list-sub-item__section-text {
      transition: color utils.$transition-duration;

      &.list-sub-item__section-text--disabled {
        color: utils.$color-icon-light;
      }
    }
  }
</style>
