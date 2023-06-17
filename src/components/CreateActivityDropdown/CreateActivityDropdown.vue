<script setup lang="ts">
  import AppDropdown from '@/components/utils/AppDropdown.vue';
  import { ButtonType } from '@/types/ButtonType';
  import AppMenuItem from '@/components/utils/AppMenuItem.vue';
  import AppMenuItemSection from '@/components/utils/AppMenuItemSection.vue';
  import AppList from '@/components/utils/AppList.vue';
  import { IconName } from '@/types/IconName';
</script>

<template>
  <AppDropdown
    class="create-activity-dropdown"
    label="Create"
    :type="ButtonType.PRIMARY"
  >
    <AppList class="create-activity-dropdown__list">
      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.CHAT" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Text message
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.MAIL" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Email
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.PHONE" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Call
        </AppMenuItemSection>
      </AppMenuItem>

      <QSeparator />

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.CAMPAIGN" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Campaign
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.ASSIGNMENT_TURNED_IN" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Task
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.PAID" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Deal
        </AppMenuItemSection>
      </AppMenuItem>

      <QSeparator />

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.PERSON" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Contact
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.DOMAIN" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Organization
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.GROUP" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          List
        </AppMenuItemSection>
      </AppMenuItem>

      <AppMenuItem
        v-close-popup
        clickable
        @click="onItemClick"
      >
        <AppMenuItemSection avatar>
          <QIcon :name="IconName.PIE_CHART" />
        </AppMenuItemSection>
        <AppMenuItemSection>
          Segment
        </AppMenuItemSection>
      </AppMenuItem>
    </AppList>
  </AppDropdown>
</template>
