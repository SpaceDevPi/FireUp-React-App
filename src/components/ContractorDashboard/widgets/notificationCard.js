import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useApi } from "../../../hooks/useApi";
import { useSelector } from 'react-redux';

function NotificationCard() {
  const { entrepreneur } = useSelector((state) => state.auth);

  const [projects,err,reload] = useApi('projectlive/ProjectLiveBycontractor/' + entrepreneur._id);

    return (
        <div className="notification-card card">
            <div className="card-header">
                  <h3>Notifications</h3>
                </div>
                <div className="card-body">
                  <div className="row notif-list">
                  { projects  ?  (
                                projects.map((element, id) => {
                                    return (
                                        <>

                    <div className="col">
                        <NotificationsNoneIcon /> You have Planned a Live video for the  { (new Date(element.date)).toLocaleDateString()} at { (new Date(element.date)).toLocaleTimeString()}
                    </div>
                    </>
                                    )
                                })) : (  <div className="col">You have not projects planned yet  </div>)
                            }          

                   
                  </div>
                </div>
        </div>
    );
}

export default NotificationCard;