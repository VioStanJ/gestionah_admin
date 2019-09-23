import React from 'react';
import { Modal, Button, Form, Row, Col, FormGroup, ControlLabel, Input, FlexboxGrid, DatePicker, Avatar } from 'rsuite';

export default class User extends React.Component{
    render() {
        return (
            <>
             <Modal show={this.props.show} onHide={this.props.close} size="lg">
                <Modal.Header>
                    <Modal.Title>Add A User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FlexboxGrid>
                            <Col lg={12}>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Full Name</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>E-mail</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Row>
                    
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Phone</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Password</ControlLabel>
                                        <Input type="password" required/>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Retyp Password</ControlLabel>
                                        <Input type="password" required/>
                                    </FormGroup>
                                </Row>
                            </Col>

                            <Col lg={12} style={{paddingLeft:'20px'}}>
                                <Row>
                                    <center>
                                        <Avatar size="lg" alt="US" circle/>
                                    </center>
                                </Row>
                                <Row>
                                    <center>
                                    <FormGroup>
                                        <ControlLabel>Birthday</ControlLabel>
                                        <DatePicker />
                                    </FormGroup>
                                    </center>
                                </Row>
                                <Row><h4>Adress</h4></Row>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Country</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <br/>
                                    <Col lg={12}>
                                    <FormGroup>
                                        <ControlLabel>City</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                    <FormGroup>
                                        <ControlLabel>Adress</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </FlexboxGrid>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.close} appearance="primary">
                    Save
                    </Button>
                    <Button onClick={this.props.close} appearance="subtle">
                    Cancel
                    </Button>
                </Modal.Footer>
            </Modal>   
            </>
        );
    }
}