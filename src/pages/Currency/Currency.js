import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Col, Form, Row, FormGroup, ControlLabel, Input, Dropdown, } from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';
import GroupActions from '../../Containers/GroupActions/GroupActions';

export default class Currency extends React.Component{
    
    componentDidMount = () => {
      document.title = "Currencies";
    };
    
    render() {
        return (
            <Container style={{display:'flex',flexDirection:'row',height:'100vh'}}>
            <NavBar history={this.props.history}/>
            <Container>
                <TheHeader/>
                <Content style={{backgroundColor: '#F4F5F7',overflow: 'auto',}}>
                <Form style={{margin:'10px'}}>
                    <Col sm={12}>
                        
                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Name</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Sign</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Contry</ControlLabel>
                                        <Dropdown title="Select the country currency">
                                            <Dropdown.Item>1</Dropdown.Item>
                                            <Dropdown.Item>2</Dropdown.Item>
                                            <Dropdown.Item>3</Dropdown.Item>
                                            <Dropdown.Item>4</Dropdown.Item>
                                        </Dropdown>
                                    </FormGroup>
                                </Col>
                            </Row>
                        <br/><br/>
                        <GroupActions/>
                    </Col>
                    <Col sm={12}></Col>
                    </Form>
                </Content>
            </Container>
            </Container>
        );
    }
}
