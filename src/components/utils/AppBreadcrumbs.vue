<script setup lang="ts">
  import AppButton from '@/components/utils/AppButton.vue';
  import { IconName } from '@/types/IconName';
  import { ButtonType } from '@/types/ButtonType';

  interface Props {
    routes: string[];
  }

  const props = withDefaults(defineProps<Props>(), {
    routes: () => []
  })
</script>

<template>
  <div class="app-breadcrumbs">
    <AppButton
      class="app-breadcrumbs__back-button"
      :icon-name="IconName.CHEVRON_LEFT"
      :type="ButtonType.SECONDARY"
      :is-icon-small="true"
    />
    <span
      v-for="(route, index) in props.routes"
      :key="route"
      class="breadcrumb-item app-breadcrumbs__item"
    >
      <a
        class="breadcrumb-item__link"
        href="/"
      >{{ route }}</a>
      <QIcon
        v-if="index !== props.routes.length - 1"
        class="breadcrumb-item__icon"
        :name="IconName.CHEVRON_RIGHT"
      />
    </span>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .app-breadcrumbs {
    display: flex;
    align-items: center;

    .app-breadcrumbs__back-button {
      background-color: utils.$color-input;
      margin-right: utils.spacing-unit(3);
    }
  }

  .breadcrumb-item {
    .breadcrumb-item__link {
      color: utils.$color-distinct;
      transition-property: text-decoration, color;
      transition-duration: utils.$transition-duration;
      @include utils.apply-styles(utils.$text-body-semibold);

      &:hover {
        color: utils.$color-icon-light;
      }
    }

    .breadcrumb-item__icon {
      color: utils.$color-icon-light;
      font-size: 16px;
      margin: 0 6px;
    }
  }
</style>
