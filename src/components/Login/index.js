import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';

import api from '../../services/api';

import { Container, Badge, NotificationList, Notification } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  // useEffect(() => {
  //   async function loadNotifications() {
  //     const response = await api.get('notifications');

  //     const data = response.data.map(notification => ({
  //       ...notification,
  //       timeDistance: formatDistance(
  //         parseISO(notification.createdAt),
  //         new Date(),
  //         { addSuffix: true, locale: pt }
  //       ),
  //     }));

  //     setNotifications(data);
  //   }

  //   loadNotifications();
  // }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <Button variant="primary" style={{ marginRight: 10 }}>
          Login
        </Button>
      </Badge>

      <NotificationList visible={visible}>
        {notifications.map(notification => (
          <Notification key={notification._id} unread={!notification.read}>
            <p>{notification.content}</p>
            <time>{notification.timeDistance}</time>
            {!notification.read && (
              <button
                onClick={() => handleMarkAsRead(notification._id)}
                type="button"
              >
                Marcar como lida
              </button>
            )}
          </Notification>
        ))}
      </NotificationList>
    </Container>
  );
}
