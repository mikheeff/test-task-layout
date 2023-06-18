import { defineStore } from 'pinia';
import type { ContactDetails } from '@/types/ContactDetails';
import { MOCKED_CONTACT_DETAILS } from '@/mocks/contact';
import type { Activity } from '@/types/Activity';
import { ACTIVITIES_LIST } from '@/mocks/activities';

interface RootStore {
  contactDetails: ContactDetails;
  activities: Activity[];
}

export const useRootStore = defineStore('root', {
  state: (): RootStore => ({
    contactDetails: MOCKED_CONTACT_DETAILS,
    activities: ACTIVITIES_LIST,
  }),
  getters: {
    contactFullName(): string {
      const { firstName, lastName } = this.contactDetails;

      return `${firstName} ${lastName}`;
    },
    openActivities(): Activity[] {
      return this.activities.filter(activity => new Date(activity.date) >= new Date());
    },
    pastActivities(): Activity[] {
      return this.activities.filter(activity => new Date(activity.date) < new Date());
    }
  }
});
