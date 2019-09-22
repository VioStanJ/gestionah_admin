import React from 'react';
import TheHeader from '../../Containers/Header/Header';
import { Container } from 'rsuite';

export default class Home extends React.Component{
    
    componentDidMount = () => {
      document.title = "Home";
    };
    
    render() {
        return (
            <Container>
                <TheHeader/>
            </Container>
        );
    }
}
