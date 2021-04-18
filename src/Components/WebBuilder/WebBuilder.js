import React, { Component } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import styles from './WebBuilder.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class WebBuilder extends Component{

    render(){
        return (
            <Container className={styles["WebBuilder"]}>
                <div class="Container">
                    <Row>
                        <Header/>
                    </Row>
                    <Row>
                        <Container>
                            <Content/>
                        </Container>
                    </Row>
                </div>
            </Container>
        );
    } 
}

export default WebBuilder;