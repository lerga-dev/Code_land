import React, { Component } from 'react';
import Column from '../Column/Column';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import styles from './WebBuilder.module.css';

class WebBuilder extends Component{

    render(){
        return (
            <Container className={styles["WebBuilder"]}>
                <Header/>
                <Column/>
                <Content/>
            </Container>
        );
    } 
}

export default WebBuilder;