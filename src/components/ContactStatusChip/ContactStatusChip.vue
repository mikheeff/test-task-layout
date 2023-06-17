<script setup lang="ts">
  import { ContactStatus } from '@/types/ContactStatus';
  import AppStatusChip from '@/components/utils/AppStatusChip.vue';
  import { AppStatusChipType } from '@/types/AppStatusChipType';

  interface Props {
    status: ContactStatus;
  }

  const CONTACT_STATUS_CHIP_TYPE_MAP: Record<ContactStatus, AppStatusChipType> = {
    [ContactStatus.LEAD]: AppStatusChipType.GREEN
  };

  const CONTACT_STATUS_TEXT: Record<ContactStatus, string> = {
    [ContactStatus.LEAD]: 'Lead'
  };

  const props = defineProps<Props>();
</script>

<template>
  <AppStatusChip :type="CONTACT_STATUS_CHIP_TYPE_MAP[props.status]">
    {{ CONTACT_STATUS_TEXT[props.status] }}
  </AppStatusChip>
</template>
