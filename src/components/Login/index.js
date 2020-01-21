import React from 'react';
import { Button } from 'react-bootstrap';

// import api from '../../services/api';

import { Container, Form } from './styles';

export default function Notifications() {
  // const [visible, setVisible] = useState(false);
  // const [notifications, setNotifications] = useState([]);

  // const hasUnread = useMemo(
  //   () => !!notifications.find(notification => notification.read === false),
  //   [notifications]
  // );

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

  // function handleToggleVisible() {
  //   setVisible(!visible);
  // }

  // async function handleMarkAsRead(id) {
  //   await api.put(`notifications/${id}`);

  //   setNotifications(
  //     notifications.map(notification =>
  //       notification._id === id ? { ...notification, read: true } : notification
  //     )
  //   );
  // }

  return (
    <Container>
      <Button variant="primary" style={{ marginRight: 10 }}>
        Login
      </Button>

      <Form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}
