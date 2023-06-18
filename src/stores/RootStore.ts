import { defineStore } from 'pinia';
import type { ContactDetails } from '@/types/ContactDetails';
import { MOCKED_CONTACT_DETAILS } from '@/mocks/contact';

interface RootStore {
  contactDetails: ContactDetails;
}

export const useRootStore = defineStore('root', {
  state: (): RootStore => ({
    contactDetails: MOCKED_CONTACT_DETAILS
  }),
  getters: {
    contactFullName(): string {
      const { firstName, lastName } = this.contactDetails;

      return `${firstName} ${lastName}`;
    }
  }
});
