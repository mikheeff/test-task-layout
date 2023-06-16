<script setup lang="ts">

  import AppBreadcrumbs from '@/components/utils/AppBreadcrumbs.vue';
</script>

<template>
  <QPage class="main-page">
    <AppBreadcrumbs
      class="main-page__breadcrumbs"
      :routes="['Contacts', 'Jennifer Crowford']"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p>
  </QPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .main-page {
    padding-top: utils.spacing-unit(2);

    .main-page__breadcrumbs {
      margin-bottom: utils.spacing-unit(2);
    }
  }
</style>
