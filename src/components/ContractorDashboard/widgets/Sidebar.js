import { SportsHockeyRounded } from '@material-ui/icons';
import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { AppContext } from "../../../context/appContext";
import axios from "axios";

const url = "http://localhost:5000/rooms";

function Sidebar() {
    const {entrepreneur} = useSelector((state) => state.auth);
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
    }

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
        console.log(payload)
    })

    function getRooms (){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setRooms(data)
        })
        console.log(rooms)
    }


    if (!entrepreneur) {
        return <></>
    }
        
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx} style={{cursor:'pointer', display: "flex", justifyContent:"space-between"}} active={room == currentRoom} onClick={() => joinRoom(room)} >
                        {room} {currentRoom !== room && <span></span>}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Members</h2>
            {members.map((member) => (
                <ListGroup.Item key={member.id} style={{cursor:'pointer'}} active={privateMemberMsg?._id == member?._id} onClick={() => handlePrivateMemberMsg(member)}  disabled={member._id == entrepreneur._id}>{member.firstname}</ListGroup.Item>
            ))}
        </>
    )
    
}

export default Sidebar