import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Row, Col, Form, FormGroup, ControlLabel, Avatar, Input, DatePicker, ButtonGroup, Button, FlexboxGrid, } from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';

export default class Admin extends React.Component{
    
    componentDidMount = () => {
      document.title = "Admin";
    };
    
    render() {
        return (
            <Container style={{display:'flex',flexDirection:'row',height:'100vh'}}>
            <NavBar history={this.props.history}/>
            <Container>
                <TheHeader/>
                <Content style={{backgroundColor: '#F4F5F7',overflow: 'auto',}}>
                        <Col lg={12}>
                            <Form style={{padding:'10px'}}>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <Avatar size="lg" />
                                    </Col>
                                    <Col lg={12}>
                                        <FormGroup style={{width:'100%'}}>
                                            <ControlLabel>Full Name</ControlLabel>
                                            <Input name="email" type="text" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>E-mail</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Phone</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>ID Number</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Birthday</ControlLabel>
                                            <DatePicker style={{ width: 280 }} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <Input name="email" type="password" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Retype Password</ControlLabel>
                                            <Input name="email" type="password" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Phrase factor</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <h4>Adress</h4>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Country</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>City</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Adress</ControlLabel>
                                            <Input name="email" type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col lg={12}>
                            <Row>
                                <Col lg={24}>
                                    
                                </Col>
                                <Col lg={24}>
                                    <FlexboxGrid justify="center">
                                        <ButtonGroup size="lg">
                                            <Button appearance="primary">New</Button>
                                            <Button appearance="primary">Update</Button>
                                            <Button color="orange">Delete</Button>
                                        </ButtonGroup>
                                    </FlexboxGrid>
                                </Col>
                            </Row>
                        </Col>
                </Content>
            </Container>
            </Container>
        );
    }
}
