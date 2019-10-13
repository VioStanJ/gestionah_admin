import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Row, Col, Form, FormGroup, ControlLabel, Avatar, Input,FlexboxGrid, Dropdown, Toggle, IconButton, Icon,} from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';
import TheTable from '../../Containers/TheTable/TheTable';
import User from '../../Containers/User/User';
import GroupActions from '../../Containers/GroupActions/GroupActions';
import Axios from 'axios';

export default class Company extends React.Component{
    
    state = {
        addUser : false,
        types : [],
        cells : ['id','Company','Domain','Type'],
          data: [
              {
                  id:1,
                  Company : 'Jean',
                  Domain : 'jean@gmail.com',
                  Type:'TH'
              },
              {
                id:2,
                Company:'Louise',
                Domain : 'louise@gmail.com',
                Type:'HJl'
              }
            ]
    }

    componentDidMount = () => {
      document.title = "Companies";
      Axios.get('/v1/get_types').then((response)=>{
        this.setState({types:response.data.types});
      }).catch((error)=>{
        console.log(error);
      });
    };

    close = () => {
        this.setState({addUser:false});
    }

    render() {
        return (
            <>
            <Container style={{display:'flex',flexDirection:'row',height:'100vh'}}>
            <NavBar history={this.props.history}/>
            <Container>
                <TheHeader/>
                <Content style={{backgroundColor: '#F4F5F7',overflow: 'auto',}}>
                <Form style={{padding:'10px'}}>
                        <Col lg={12}>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FlexboxGrid justify="center">
                                            <Avatar size="lg" />
                                        </FlexboxGrid>
                                    </Col>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Company Name</ControlLabel>
                                            <Input name="tex" type="text" required/>
                                        </FormGroup>
                                    </Col>
                                    
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <Dropdown title="Company Type" color="green">
                                            {
                                                this.state.types.map((item)=>{
                                                    return  <Dropdown.Item key={item.id}>{item.label}</Dropdown.Item>
                                                })
                                            }                                            
                                        </Dropdown>
                                    </Col>

                                    <Col lg={12}>
                                        <center>
                                            <FormGroup>
                                                <ControlLabel>Active</ControlLabel>
                                                <Toggle />{/*defaultChecked*/}
                                            </FormGroup>
                                        </center>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <center>
                                                <Toggle defaultChecked style={{marginRight:'5px',marginTop: 5,}}/>
                                                <span style={{position:'relative',top:'3px'}}>Pattente</span>
                                        </center>
                                    </Col>

                                    <Col lg={12}>
                                            <IconButton icon={<Icon icon="user" />} color="blue" 
                                                circle style={{marginRight:'5px'}}
                                                onClick={()=>this.setState({addUser:true})}/>
                                             Add User
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
                            
                        </Col>
                        <Col lg={12}>
                            <Row>
                                <Col lg={24}>
                                    <br/>
                                    <TheTable cells={this.state.cells} data={this.state.data}/>
                                </Col>
                                <Col lg={24}>
                                    <br/>
                                    <GroupActions/>
                                </Col>
                            </Row>
                        </Col>
                        </Form>
                </Content>
            </Container>
            </Container>
            {/* MODAL */}
            <User show={this.state.addUser} close={this.close} />
            {/* END Modal */}
            </>
        );
    }
}
