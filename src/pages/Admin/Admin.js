import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
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
                <Content style={{backgroundColor: '#F4F5F7'}}>
                    <h1>ADMIN</h1>
                </Content>
            </Container>
            </Container>
        );
    }
}
