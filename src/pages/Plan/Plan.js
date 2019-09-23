import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Col, Form, Row, FormGroup, ControlLabel, Input, InputNumber, } from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';
import GroupActions from '../../Containers/GroupActions/GroupActions';
import PlanCard from '../../Components/PlanCard';

export default class Plan extends React.Component{
    
    componentDidMount = () => {
      document.title = "Plans";
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
                                        <ControlLabel>Price</ControlLabel>
                                        <Input type="text" required/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Day Value</ControlLabel>
                                        <InputNumber/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Discount</ControlLabel>
                                        <InputNumber/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col lg={24}>
                                    <FormGroup>
                                        <ControlLabel>Description</ControlLabel>
                                        <Input componentClass="textarea" row={3} required/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        <br/><br/>
                        <GroupActions/>
                    </Col>
                    <Col sm={12}>
                        <br/>
                        <Row style={{marginLeft:'15px',marginRight:'15px'}}>
                            <PlanCard />
                        </Row>
                    </Col>
                    </Form>
                </Content>
            </Container>
            </Container>
        );
    }
}
