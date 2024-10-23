import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
