import { ActivityStatus } from './ActivityStatus';
import { TaskPriority } from './TaskPriority';
import { ActivityType } from './ActivityType';

export interface Activity {
  id: string;
  title: string;
  text: string;
  type: ActivityType;
  status: ActivityStatus;
  priority: TaskPriority | null;
  date: string;
  contactImage: string;
}
