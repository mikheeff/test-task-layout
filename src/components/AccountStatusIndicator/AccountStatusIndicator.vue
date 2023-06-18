<script setup lang="ts">
  import { useRootStore } from '@/stores/RootStore';
  import { computed } from 'vue';
  import { AccountStatus } from '@/types/AccountStatus';

  interface Props {
    status?: AccountStatus;
  }

  const props = defineProps<Props>();

  const rootStore = useRootStore();

  const classes = computed(() => ({
    'account-status-indicator--online': status.value === AccountStatus.ONLINE,
    'account-status-indicator--away': status.value === AccountStatus.AWAY,
    'account-status-indicator--offline': status.value === AccountStatus.OFFLINE,
    'account-status-indicator--do-not-disturb': status.value === AccountStatus.DO_NOT_DISTURB,
    'account-status-indicator--half': rootStore.accountStatus === AccountStatus.ONLINE &&
      !rootStore.isAcceptCalls && rootStore.isAcceptChats && !props.status,
    'account-status-indicator--empty': rootStore.accountStatus === AccountStatus.ONLINE &&
      !(rootStore.isAcceptCalls || rootStore.isAcceptChats) && !props.status,
  }));

  const status = computed(() => props.status ?? rootStore.accountStatus);
</script>

<template>
  <span
    class="account-status-indicator"
    :class="classes"
  />
</template>

<style scoped lang="scss">
  @use '@/styles/utils/index' as utils;

  .account-status-indicator {
    position: relative;
    display: flex;
    height: 12px;
    width: 12px;
    border: 1px solid;
    border-radius: 50%;
    transition: background-color utils.$transition-duration;
    overflow: hidden;

    &:before {
      opacity: 0;
      transition: opacity utils.$transition-duration;
      content: '';
      @include utils.absolute-xy-center;
      width: 10px;
      height: 10px;
      background-color: utils.$color-white;
      border-radius: 50%;
    }

    &:after {
      opacity: 0;
      transition: opacity utils.$transition-duration;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 5px;
      height: 12px;
      background-color: utils.$color-status-success;
    }

    &.account-status-indicator--online {
      background-color: utils.$color-status-success;
      border-color: utils.$color-status-success;
    }

    &.account-status-indicator--away {
      background-color: utils.$color-status-warning;
      border-color: utils.$color-status-warning;
    }

    &.account-status-indicator--offline {
      background-color: utils.$color-grey-light;
      border-color: utils.$color-status-grey;
    }

    &.account-status-indicator--do-not-disturb {
      background-color: utils.$color-attention;
      border-color: utils.$color-attention;
    }

    &.account-status-indicator--half {
      &:before {
        opacity: 1;
      }

      &:after {
        opacity: 1;
      }
    }

    &.account-status-indicator--empty {
      border-width: 2px;
      background-color: utils.$color-white;
    }

  }
</style>
