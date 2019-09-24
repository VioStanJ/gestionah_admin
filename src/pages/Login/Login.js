import React from 'react';
import { Row, Col, Grid, Avatar, Form, FormGroup, ControlLabel, FormControl, FlexboxGrid, Button, Notification, Modal} from 'rsuite';
import blue from './../../assets/img/blue.jpg';
import ges from './../../assets/img/gest1.png';
import Axios from 'axios';
import {connect} from 'react-redux';

class Login extends React.Component{

    state = {
        form:{
            email : '',
            password : '',
            double_pass : '',
        },
        show : false,
    }

    componentDidMount = () => {
      document.title="Login";
    };
    
    submit = (e) =>{
        e.preventDefault();
        Axios.post('/v1/login_one',this.state.form).then((response)=>{
            if(response.data.success){
                this.setState({show:true});
            }else{
                Notification.info({
                    title: 'Info',
                    description: <p style={{ width: 320 }}>{response.data.message}</p>
                  });
            }
        }).catch(()=>{
            Notification.error({
                title: 'Error',
                description: <p style={{ width: 320 }}>Network Error !</p>
              });
        });
    }

    Pass = (e) => {
        e.preventDefault();
        Axios.post('/v1/adminlogin',this.state.form).then((response)=>{
            console.log(response,'ADMIIN');
            
            if(response.data.success){
                console.log(this.props,'PROPS');
                const rp = response.data.admin;
                let usr = {...this.props.profile};
                usr.birthday = rp.birthday;
                usr.email = rp.email;
                usr.full_name = rp.full_name;
                usr.id = rp.id;
                usr.id_number = rp.id_number;
                usr.phone = rp.phone;
                usr.token = response.data.token;
                usr.credentials = true;
                this.props.admin(usr);
                this.props.history.push('home');
            }else{
                Notification.info({
                    title: 'Info',
                    description: <p style={{ width: 320 }}>{response.data.message}</p>
                  });
            }
        });
    }

    handle = (e,index) => {
        let ff = this.state.form;
        ff[index] = e;
        this.setState({form:ff});
    }

    close = () => {
        this.setState({show:false});
    }

    render() {
        const fh={
            height:'100%'
        }
        return (
            <>
            <Grid fluid style={{height:'100vh'}}>
                <Row style={fh}>
                    <Col sm={12} lg={16} md={12} xsHidden style={{height:'100%',backgroundImage:'url('+blue+")",backgroundSize:'cover'}}>
                        
                    </Col>
                    <Col sm={12} lg={8} md={12} xs={24} style={fh}>
                        <Form style={{height:'100%',display:'flex',justifyContent:'center'}} onSubmit={this.submit}>
                            <FlexboxGrid justify="center" style={{flexDirection:'column'}} align="middle">
                                <Row>
                                    <Avatar circle size="lg" src={ges} alt="GS"/>
                                </Row>

                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl name="email" type="email" required
                                        value={this.state.form.email}
                                        onChange={(e)=>this.handle(e,'email')}/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl name="password" type="password" required
                                        value={this.state.form.password}
                                        onChange={(e)=>this.handle(e,'password')}/>
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" appearance="primary" >Submit</Button>
                                </FormGroup>
                            </FlexboxGrid>
                        </Form>
                    </Col>
                </Row>
            </Grid>

            {/* Modal Double Pass */}

            <Modal size='xs' show={this.state.show} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title>Enter Your Double Factor Phrase</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.Pass}>
                <Modal.Body>
                    
                        <center>
                            <FormGroup>
                                <FormControl type="password"
                                    value={this.state.form.double_pass}
                                    onChange={(e)=>this.handle(e,'double_pass')}/>
                            </FormGroup>
                        </center>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" appearance="primary">
                    Ok
                    </Button>
                    <Button onClick={this.close} appearance="subtle">
                    Cancel
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
            </>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      profile: state.auth.admin,
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      admin: (val) => dispatch({type:'ADMIN',payload:val}),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);