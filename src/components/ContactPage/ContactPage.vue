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

  const text = ref('')
</script>

<template>
  <QPage class="contact-page">
    <AppBreadcrumbs
      class="contact-page__breadcrumbs"
      :routes="['Contacts', 'Jennifer Crowford']"
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
          <h3 class="contact-page__activities-title">
            Open activities
            <span class="contact-page__activities-title-count">4</span>
          </h3>
          <div class="contact-page__activities-card-list">
            <ActivityCard />
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

    .contact-page__activities-title {
      @include utils.apply-styles(utils.$text-headline);
      color: utils.$color-neutral;
      display: flex;
      align-items: center;
      margin-bottom: utils.spacing-unit(4);
    }

    .contact-page__activities-title-count {
      @include utils.apply-styles(utils.$text-subhead-semibold);
      color: utils.$color-icon-light;
      margin-left: utils.spacing-unit(2);
    }
  }
</style>
