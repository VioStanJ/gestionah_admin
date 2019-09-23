import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Row, Col, Form, FormGroup, ControlLabel, Avatar, Input, DatePicker, ButtonGroup, Button, FlexboxGrid, } from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';
import TheTable from '../../Containers/TheTable/TheTable';

export default class Admin extends React.Component{
    
    componentDidMount = () => {
      document.title = "Admin";
    };
    
    state = {
        cells : ['id','FullName','Email'],
          data: [
              {
                  id:1,
                  FullName : 'Jean',
                  Email : 'jean@gmail.com',
              },
              {
                id:2,
                FullName:'Louise',
                Email : 'louise@gmail.com   '
              }
            ]
    }

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
                                            <Input type="text" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>E-mail</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Phone</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>ID Number</ControlLabel>
                                            <Input type="email" required/>
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
                                            <Input type="password" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Retype Password</ControlLabel>
                                            <Input type="password" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Phrase factor</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <h4>Adress</h4>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Country</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>City</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Adress</ControlLabel>
                                            <Input type="email" required/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col lg={12}>
                            <Row>
                                <Col lg={24}>
                                    <br/>
                                    <TheTable cells={this.state.cells} data={this.state.data}/>
                                </Col>
                                <Col lg={24}>
                                    <br/>
                                    <FlexboxGrid justify="center">
                                        <ButtonGroup size="lg">
                                            <Button appearance="primary">New</Button>
                                            <Button appearance="primary">Save</Button>
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
