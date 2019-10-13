import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, Row, Col, Form, FormGroup, ControlLabel, Avatar, Input, DatePicker} from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';
import TheTable from '../../Containers/TheTable/TheTable';
import GroupActions from '../../Containers/GroupActions/GroupActions';
import Axios from 'axios';

export default class Admin extends React.Component{
    
    state = {
        form:{
            full_name:'',
            email:'',
            id_number:'',
            password:'',
            password_confirmation:'',
            double_pass:'',
            phone:'',
            city:'',
            adress:'',
            country:'',
            logo : null,
        },
        cells : ['id','full_name','email','id_number','phone'],
        data: [],
        edit : false,
    }

    getData = () => {
        Axios.get('/v1/get_admins').then((response)=>{
            this.setState({data:response.data.admins});
        }).catch((error)=>{
          console.log(error);
        });
    }

    componentDidMount = () => {
        document.title = "Admin";
        this.getData();
    };

    handleInput(e, id) {
        let val = this.state.form;
        val[id] = e;
        this.setState({ form: val });
    }

    reset = () => {
        this.setState({form:{
            full_name:'',
            email:'',
            id_number:'',
            password:'',
            password_confirmation:'',
            double_pass:'',
            phone:'',
            city:'',
            adress:'',
            country:'',
            avatar : null,
        },edit:false});
        this.getData();
    }

    save = () => {
        if(this.state.edit){
            Axios.post('/v1/update_admin',this.state.form).then((response)=>{
                console.log(response);
                if(response.data.success){
                    this.reset();
                }else{
                    alert(response.data.message);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }else{
            Axios.post('/v1/admin_register',this.state.form).then((response)=>{
                console.log(response);
                if(response.data.success){
                    this.getData();
                    this.reset();
                }else{
                    alert(response.data.message);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
    }

    edit = (dt) => {
        let tt = this.state.form;
        tt.id = dt.id;
        tt.full_name = dt.full_name;
        tt.phone = dt.phone;
        tt.id_number = dt.id_number;
        tt.country = dt.country;
        tt.city = dt.city;
        tt.adress = dt.adress;
        tt.email = dt.email;

        this.setState({form:tt,edit:true});
    }

    delete = () => {
        if(this.state.edit){
            Axios.delete('/v1/delete_admin/'+this.state.form.id).then((response)=>{
                if(response.data.success){
                    this.reset();
                }else{
                    alert(response.data.message);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }else{
            alert('Please select an admin !');
        }
    }

    render() {
        return (
            <Container style={{display:'flex',flexDirection:'row',height:'100vh'}}>
            <NavBar history={this.props.history}/>
            <Container>
                <TheHeader/>
                <Content style={{backgroundColor: '#F4F5F7',overflow: 'auto',}}>
                <Form style={{padding:'10px'}}>
                        <Col lg={12}>
                            
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <Avatar size="lg" />
                                        {/* <input type="file" name="" id=""/> */}
                                    </Col>
                                    <Col lg={12}>
                                        <FormGroup style={{width:'100%'}}>
                                            <ControlLabel>Full Name</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.full_name} onChange={(e) => this.handleInput(e, 'full_name')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>E-mail</ControlLabel>
                                            <Input type="email" required
                                            value={this.state.form.email} onChange={(e) => this.handleInput(e, 'email')}/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Phone</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.phone} onChange={(e) => this.handleInput(e, 'phone')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>ID Number</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.id_number} onChange={(e) => this.handleInput(e, 'id_number')}/>
                                        </FormGroup>
                                    </Col>

                                    {/* <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Birthday</ControlLabel>
                                            <DatePicker style={{ width: 280 }} />
                                        </FormGroup>
                                    </Col> */}
                                </Row>

                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Password</ControlLabel>
                                            <Input type="password" required
                                            value={this.state.form.password} onChange={(e) => this.handleInput(e, 'password')}/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Retype Password</ControlLabel>
                                            <Input type="password" required
                                            value={this.state.form.password_confirmation} onChange={(e) => this.handleInput(e, 'password_confirmation')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Phrase factor</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.double_pass} onChange={(e) => this.handleInput(e, 'double_pass')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                
                                <h4>Adress</h4>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>Country</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.country} onChange={(e) => this.handleInput(e, 'country')}/>
                                        </FormGroup>
                                    </Col>

                                    <Col lg={12}>
                                        <FormGroup>
                                            <ControlLabel>City</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.city} onChange={(e) => this.handleInput(e, 'city')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'20px'}}>
                                    <Col lg={24}>
                                        <FormGroup>
                                            <ControlLabel>Adress</ControlLabel>
                                            <Input type="text" required
                                            value={this.state.form.adress} onChange={(e) => this.handleInput(e, 'adress')}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            
                        </Col>
                        <Col lg={12}>
                            <Row>
                                <Col lg={24}>
                                    <br/>
                                    <TheTable cells={this.state.cells} data={this.state.data} get={this.edit}/>
                                </Col>
                                <Col lg={24}>
                                    <br/>
                                    <GroupActions new={this.reset} save={this.save} delete={this.delete}/>
                                </Col>
                            </Row>
                        </Col>
                        </Form>
                </Content>
            </Container>
            </Container>
        );
    }
}
