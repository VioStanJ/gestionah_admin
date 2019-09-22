import React from 'react';
import { Header, Navbar, Nav, Avatar } from 'rsuite';
import user from './../../assets/img/user.png';

export default class TheHeader extends React.Component{
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
        // const hed  = {
        //     boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)'
        // }
        return (
            <Header id="BAC">
                <Navbar style={{backgroundColor: '#6abf69',}} appearance="inverse">
                <Navbar.Header style={mrg}>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav pullRight  style={mrg}>
                        <h6 style={eml}>place@email.here</h6>
                        <Avatar className="navbar-brand logo" src={user} circle/>
                    </Nav>
                </Navbar.Body>
                </Navbar>
            </Header>
        );
    }
}