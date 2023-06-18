<template>
  <QToggle
    class="app-toggle"
    v-bind="$attrs"
    :dense="true"
  />
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  $toggle-height: 20px;

  .app-toggle {
    transition: opacity utils.$transition-duration;

    &:hover,
    &:focus {
      opacity: 0.75;
    }

    ::v-deep(.q-toggle__inner) {
      padding: 0;
      transition: color utils.$transition-duration;

      &.q-toggle__inner--falsy {
        color: utils.$color-grey-4;

        .q-toggle__thumb {
          &:after {
            border-color: utils.$color-grey-4;
          }
        }
      }
    }

    ::v-deep(.q-toggle__track) {
      transition: background-color utils.$transition-duration;
      height: $toggle-height;
      border-radius: 14px;
      opacity: 1;
    }

    ::v-deep(.q-toggle__thumb) {
      &:before {
        transform: none !important;
      }

      &:after {
        transition: border utils.$transition-duration;
        background-color: utils.$color-white;
        box-shadow: none;
        border: 2px solid utils.$color-primary;
      }
    }
  }
</style>
