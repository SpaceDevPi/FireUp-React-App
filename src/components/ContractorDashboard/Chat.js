import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MessageForm from './widgets/MessageForm';
import Sidebar from './widgets/Sidebar'

function Chat() {
  return (
    <Container>
        <Row>
            <Col md={4}>
                <Sidebar />
            </Col>
            <Col md={8}>
                <MessageForm />
            </Col>
        </Row>
    </Container>
  )
}

export default Chat;