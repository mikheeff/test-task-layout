<script setup lang="ts">
  import AppDropdown from '@/components/utils/AppDropdown.vue';
  import { IconName } from '@/types/IconName';
  import AppMenuItem from '@/components/utils/AppMenuItem.vue';
  import AppMenuItemSection from '@/components/utils/AppMenuItemSection.vue';
  import AppList from '@/components/utils/AppList.vue';
  import { ButtonType } from '@/types/ButtonType';
  import { useRootStore } from '@/stores/RootStore';

  const rootStore = useRootStore();
</script>

<template>
  <AppDropdown
    class="account-menu"
    :type="ButtonType.OUTLINE"
  >
    <template #label>
      <span class="account-menu__button-text">TextMagic</span>
      <QAvatar size="22px">
        <img
          :src="rootStore.userProfile.imageUrl"
          alt="profile-avatar"
        >
      </QAvatar>
    </template>
    <div class="account-menu__content">
      <div class="menu-header account-menu__header">
        <QAvatar
          class="menu-header__avatar"
          size="52px"
        >
          <img
            :src="rootStore.userProfile.imageUrl"
            alt="profile-avatar"
          >
        </QAvatar>
        <div class="menu-header__name">
          {{ rootStore.profileFullName }}
        </div>
        <div class="menu-header__email">
          {{ rootStore.userProfile.email }}
        </div>
        <button class="menu-header__manage-account-button">
          Manage account
        </button>
      </div>
      <AppList class="account-menu__list">
        <div class="account-menu__list-section">
          <AppMenuItem
            v-close-popup
            :clickable="true"
            href="https://textmagic.touchpoint.com"
            target="_blank"
            class="text-magic-list-item account-menu__list-item"
          >
            <AppMenuItemSection
              class="text-magic-list-item__section"
              :avatar="true"
            >
              <span class="text-magic-list-item__section-logo">
                <img
                  src="@/assets/images/text-magic-logo.svg"
                  alt="text-magic-logo"
                >
              </span>
            </AppMenuItemSection>
            <AppMenuItemSection class="text-magic-list-item__section">
              <div class="text-magic-list-item__section-name">
                TextMagic
              </div>
              <div class="text-magic-list-item__section-description">
                textmagic.touchpoint.com
              </div>
            </AppMenuItemSection>
            <AppMenuItemSection
              class="text-magic-list-item__section"
              :side="true"
            >
              <QIcon :name="IconName.KEYBOARD_ARROW_RIGHT" />
            </AppMenuItemSection>
          </AppMenuItem>
        </div>

        <QSeparator />

        <div class="account-menu__list-section">
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.CHAT" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Text message
            </AppMenuItemSection>
          </AppMenuItem>
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.DOMAIN" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Workspace
            </AppMenuItemSection>
          </AppMenuItem>
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.GROUP" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Users
            </AppMenuItemSection>
          </AppMenuItem>
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.CREDIT_CARD" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Billing
            </AppMenuItemSection>
          </AppMenuItem>
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.HELP" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Help center
            </AppMenuItemSection>
          </AppMenuItem>
        </div>

        <QSeparator />

        <div class="account-menu__list-section">
          <AppMenuItem
            v-close-popup
            :clickable="true"
            class="account-menu__list-item"
          >
            <AppMenuItemSection
              class="account-menu__list-item-section"
              :avatar="true"
            >
              <QIcon :name="IconName.LOGOUT" />
            </AppMenuItemSection>
            <AppMenuItemSection class="account-menu__list-item-section">
              Log out
            </AppMenuItemSection>
          </AppMenuItem>
        </div>
      </AppList>
    </div>
  </AppDropdown>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .account-menu__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: utils.spacing-unit(6);
  }

  .account-menu__content {
    width: 300px;
  }

  .account-menu__button-text {
    margin-right: utils.spacing-unit(2);
  }

  .account-menu__list-section {
    padding: utils.spacing-unit(1) 0;
  }

  .account-menu__list-item {
    padding: 9px utils.spacing-unit(5) 11px;
  }

  .account-menu__list-item-section {
    &.q-item__section--avatar {
      padding-top: 2px;
    }
  }

  .account-menu__list {
    padding: 0;
  }

  .menu-header {
    background: center / cover url('@/assets/images/profile-background.png') no-repeat;

    .menu-header__avatar:before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid utils.$color-pink;
      background-color: utils.$color-success;
    }

    .menu-header__name {
      @include utils.apply-styles(utils.$text-subhead-semibold);
      color: utils.$color-neutral;
    }

    .menu-header__email {
      margin-bottom: 2px;
    }

    .menu-header__manage-account-button {
      @include utils.button-no-styles;
      @include utils.apply-styles(utils.$text-body-semibold);
      color: utils.$color-primary;
    }
  }

  .text-magic-list-item {
    padding: utils.spacing-unit(2) utils.spacing-unit(4);

    .text-magic-list-item__section {
      padding-top: 0;

      &.q-item__section--side {
        ::v-deep(.q-icon) {
          font-size: 22px;
        }
      }
    }

    .text-magic-list-item__section-name {
      @include utils.apply-styles(utils.$text-subhead-semibold);
    }

    .text-magic-list-item__section-description {
      color: utils.$color-distinct;
    }

    .text-magic-list-item__section-logo {
      width: 40px;
      height: 40px;
    }
  }
</style>

