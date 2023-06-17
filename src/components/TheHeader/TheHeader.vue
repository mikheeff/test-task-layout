<script setup lang="ts">
  import { ref } from 'vue';
  import AppButton from '@/components/utils/AppButton.vue';
  import { ButtonType } from '@/types/ButtonType';
  import AppInput from '@/components/utils/AppInput.vue';
  import { IconName } from '@/types/IconName';

  const text = ref('')
</script>

<template>
  <QHeader class="the-header">
    <div class="header-primary-actions the-header__primary-actions">
      <AppButton
        class="header-primary-actions__button"
        label="Create"
        :type="ButtonType.PRIMARY"
      />
      <AppInput
        v-model="text"
        class="header-primary-actions__search-input"
        :icon-name="IconName.SEARCH"
        placeholder="Search TextMagic workspace"
      />
    </div>
    <div class="header-secondary-actions the-header__secondary-actions">
      <AppButton
        class="header-secondary-actions__status-button"
        label="Online"
        :type="ButtonType.SECONDARY"
      />
      <div class="header-secondary-actions__actions-group">
        <AppButton
          :is-icon="true"
          :icon-name="IconName.EVENT"
        />
        <AppButton
          :is-icon="true"
          :icon-name="IconName.NOTIFICATIONS"
        />
        <AppButton
          :is-icon="true"
          :icon-name="IconName.SETTINGS"
        />
      </div>
      <AppButton
        class="header-secondary-actions__profile-button"
        :type="ButtonType.OUTLINE"
      >
        <span class="header-secondary-actions__profile-button-text">TextMagic</span>
        <QAvatar size="22px">
          <img
            src="@/assets/images/profile-avatar.png"
            alt="profile-avatar"
          >
        </QAvatar>
      </AppButton>
    </div>
  </QHeader>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/index' as utils;

  .the-header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 52px;
    background-color: utils.$color-white;
    box-shadow: inset 0px -1px 0px utils.$color-grey-light;
    padding: utils.spacing-unit(2) utils.spacing-unit(8);
    @include utils.apply-styles(utils.$text-body-regular);
  }

  .header-primary-actions {
    display: flex;
    flex-grow: 1;

    .header-primary-actions__search-input {
      max-width: 360px;
    }

    .header-primary-actions__button {
      margin-right: 10px;
    }
  }

  .header-secondary-actions {
    display: flex;

    .header-secondary-actions__status-button {
      margin-right: 14px;
    }

    .header-secondary-actions__actions-group {
      display: flex;
      align-items: center;
      gap: utils.spacing-unit(1);
      margin-right: utils.spacing-unit(4);
    }

    .header-secondary-actions__profile-button-text {
      margin-right: utils.spacing-unit(2);
    }
  }
</style>

