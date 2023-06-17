<script setup lang="ts">
  import { ref } from 'vue';
  import AppInput from '@/components/utils/AppInput.vue';
  import { InputType } from '@/types/InputType';
  import AppTabs from '@/components/utils/AppTabs.vue';
  import AppTab from '@/components/utils/AppTab.vue';

  enum Tab {
    INTERNAL_NOTE = 'INTERNAL_NOTE',
    TASK = 'TASK',
    DEAL = 'DEAL',
    TICKET = 'TICKET',
    REMINDER = 'REMINDER',
  }

  const selectedTab = ref(Tab.INTERNAL_NOTE);
  const text = ref('');
</script>

<template>
  <div class="add-note-form contact-add-note-form">
    <div class="add-note-form__avatar-container">
      <QAvatar size="32px">
        <img
          src="@/assets/images/profile-avatar.png"
          alt="profile-avatar"
        >
      </QAvatar>
    </div>
    <div class="add-note-form__content">
      <AppTabs
        v-model="selectedTab"
        :is-small="true"
        class="add-note-form__tabs"
      >
        <AppTab
          class="add-note-form__tab"
          :name="Tab.INTERNAL_NOTE"
        >
          Internal note
        </AppTab>
        <AppTab
          class="add-note-form__tab"
          :name="Tab.TASK"
        >
          Task
        </AppTab>
        <AppTab
          class="add-note-form__tab"
          :name="Tab.DEAL"
        >
          Deal
        </AppTab>
        <AppTab
          class="add-note-form__tab"
          :name="Tab.TICKET"
        >
          Ticket
        </AppTab>
        <AppTab
          class="add-note-form__tab"
          :name="Tab.REMINDER"
        >
          Reminder
        </AppTab>
      </AppTabs>
      <AppInput
        v-model="text"
        :input-type="InputType.WARNING"
        :autogrow="true"
        class="add-note-form__input"
        type="textarea"
        placeholder="Click to add note"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .add-note-form {
    display: flex;

    .add-note-form__avatar-container {
      margin-right: utils.spacing-unit(2);
    }

    .add-note-form__content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
    }
  }
</style>
