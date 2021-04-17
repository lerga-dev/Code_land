import React, { Component } from 'react';
import Column from '../Column/Column';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';

class WebBuilder extends Component{

    render(){
        return (
            <Container>
                <Header/>
                <Column/>
                <Content/>
            </Container>
        );
    } 
}

export default WebBuilder;