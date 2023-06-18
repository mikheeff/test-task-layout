import { defineStore } from 'pinia';
import type { ContactDetails } from '@/types/ContactDetails';
import { MOCKED_CONTACT_DETAILS } from '@/mocks/contact';
import type { Activity } from '@/types/Activity';
import { MOCKED_ACTIVITIES_LIST } from '@/mocks/activities';
import type { UserProfile } from '@/types/UserProfile';
import { MOCKED_USER_PROFILE } from '@/mocks/user-profile';
import { AccountStatus } from '@/types/AccountStatus';
import { ContactDetailsTab } from '@/types/ContactDetailsTab';

interface RootStore {
  contactDetails: ContactDetails;
  activities: Activity[];
  userProfile: UserProfile;
  accountStatus: AccountStatus;
  isAcceptCalls: boolean;
  isAcceptChats: boolean;
  contactDetailsSelectedTab: ContactDetailsTab;
  messagesAmount: number;
}

export const useRootStore = defineStore('root', {
  state: (): RootStore => ({
    contactDetails: MOCKED_CONTACT_DETAILS,
    activities: MOCKED_ACTIVITIES_LIST,
    userProfile: MOCKED_USER_PROFILE,
    accountStatus: AccountStatus.ONLINE,
    isAcceptCalls: true,
    isAcceptChats: true,
    contactDetailsSelectedTab: ContactDetailsTab.ACTIVITIES,
    messagesAmount: 5,
  }),
  getters: {
    contactFullName(): string {
      const { firstName, lastName } = this.contactDetails;

      return `${firstName} ${lastName}`;
    },
    profileFullName(): string {
      const { firstName, lastName } = this.userProfile;

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
