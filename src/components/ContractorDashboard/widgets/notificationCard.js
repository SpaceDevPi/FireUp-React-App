import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function NotificationCard() {
    return (
        <div className="notification-card card">
            <div className="card-header">
                  <h3>Notifications</h3>
                </div>
                <div className="card-body">
                  <div className="row notif-list">
                    <div className="col">
                        <NotificationsNoneIcon /> This is a notitifaction message.
                    </div>
                    
                  </div>
                </div>
        </div>
    );
}

export default NotificationCard;