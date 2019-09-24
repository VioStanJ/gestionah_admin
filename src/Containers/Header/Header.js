import React from 'react';
import { Header, Navbar, Nav, Avatar } from 'rsuite';
import user from './../../assets/img/user.png';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class TheHeader extends React.Component{

    state = {
        logon : false
    }

    componentDidMount = () => {
        if(!this.props.profile.credentials){
            this.setState({logon:true});
        }
    };
    
    render() {
        const mrg = {
            marginLeft: '20px',
            marginRight: '20px',
            position: 'relative',
            top:'8px'
        }
        const eml = {
            display: 'inline',
            position: 'relative',
            top: '-7px',
            right: '8px',
            fontWeight: '100'
        }
        if(this.state.logon){
            return <Redirect to="/"/>
        }
        return (
            <Header>
                <Navbar style={{backgroundColor: '#37C2FA',}} appearance="inverse">
                <Navbar.Header style={mrg}>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav pullRight  style={mrg}>
                        <h6 style={eml}>{this.props.profile.email}</h6>
                        <Avatar className="navbar-brand logo" src={user} circle/>
                    </Nav>
                </Navbar.Body>
                </Navbar>
            </Header>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      profile: state.auth.admin,
    }
  }
  
export default connect(mapStateToProps)(TheHeader);