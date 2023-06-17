<script setup lang="ts">
  import { AppStatusChipType } from '@/types/AppStatusChipType';
  import { ActivityStatus } from '@/types/ActivityStatus';
  import AppStatusChip from '@/components/utils/AppStatusChip.vue';

  interface Props {
    status: ActivityStatus;
  }

  const CONTACT_STATUS_CHIP_TYPE_MAP: Record<ActivityStatus, AppStatusChipType> = {
    [ActivityStatus.NEED_ATTENTION]: AppStatusChipType.PURPLE,
    [ActivityStatus.PROPOSAL_MADE]: AppStatusChipType.PURPLE_DOT,
    [ActivityStatus.CLOSED]: AppStatusChipType.GREY,
    [ActivityStatus.CLICKED]: AppStatusChipType.MINT,
    [ActivityStatus.RESPONDED]: AppStatusChipType.PURPLE,
  };

  const CONTACT_STATUS_TEXT_MAP: Record<ActivityStatus, string> = {
    [ActivityStatus.NEED_ATTENTION]: 'need attention',
    [ActivityStatus.PROPOSAL_MADE]: 'proposal made',
    [ActivityStatus.CLOSED]: 'closed',
    [ActivityStatus.CLICKED]: 'clicked',
    [ActivityStatus.RESPONDED]: 'responded',
  };

  const props = defineProps<Props>();
</script>

<template>
  <AppStatusChip
    class="activity-card-status-chip"
    :type="CONTACT_STATUS_CHIP_TYPE_MAP[props.status]"
  >
    {{ CONTACT_STATUS_TEXT_MAP[props.status] }}
  </AppStatusChip>
</template>
