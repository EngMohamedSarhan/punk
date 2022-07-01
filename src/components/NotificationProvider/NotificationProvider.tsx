import React, { FC, memo, ReactNode, useState } from 'react';

import NotificationContext from '../../context/NotificationContext';

export interface INotificationProviderProps {
  children?: ReactNode;
}

const NotificationProvider: FC<INotificationProviderProps> = memo(
  ({ children }) => {
    const [notifications, setNotifications] = useState<string[]>([]);

    const updateNotifications = () => setNotifications([...notifications]);

    const removeNotification = (text: string) => {
      const index = notifications.indexOf(text);

      if (index > -1) {
        notifications.splice(index, 1);
        updateNotifications();
      }
    };

    const pushNotification = (text: string) => {
      if (!notifications.includes(text)) {
        notifications.push(text);
        updateNotifications();
      }
    };

    return (
      <NotificationContext.Provider
        value={{ notifications, pushNotification, removeNotification }}
      >
        {children}
      </NotificationContext.Provider>
    );
  }
);

export default NotificationProvider;
