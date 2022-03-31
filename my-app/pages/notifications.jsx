/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';

const Notifications = ({ user, setUser }) => {
	// const [notifications, setNotifications] = useState(null);

	const markAsReadHandler = (id) => {
		axios
			.patch('/api/user/notification', { id }, { withCredentials: true })
			.then((res) => {
				setUser((prev) => ({ ...prev, notifications: res.data.data }));
			})
			.catch((err) => console.log('okay'));
	};

	const deleteNotificationHandler = (id) => {
		axios
			.patch('/api/user/notification/delete', { id }, { withCredentials: true })
			.then((res) => setNotifications(res.data.data))
			.catch((err) => console.log(err));
	};

	const getNotifications = () => {
		axios
			.get('/api/user/notifications', {
				withCredentials: true,
			})
			.then((res) => setNotifications(res.data.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (user) return getNotifications();
		return;
	}, [user]);

	return (
		<div className='page-container'>
			<h1>Notifications</h1>
			<div className='body'>
				{user && user.notifications.length <= 0 && (
					<h2 style={{ textAlign: 'center' }}>No Notifications.</h2>
				)}
				{user &&
					user.notifications.map((notification) => {
						return (
							<div
								key={notification._id}
								className={
									notification.seen
										? 'notification-card read'
										: 'notification-card'
								}
							>
								<h2 className='notification-sender'>{notification.sender}</h2>
								<h4
									onClick={() => console.log(notification)}
									className='notification-content'
								>
									{notification.content}
								</h4>
								<h6 className='notification-date'>
									{notification.createdAt.slice(0, 10)}
								</h6>
								<div className='mark-as-container'>
									{notification.seen ? (
										''
									) : (
										<div className='marked-as-read'></div>
									)}
								</div>
								<button
									className='mark-as-read-btn'
									onClick={() => markAsReadHandler(notification._id)}
								>
									{notification.seen ? 'Mark Unread' : 'Mark Read'}
								</button>
								<button
									className='delete-btn'
									onClick={() => deleteNotificationHandler(notification._id)}
								>
									X
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Notifications;
