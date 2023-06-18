<script setup lang="ts">
  import { ref } from 'vue';
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
  import { useRootStore } from '@/stores/RootStore';
  import ContactActivitiesControls from '@/components/ContactActivitiesControls/ContactActivitiesControls.vue';
  import { ContactDetailsTab } from '@/types/ContactDetailsTab';

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
    <div class="contact-page__columns">
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
        <div class="contact-page__content">
          <transition
            name="opacity-transition"
            mode="out-in"
          >
            <div
              v-if="rootStore.contactDetailsSelectedTab === ContactDetailsTab.ACTIVITIES"
              key="activities"
              class="contact-page__activities"
            >
              <div class="contact-page__activities-section contact-page__activities-section--open">
                <div class="contact-page__activities-section-header">
                  <h3 class="contact-page__activities-title">
                    Open activities
                    <span class="contact-page__activities-title-count">
                      {{ rootStore.openActivities.length }}
                    </span>
                  </h3>

                  <AppButton
                    :icon-name="IconName.KEYBOARD_ARROW_DOWN"
                    class="contact-page__activities-toggle-button"
                    :is-icon="true"
                  />
                </div>
                <div
                  v-if="rootStore.openActivities.length"
                  class="contact-page__activities-card-list"
                >
                  <ActivityCard
                    v-for="activity in rootStore.openActivities"
                    :key="activity.id"
                    :activity="activity"
                  />
                </div>
              </div>
              <div
                v-if="rootStore.pastActivities.length"
                class="contact-page__activities-section contact-page__activities-section--past"
              >
                <div class="contact-page__activities-section-header">
                  <h3 class="contact-page__activities-title">
                    Past activities
                    <span class="contact-page__activities-title-count">
                      {{ rootStore.pastActivities.length }}
                    </span>
                  </h3>
                  <AppButton
                    :icon-name="IconName.KEYBOARD_ARROW_DOWN"
                    class="contact-page__activities-toggle-button"
                    :is-icon="true"
                  />
                </div>
                <ContactActivitiesControls class="contact-page__activities-section-controls" />
                <div class="contact-page__activities-card-list">
                  <ActivityCard
                    v-for="activity in rootStore.pastActivities"
                    :key="activity.id"
                    :activity="activity"
                  />
                </div>
              </div>
            </div>
            <div
              v-else-if="rootStore.contactDetailsSelectedTab === ContactDetailsTab.LOGS"
              key="logs"
              class="contact-page__logs"
            >
              Logs
            </div>
            <div
              v-else-if="rootStore.contactDetailsSelectedTab === ContactDetailsTab.VISITS"
              key="visits"
              class="contact-page__visits"
            >
              Visits
            </div>
            <div
              v-else-if="rootStore.contactDetailsSelectedTab === ContactDetailsTab.FILES"
              key="files"
              class="contact-page__files"
            >
              Files
            </div>
          </transition>
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
    padding: utils.spacing-unit(2) 0 utils.spacing-unit(15);

    .contact-page__breadcrumbs {
      margin-bottom: utils.spacing-unit(2);
    }

    .contact-page__contact-control-panel {
      margin-bottom: utils.spacing-unit(5);
    }

    .contact-page__columns {
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

    .contact-page__activities-card-list {
      display: flex;
      flex-direction: column;
      gap: utils.spacing-unit(2);
    }

    .contact-page__logs,
    .contact-page__visits,
    .contact-page__files {
      display: flex;
      padding: utils.spacing-unit(10) utils.spacing-unit(20);
      justify-content: center;
      background-color: utils.$color-white;
      border-radius: 4px;
    }
  }
</style>
