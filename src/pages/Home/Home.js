import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import NavBar from '../../Containers/NavBar/NavBar';

export default class Home extends React.Component{
    
    componentDidMount = () => {
      document.title = "Home";
    };
    
    render() {
        return (
            <Container style={{display:'flex',flexDirection:'row',height:'100vh'}}>
            <NavBar history={this.props.history}/>
            <Container>
                <TheHeader/>
                <Content style={{backgroundColor: '#F4F5F7'}}>

                </Content>
            </Container>
            </Container>
        );
    }
}
