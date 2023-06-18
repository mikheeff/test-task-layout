import type { ContactDetails } from '@/types/ContactDetails';
import { ContactStatus } from '@/types/ContactStatus';
import { ContactDetailsType } from '@/types/ContactDetailsType';

export const MOCKED_CONTACT_DETAILS: ContactDetails = {
  firstName: 'Jennifer',
  lastName: 'Crowford',
  profileImage: 'src/assets/images/user-avatar.png',
  orgName: 'Sunflower Limited',
  orgLink: 'https://google.com',
  filesAmount: 8,
  assignToName: 'Franklin Strickland',
  assignToProfileImage: 'src/assets/images/assign-avatar.png',
  status: ContactStatus.LEAD,
  email: '',
  emailType: ContactDetailsType.WORK,
  phone: '(990) 338-9983',
  phoneType: ContactDetailsType.HOME,
  orgDetailsName: 'MasterCard',
  orgDetailsImage: 'src/assets/images/mastercard.svg',
  lists: [
    'Key account',
    'Important',
  ],
  segments: ['Summer client'],
  followersImages: [
    'src/assets/images/follower-avatar-1.png',
    'src/assets/images/follower-avatar-2.png',
    'src/assets/images/follower-avatar-3.png',
    'src/assets/images/follower-avatar-4.png',
  ],
  tags: [
    'account',
    'issue',
  ],
  createdAt: '2023-06-18T11:41:19.802Z',
  updatedAt: '2023-06-18T11:41:19.802Z',
};
