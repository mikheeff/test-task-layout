<script setup lang="ts">
  import { computed, ref } from 'vue';
  import AppBreadcrumbs from '@/components/utils/AppBreadcrumbs.vue';
  import ContactControlPanel from '@/components/ContactControlPanel/ContactControlPanel.vue';
  import { IconName } from '@/types/IconName';
  import AppInput from '@/components/utils/AppInput.vue';
  import AppButton from '@/components/utils/AppButton.vue';
  import { ButtonType } from '@/types/ButtonType';
  import ContactPageAddNoteForm from '@/components/ContactAddNoteForm/ContactAddNoteForm.vue';
  import { InputType } from '@/types/InputType';
  import ContactDetailsPanel from '@/components/ContactDetailsPanel/ContactDetailsPanel.vue';
  import ActivityCard from '@/components/ActivityCard/ActivityCard.vue';
  import AppChip from '@/components/utils/AppChip.vue';
  import { useRootStore } from '@/stores/RootStore';

  const text = ref('');

  const rootStore = useRootStore();
</script>

<template>
  <QPage class="contact-page">
    <AppBreadcrumbs
      class="contact-page__breadcrumbs"
      :routes="['Contacts', rootStore.contactFullName]"
    />
    <ContactControlPanel class="contact-page__contact-control-panel" />
    <div class="contact-page-columns">
      <div class="contact-page__left-column">
        <div class="contact-page__contact-search">
          <AppInput
            v-model="text"
            class="contact-page__search-input"
            :icon-name="IconName.SEARCH"
            :input-type="InputType.LIGHT"
            :is-large="true"
            placeholder="Search TextMagic workspace"
          />
          <AppButton
            :type="ButtonType.LIGHT"
            :icon-name="IconName.UNFOLD_MORE"
            :is-icon-large="true"
          />
        </div>

        <ContactPageAddNoteForm class="contact-page__add-note-form" />
        <div class="contact-page__activities">
          <div class="contact-page__activities-section contact-page__activities-section--open">
            <div class="contact-page__activities-section-header">
              <h3 class="contact-page__activities-title">
                Open activities
                <span class="contact-page__activities-title-count">4</span>
              </h3>

              <AppButton
                :icon-name="IconName.KEYBOARD_ARROW_DOWN"
                class="contact-page__activities-toggle-button"
                :is-icon="true"
              />
            </div>
            <div class="contact-page__activities-card-list">
              <ActivityCard />
            </div>
          </div>
          <div class="contact-page__activities-section contact-page__activities-section--past">
            <div class="contact-page__activities-section-header">
              <h3 class="contact-page__activities-title">
                Past activities
                <span class="contact-page__activities-title-count">46</span>
              </h3>
              <AppButton
                :icon-name="IconName.KEYBOARD_ARROW_DOWN"
                class="contact-page__activities-toggle-button"
                :is-icon="true"
              />
            </div>
            <div class="activities-section-controls contact-page__activities-section-controls">
              <div class="activities-section-controls__filters">
                <AppChip class="activities-section-controls__filter">
                  All
                  <span class="activities-section-controls__filter-count">
                    64
                  </span>
                </AppChip>
                <AppChip class="activities-section-controls__filter">
                  Deals
                  <span class="activities-section-controls__filter-count">
                    10
                  </span>
                </AppChip>
                <AppChip class="activities-section-controls__filter">
                  Tasks
                  <span class="activities-section-controls__filter-count">
                    12
                  </span>
                </AppChip>
                <AppChip class="activities-section-controls__filter">
                  Calls
                  <span class="activities-section-controls__filter-count">
                    3
                  </span>
                </AppChip>
                <AppChip class="activities-section-controls__filter">
                  Emails
                  <span class="activities-section-controls__filter-count">
                    24
                  </span>
                </AppChip>
                <AppChip
                  class="activities-section-controls__filter"
                  :is-grey="true"
                  :icon-name="IconName.MORE_VERT"
                >
                  More
                </AppChip>
              </div>
              <button class="activities-section-controls__sort-button">
                Newest first
                <QIcon
                  class="activities-section-controls__sort-button-icon"
                  size="16px"
                  :name="IconName.ARROW_DROP_DOWN"
                />
              </button>
            </div>
            <div class="contact-page__activities-card-list">
              <ActivityCard />
            </div>
          </div>
        </div>
      </div>
      <div class="contact-page__right-column">
        <ContactDetailsPanel />
      </div>
    </div>
  </QPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .contact-page {
    padding-top: utils.spacing-unit(2);

    .contact-page__breadcrumbs {
      margin-bottom: utils.spacing-unit(2);
    }

    .contact-page__contact-control-panel {
      margin-bottom: utils.spacing-unit(5);
    }

    .contact-page-columns {
      display: flex;
    }

    .contact-page__left-column {
      width: 100%;
      margin-right: utils.spacing-unit(5);
    }

    .contact-page__right-column {
      width: 100%;
      max-width: 390px;
    }

    .contact-page__contact-search {
      display: flex;
      align-items: center;
      margin-bottom: utils.spacing-unit(5);
    }

    .contact-page__search-input {
      margin-right: utils.spacing-unit(2);
    }

    .contact-page__add-note-form {
      margin-bottom: utils.spacing-unit(5);
    }

    .contact-page__activities {
      display: flex;
      flex-direction: column;
      gap: utils.spacing-unit(8);
    }

    .contact-page__activities-section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: utils.spacing-unit(4);
    }

    .contact-page__activities-title {
      @include utils.apply-styles(utils.$text-headline);
      color: utils.$color-neutral;
      display: flex;
      align-items: center;
    }

    .contact-page__activities-toggle-button {
      padding: 0;
      min-height: auto;
    }

    .contact-page__activities-title-count {
      @include utils.apply-styles(utils.$text-subhead-semibold);
      color: utils.$color-icon-light;
      margin-left: utils.spacing-unit(2);
    }
  }

  .activities-section-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: utils.spacing-unit(2);

    .activities-section-controls__filters {
      display: flex;
      gap: utils.spacing-unit(1);
    }

    .activities-section-controls__filter-count {
      color: utils.$color-icon-light;
      margin-left: utils.spacing-unit(1);
    }

    .activities-section-controls__sort-button {
      @include utils.button-no-styles;
      color: utils.$color-neutral;
      display: flex;
      align-items: center;
      transition: color utils.$transition-duration;

      &:hover {
        color: utils.$color-distinct;
      }
    }

    .activities-section-controls__sort-button-icon {
      color: utils.$color-distinct;
      margin-left: 2px;
    }
  }
</style>
