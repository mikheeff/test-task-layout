<script setup lang="ts">
</script>

<template>
  <QHeader class="the-header">
    <button class="button">
      Create
    </button>
  </QHeader>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/index' as utils;

  .the-header {
    position: fixed;
    top: 0;
    display: flex;
    height: 52px;
    width: 100%;
    background-color: utils.$color-white;
    box-shadow: inset 0px -1px 0px utils.$color-gray-light;
    padding: utils.spacing-unit(2) utils.spacing-unit(8);
  }
</style>

