<script setup lang="ts">
  import { ref } from 'vue';
  import TheSidebarItem from '@/components/TheSidebarItem/TheSidebarItem.vue';
  import { IconName } from '@/types/IconName';
  import { useRootStore } from '@/stores/RootStore';

  const isCollapsed = ref(false);
  const rootStore = useRootStore();
</script>

<template>
  <QDrawer
    class="the-sidebar"
    :model-value="true"
    :mini="isCollapsed"
    :width="200"
    :mini-width="68"
  >
    <div class="sidebar-logo the-sidebar__logo">
      <img
        class="sidebar-logo__image"
        src="@/assets/images/logo.svg"
        alt="logo"
      >
      <transition name="opacity-transition">
        <img
          v-show="!isCollapsed"
          class="sidebar-logo__text"
          src="@/assets/images/logo-text.svg"
          alt="logo-text"
        >
      </transition>
    </div>
    <QList class="sidebar-menu the-sidebar__menu">
      <div class="sidebar-menu__top">
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.HOME"
        >
          Home
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.FORUM"
        >
          Messenger
          <template #side-content>
            <span class="sidebar-menu__item-counter">{{ rootStore.messagesAmount }}</span>
          </template>
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.MAIL"
        >
          Tickets
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.CAMPAIGN"
        >
          Campaigns
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :is-active="true"
          :icon-name="IconName.GROUP"
        >
          Contacts
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.TASK"
        >
          Tasks
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.PAID"
        >
          Deals
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.FOLDER"
        >
          Files
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.SLOW_MOTION_VIDEO"
        >
          Automations
        </TheSidebarItem>
        <TheSidebarItem
          class="sidebar-menu__item"
          :icon-name="IconName.INSERT_CHART"
        >
          Reports
        </TheSidebarItem>
      </div>
      <div class="sidebar-menu__bottom">
        <TheSidebarItem
          :icon-name="isCollapsed ? IconName.MENU : IconName.MENU_OPEN"
          @click="isCollapsed = !isCollapsed"
        >
          Minimize menu
        </TheSidebarItem>
      </div>
    </QList>
  </QDrawer>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/index' as utils;

  :deep(.the-sidebar) {
    display: flex;
    flex-direction: column;
    overflow: visible;
    background-color: utils.$color-midnight-navy;
  }

  .the-sidebar__menu {
    padding: 0 utils.spacing-unit(2) utils.spacing-unit(2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  .sidebar-logo {
    display: flex;
    align-items: center;
    height: 52px;
    padding: utils.spacing-unit(2) utils.spacing-unit(6);

    .sidebar-logo__image {
      margin-right: utils.spacing-unit(2);
    }
  }

  .sidebar-menu__item-counter {
    @include utils.apply-styles(utils.$text-caption);
    color: utils.$color-white;
    padding: 0 6px;
    background-color: utils.$color-attention;
    border-radius: 12px;
    display: flex;
  }
</style>
