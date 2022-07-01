import { createContext } from 'react';

export interface INotificationContext {
  notifications: string[];
  pushNotification(text: string): void;
  removeNotification(text: string): void;
}

const NotificationContext = createContext<INotificationContext | null>(null);

export default NotificationContext;
