import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container, Content, } from 'rsuite';
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
                <Content style={{backgroundColor: '#F4F5F7',overflow: 'auto',}}>

                </Content>
            </Container>
            </Container>
        );
    }
}
