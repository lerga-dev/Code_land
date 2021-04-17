import React, { Component } from 'react';
import Column from '../Column/Column';
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
                        <div class="col-4">
                            <Column/>
                        </div>
                        <div class="col-8">
                            <Container>
                                <Content/>
                            </Container>
                        </div>
                    </Row>
                </div>
            </Container>
        );
    } 
}

export default WebBuilder;