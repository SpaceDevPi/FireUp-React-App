import React, { useState, useContext } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { AppContext } from '../../../context/appContext';
import './MessageForm.css'
import { get } from 'react-scroll/modules/mixins/scroller';

function MessageForm() {
    const [message, setMessage] = useState("");
    const {entrepreneur} = useSelector((state) => state.auth);
    const {socket, currentRoom, setMessages, messages, privateMemberMsg} = useContext(AppContext);

    function getFormattedDate() {
        const date = new Date();
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();

        month = month.length > 1 ? month : "0" + month;
        let day = date.getDate().toString();

        day = day.length > 1 ? day : "0" + day;
        return month + "/" + day + "/" + year;
    }

    
    function getMessages() {
        socket.emit("get-messages", currentRoom);
        socket.on("get-messages", (payload) => {
            setMessages(payload);
            
        })
    }

    const todayDate = getFormattedDate();

    socket.off('room-messages').on('room-messages', (roomMessages) => {
        console.log(roomMessages);
        //setMessages(roomMessages);
        getMessages();  
        console.log(messages);
    });


    function handleSubmit(e){
        e.preventDefault();
        if(!message) return;
        const today = new Date();
        const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
        const time = today.getHours() + ':' + minutes;
        const roomId = currentRoom;
        
        socket.emit("message-room", roomId, message, entrepreneur._id, time, todayDate);
        setMessage("");
        //reload page 
        getMessages();
    }


    
    return (
        <>
            <div className="messages-output">
                {!entrepreneur && <div className="alert alert-danger">You are not logged in</div>}
                {entrepreneur && messages.map((message) => (
                    <div className="message-container">
                        {message.content}
                    </div>
                ))}
                {/* {entrepreneur && messages.map(({_id: date,messagesByDate}, idx) => {
                    <div key={idx}>
                        <p className="alert alert-info text-center message-date-indicator">{date}</p>  
                        {messagesByDate.map(({content, time, from: sender}, msgIdx) => {
                            <div className="message" key={msgIdx}>
                                <p>{content}</p>
                            </div>
                        })}                    
                    </div>
                })} */}
            </div>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={11}> 
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter message" value={message} onChange={(e)=> setMessage(e.target.value)}  disabled={!entrepreneur}/>
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                            <Button variant="primary" type="submit" disabled={!entrepreneur} style={{width:'100%', backgroundColor: "orange"}}>
                                <SendOutlinedIcon />
                            </Button>
                        </Col>
                    </Row>
                </Form>
        </>
    )
}

export default MessageForm