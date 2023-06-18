<script setup lang="ts">

  import { IconName } from '@/types/IconName';
  import AppButton from '@/components/utils/AppButton.vue';
  import AppContentItem from '@/components/utils/AppContentItem.vue';
  import ContactStatusChip from '@/components/ContactStatusChip/ContactStatusChip.vue';
  import AppLabel from '@/components/utils/AppLabel.vue';
  import AppAvatarGroup from '@/components/utils/AppAvatarGroup.vue';
  import { useRootStore } from '@/stores/RootStore';
  import { ContactDetailsType } from '@/types/ContactDetailsType';
  import { Utils } from '@/classes/utils';

  const CONTACT_DETAILS_TYPE_LABEL_MAP: Record<ContactDetailsType, string> = {
    [ContactDetailsType.HOME]: 'Home',
    [ContactDetailsType.WORK]: 'Work',
  };

  const rootStore = useRootStore();

  const createdAt = Utils.convertISODate(rootStore.contactDetails.createdAt);
  const updatedAt = Utils.convertISODate(rootStore.contactDetails.updatedAt);
</script>

<template>
  <div class="contact-details-panel">
    <div class="contact-details-panel__header">
      <h3 class="contact-details-panel__title">
        Details
      </h3>
      <AppButton
        :icon-name="IconName.MORE_VERT"
        :is-icon="true"
      />
    </div>
    <div class="contact-details-panel__content">
      <div class="contact-details-panel__content-items">
        <AppContentItem class="contact-details-panel__content-item">
          <template #key>
            Assigned to
          </template>
          <template #value>
            <QAvatar
              class="contact-details-panel__content-item-avatar"
              size="24px"
            >
              <img
                :src="rootStore.contactDetails.assignToProfileImage"
                alt="assign-avatar"
              >
            </QAvatar>
            <span>
              {{ rootStore.contactDetails.assignToName }}
            </span>
          </template>
        </AppContentItem>
        <AppContentItem class="contact-details-panel__content-item">
          <template #key>
            Status
          </template>
          <template #value>
            <ContactStatusChip :status="rootStore.contactDetails.status" />
          </template>
        </AppContentItem>
        <AppContentItem class="contact-details-panel__content-item">
          <template #key>
            <span>Email</span>
            <span class="contact-details-panel__content-item-description">
              ({{ CONTACT_DETAILS_TYPE_LABEL_MAP[rootStore.contactDetails.emailType] }})
            </span>
          </template>
          <template #value>
            kenzilaw@textmagic.com
          </template>
        </AppContentItem>
        <AppContentItem class="contact-details-panel__content-item">
          <template #key>
            <span>Phone</span>
            <span class="contact-details-panel__content-item-description">
              ({{ CONTACT_DETAILS_TYPE_LABEL_MAP[rootStore.contactDetails.phoneType] }})
            </span>
          </template>
          <template #value>
            {{ rootStore.contactDetails.phone }}
          </template>
        </AppContentItem>
        <AppContentItem class="contact-details-panel__content-item">
          <template #key>
            Organization
          </template>
          <template #value>
            <img
              class="contact-details-panel__content-item-image"
              :src="rootStore.contactDetails.orgDetailsImage"
              alt="mastercard"
            >
            <span>{{ rootStore.contactDetails.orgDetailsName }}</span>
          </template>
        </AppContentItem>
        <AppContentItem
          v-if="rootStore.contactDetails.lists.length"
          class="contact-details-panel__content-item"
        >
          <template #key>
            Lists
          </template>
          <template #value>
            <div class="contact-details-panel__content-item-chips">
              <AppLabel
                v-for="list in rootStore.contactDetails.lists"
                :key="list"
              >
                {{ list }}
              </AppLabel>
            </div>
          </template>
        </AppContentItem>
        <AppContentItem
          v-if="rootStore.contactDetails.segments.length"
          class="contact-details-panel__content-item"
        >
          <template #key>
            Segments
          </template>
          <template #value>
            <div class="contact-details-panel__content-item-chips">
              <AppLabel
                v-for="segment in rootStore.contactDetails.segments"
                :key="segment"
              >
                {{ segment }}
              </AppLabel>
            </div>
          </template>
        </AppContentItem>
        <AppContentItem
          v-if="rootStore.contactDetails.followersImages.length"
          class="contact-details-panel__content-item"
        >
          <template #key>
            Followers
          </template>
          <template #value>
            <AppAvatarGroup :links="rootStore.contactDetails.followersImages" />
          </template>
        </AppContentItem>
        <AppContentItem
          v-if="rootStore.contactDetails.tags.length"
          class="contact-details-panel__content-item"
        >
          <template #key>
            Tags
          </template>
          <template #value>
            <div class="contact-details-panel__content-item-chips">
              <AppLabel
                v-for="tag in rootStore.contactDetails.tags"
                :key="tag"
              >
                {{ tag }}
              </AppLabel>
            </div>
          </template>
        </AppContentItem>
        <button class="contact-details-panel__show-more-button">
          Show more
        </button>
      </div>
      <div class="contact-details-panel__content-footer">
        <div class="contact-details-panel__date">
          Created: {{ createdAt }}
        </div>
        <div class="contact-details-panel__date">
          Updated: {{ updatedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .contact-details-panel {
    padding: 18px 18px utils.spacing-unit(6) utils.spacing-unit(6);
    background-color: utils.$color-white;
    border-radius: 8px;

    .contact-details-panel__title {
      @include utils.apply-styles(utils.$text-headline);
      color: utils.$color-neutral;
    }

    .contact-details-panel__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: utils.spacing-unit(4);
    }

    .contact-details-panel__content-items {
      display: flex;
      flex-direction: column;
      gap: utils.spacing-unit(4);
      margin-bottom: utils.spacing-unit(6);
      @include utils.apply-styles(utils.$text-body-semibold);
    }

    .contact-details-panel__content-item-avatar {
      margin-right: 7px;
    }

    .contact-details-panel__content-item-description {
      margin-left: utils.spacing-unit(1);
      color: utils.$color-icon-light;
    }

    .contact-details-panel__content-item-image {
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }

    .contact-details-panel__content-item-chips {
      display: flex;
      gap: utils.spacing-unit(2);
    }

    .contact-details-panel__show-more-button {
      @include utils.button-no-styles;
      @include utils.apply-styles(utils.$text-caption);
      display: flex;
      color: utils.$color-primary;

      &:hover {
        color: utils.$color-primary-dark;
      }
    }

    .contact-details-panel__date {
      @include utils.apply-styles(utils.$text-body-small-regular);
      color: utils.$color-icon-light;
    }
  }
</style>
