import { SportsHockeyRounded } from '@material-ui/icons';
import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { AppContext } from "../../../context/appContext";
import axios from "axios";
import { addNotifications, resetNotifications } from '../../../services/auth/authSlice';


const url = "http://localhost:5000/rooms";

function Sidebar() {
    const {entrepreneur} = useSelector((state) => state.auth);
    const { notif }= useSelector((state) => state.auth.newMessages);
    const dispatch = useDispatch();
    const { socket, setMembers, members, setCurrentRoom, setRooms, privateMemberMsg, rooms, setPrivateMemberMsg, currentRoom } = useContext(AppContext)
    
    function joinRoom(room, isPublic = true) {
        if(!entrepreneur){
            return alert("You must be logged in to join a room");
        }
        socket.emit("join-room", room);
        setCurrentRoom(room);

        if(isPublic){
            setPrivateMemberMsg(null);
        }
        // dispatch notification
        dispatch(resetNotifications(room));

        
    }

    socket.off('notifications').on('notifications', (room) => {
        if (currentRoom != room) {
            dispatch(addNotifications(room));
        }
    })

    function orderIds(id1, id2){
        if(id1 > id2){
            return id1 + "-" + id2;
        }else {
            return id2 + "-" + id1;
        }
    }

    function handlePrivateMemberMsg(member){
        setPrivateMemberMsg(member);
        const roomId = orderIds(entrepreneur._id, member._id);
        joinRoom(roomId, false);
    }

    useEffect(() => {
        if(entrepreneur){
            setCurrentRoom("general");
            getRooms();
            socket.emit("join-room");
            socket.emit("new-user");
        }
    }, [])


    socket.off('new-user').on('new-user', (payload) => {
        setMembers(payload)
    })

    function getRooms (){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setRooms(data)
        })
    }


    if (!entrepreneur) {
        return <></>
    }

    function renderNotif(){
        if(notif){
          
            console.log(notif)
            
        }
    }
        
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx} style={{cursor:'pointer', display: "flex", justifyContent:"space-between"}} active={room == currentRoom} onClick={() => joinRoom(room)} >
                        {room} {currentRoom !== room && <span className="badge rounded-pill bg-primary">{renderNotif()}</span>}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Members</h2>
            {members.map((member) => (
                <ListGroup.Item key={member.id} style={{cursor:'pointer'}} active={privateMemberMsg?._id == member?._id} onClick={() => handlePrivateMemberMsg(member)}  disabled={member._id == entrepreneur._id}>
                    <Row>
                        <Col xs={9}>
                            {member.firstname} {member.lastname}
                            {member._id == entrepreneur._id && <span> (You)</span>}
                            {member.status == "offline" && <span> (Offline)</span>}
                            {member.status == "online" && <span> <i class="fa fa-circle online"></i></span>}
                        </Col>
                    </Row>
                    
                </ListGroup.Item>
            ))}
        </>
    )
    
}

export default Sidebar