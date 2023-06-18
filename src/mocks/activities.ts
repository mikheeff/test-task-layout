import type { Activity } from '@/types/Activity';
import { ActivityType } from '@/types/ActivityType';
import { ActivityStatus } from '@/types/ActivityStatus';
import { TaskPriority } from '@/types/TaskPriority';

export const MOCKED_ACTIVITIES_LIST: Activity[] = [
  {
    id: '1',
    type: ActivityType.TASK,
    title: 'Product demo call with Ruth',
    text: 'Please call and explain the customer about our product and answer.',
    status: ActivityStatus.NEED_ATTENTION,
    priority: TaskPriority.URGENT,
    date: '2023-06-20T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-1.png'
  },
  {
    id: '2',
    type: ActivityType.DEAL,
    title: 'Harrison & Co Summer Order',
    text: 'The company has increased the usage of our services and grew the number of lorem ipsum dolor lorem ipsum.',
    status: ActivityStatus.PROPOSAL_MADE,
    priority: null,
    date: '2023-06-19T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-2.png'
  },
  {
    id: '3',
    type: ActivityType.TICKET,
    title: 'I need help with my invoice!',
    text: 'How to connect PayPal? Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor' +
      ' lorem ipsum lorem ipsum dolor lorem ipsum.',
    status: ActivityStatus.CLOSED,
    priority: TaskPriority.LOW,
    date: '2023-07-13T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-3.png'
  },
  {
    id: '4',
    type: ActivityType.EMAIL_CAMPAIGN,
    title: 'Newsletter January 2021 Harrison & Co Summer Or Lorem ipsum dolor',
    text: 'Campaign sent to someone@apple.com',
    status: ActivityStatus.CLICKED,
    priority: null,
    date: '2023-07-14T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-4.png'
  },
  {
    id: '5',
    type: ActivityType.TEXT_MESSAGE_CAMPAIGN,
    title: 'Newsletter January 2021 Harrison & Co Summer Ordinace at your service',
    text: 'Campaign sent to +44 (464) 234 95 23 (Work)',
    status: ActivityStatus.RESPONDED,
    priority: null,
    date: '2023-07-16T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-4.png'
  },
  {
    id: '6',
    type: ActivityType.EMAIL,
    title: 'Personal offer',
    text: 'Thank you for being our loyal customer. In this email we would like to let you know ' +
      'that lorem ipsum dolor lorem ipsum.',
    status: ActivityStatus.CLICKED,
    priority: null,
    date: '2023-07-12T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-4.png'
  },
  {
    id: '7',
    type: ActivityType.CHAT,
    title: 'Hey, can you help me with my invoice?',
    text: 'Hello. I have an issue with access to my account, can you check system status?',
    status: ActivityStatus.CLOSED,
    priority: null,
    date: '2023-07-18T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-2.png'
  },
  {
    id: '8',
    type: ActivityType.TASK,
    title: 'Product demo call with Ruth',
    text: 'Please call and explain the customer about our product and answer.',
    status: ActivityStatus.NEED_ATTENTION,
    priority: TaskPriority.URGENT,
    date: '2023-05-11T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-1.png'
  },
  {
    id: '9',
    type: ActivityType.DEAL,
    title: 'Harrison & Co Summer Order',
    text: 'The company has increased the usage of our services and grew the number of lorem ipsum dolor lorem ipsum.',
    status: ActivityStatus.PROPOSAL_MADE,
    priority: null,
    date: '2023-05-12T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-2.png'
  },
  {
    id: '10',
    type: ActivityType.TICKET,
    title: 'I need help with my invoice!',
    text: 'How to connect PayPal? Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor' +
      ' lorem ipsum lorem ipsum dolor lorem ipsum.',
    status: ActivityStatus.CLOSED,
    priority: TaskPriority.LOW,
    date: '2023-05-13T11:41:19.802Z',
    contactImage: 'src/assets/images/follower-avatar-3.png'
  },
];
