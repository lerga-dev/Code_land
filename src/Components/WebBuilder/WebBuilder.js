import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Header from '../Header/Header';
import ArticleContent from '../Articles/Article/AticleContent/ArticleContent';
import styles from './WebBuilder.module.css';
import Articles from '../Articles/Articles';


class WebBuilder extends Component{
    state = {
        articlesToShow: {
            article1:{
                title: "Test Article 1",
                body1: "This is the body 1 of the Article test.",
                body2: "This is the body 2 of the Article test.",
                img: "Images are not supported yet.",
                url: "/article"
            },
            article2:{
                title: "Test Article 2",
                body1: "This is the body 1 of the Article test.",
                body2: "This is the body 2 of the Article test.",
                img: "Images are not supported yet.",
                url: "/article"
            },
            article3:{
                title: "Test Article 3",
                body1: "This is the body 1 of the Article test.",
                body2: "This is the body 2 of the Article test.",
                img: "Images are not supported yet.",
                url: "/article"
            }
        },
        articleSelected: "article2"
    }

    render(){
        return (
            <Container className={styles["WebBuilder"]}>
                <div class="Container">
                    <Row>
                        <Header/>
                    </Row>
                    <Row>
                        <Container>
                            <Router basename="Code_land">
                                <Switch>
                                    <Route exact path="/">
                                        <Articles articlesToShow={this.state.articlesToShow}/>
                                    </Route>
                                    <Route exact path="/article">
                                        <ArticleContent articleToShow={this.state.articlesToShow[this.state.articleSelected]}/>
                                    </Route>
                                </Switch>
                            </Router>
                        </Container>
                    </Row>
                </div>
            </Container>
        );
    } 
}

export default WebBuilder;