<script setup lang="ts">
  import AppBreadcrumbs from '@/components/utils/AppBreadcrumbs.vue';
  import ContactControlPanel from '@/components/ContactControlPanel/ContactControlPanel.vue';
</script>

<template>
  <QPage class="contact-page">
    <AppBreadcrumbs
      class="contact-page__breadcrumbs"
      :routes="['Contacts', 'Jennifer Crowford']"
    />
    <ContactControlPanel />
  </QPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .contact-page {
    padding-top: utils.spacing-unit(2);

    .contact-page__breadcrumbs {
      margin-bottom: utils.spacing-unit(2);
    }
  }
</style>
