<script setup lang="ts">
</script>

<template>
  <header class="header">
    <button class="button">
      Create
    </button>
  </header>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/_index.scss' as utils;

  .header {
    display: flex;
    width: 100%;
    background-color: utils.$color-white;
  }
</style>
