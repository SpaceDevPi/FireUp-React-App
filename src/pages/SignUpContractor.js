import React from 'react'
import MultiStep from '../components/ContractorForm/MultiStep'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';

const SignUpContractor = () => {

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <MultiStep />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignUpContractor;
