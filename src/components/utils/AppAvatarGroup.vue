<script setup lang="ts">
  interface Props {
    links: string[];
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="app-avatar-group">
    <QAvatar
      v-for="link in props.links"
      :key="link"
      class="app-avatar-group__avatar"
      size="24px"
    >
      <img
        class="app-avatar-group__avatar-image"
        :src="link"
        alt="avatar"
      >
    </QAvatar>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/utils/_index.scss' as utils;

  .app-avatar-group {
    display: inline-flex;
    flex-direction: row-reverse;

    .app-avatar-group__avatar {
      &:not(:last-child) {
        margin-left: - utils.spacing-unit(2);
      }
    }

    .app-avatar-group__avatar-image {
      border: 2px solid utils.$color-white;
    }
  }
</style>
