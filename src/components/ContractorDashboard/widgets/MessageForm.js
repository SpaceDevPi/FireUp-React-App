import React, { useState, useContext, useRef, useEffect } from 'react'
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
    const messageEndRef = useRef(null);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
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
        //setMessages(roomMessages);
        getMessages();  
    });


    function handleSubmit(e){
        e.preventDefault();
        if(!message) return;
        const today = new Date();
        const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
        const time = today.getHours() + ':' + minutes;
        const roomId = currentRoom;
        
        socket.emit("message-room", roomId, message, entrepreneur._id, entrepreneur.fullName, time, todayDate);
        setMessage("");
        //reload page 
        getMessages();
    }

    function getEntrepreneur(id){
        socket.emit("get-entrepreneur", id);
        socket.on("get-entrepreneur", (payload) => {
            return payload.firstname + " " + payload.lastname;
        })
    }

    function dateRender(date){
        const today = new Date();
        const todayDate = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();
        const messageDate = new Date(date);
        const messageDateDay = messageDate.getDate();
        const messageDateMonth = messageDate.getMonth();
        const messageDateYear = messageDate.getFullYear();
        if(todayDate === messageDateDay && todayMonth === messageDateMonth && todayYear === messageDateYear){
            return "Today";
        }else if(todayDate - 1 === messageDateDay && todayMonth === messageDateMonth && todayYear === messageDateYear){
            return "Yesterday";
        }else {
            return messageDate.toDateString();
        }
    }

    function scrollToBottom() {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function renderMessage(message){
         if(message.from === entrepreneur._id){
            return (
                <li className="clearfix">
                    <div className="message-data align-right">
                      <span className="message-data-time" >{message.time}, {dateRender(message.date)}</span> &nbsp; &nbsp;
                      <span className="message-data-name" >{ message.senderName }</span> <i class="fa fa-circle me"></i>
                      
                    </div>
                    <div className="message other-message float-right">
                        {message.content}
                    </div> 
                
                    </li>
            )
        } else {
            return (
                <li>
                    <div class="message-data">
                        <span class="message-data-name"><i class="fa fa-circle online"></i> {message.senderName}</span>
                        <span class="message-data-time">{message.time}, {dateRender(message.date)}</span>
                    </div>
                    <div class="message my-message">
                        {message.content}
                    </div>
                </li>
            )
        }
    }
    
    return (
        <>
            <div className="messages-output">
                {!entrepreneur && <div className="alert alert-danger">You are not logged in</div>}
                {entrepreneur && messages.map((message) => (
                    
                    renderMessage(message)
            
                ))}
                <div ref={messageEndRef} />
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