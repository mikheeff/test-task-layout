import { ContactStatus } from './ContactStatus';
import { ContactDetailsType } from './ContactDetailsType';

export interface ContactDetails {
  firstName: string;
  lastName: string;
  profileImage: string;
  orgName: string;
  orgLink: string;
  filesAmount: number;

  assignToName: string;
  assignToProfileImage: string;
  status: ContactStatus;
  email: string;
  emailType: ContactDetailsType;
  phone: string;
  phoneType: ContactDetailsType;
  orgDetailsName: string;
  orgDetailsImage: string;
  lists: string[];
  segments: string[];
  followersImages: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
