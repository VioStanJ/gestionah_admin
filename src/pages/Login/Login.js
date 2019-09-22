import React from 'react';
import { Row, Col, Grid, Avatar, Form, FormGroup, ControlLabel, FormControl, FlexboxGrid, Button} from 'rsuite';
import blue from './../../assets/img/blue.jpg';
import ges from './../../assets/img/gest1.png';

export default class Login extends React.Component{

    componentDidMount = () => {
      document.title="Login";
    };
    
    submit = () =>{
        this.props.history.push('home');
    }

    render() {
        const fh={
            height:'100%'
        }
        return (
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
                                    <FormControl name="email" type="email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl name="password" type="password" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" appearance="primary" >Submit</Button>
                                </FormGroup>
                            </FlexboxGrid>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}