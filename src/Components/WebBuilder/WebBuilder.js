import React, { useState } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Header from '../Header/Header';
import ArticleContent from '../Articles/Article/AticleContent/ArticleContent';
import styles from './WebBuilder.module.css';
import Articles from '../Articles/Articles';


function WebBuilder(){
    const [articleSelected, setArticleSelected] = useState("article1");
    const [filterSelected, setFilterSelected] = useState("Home");
    const [articlesToShow, setArticlesToShow] = useState({
        "article1":{
            category: "Tools",
            title: "Test Article 1",
            body1: "This is the body 1 of the Article test.",
            body2: "This is the body 2 of the Article test.",
            img: "Images are not supported yet.",
            url: "/article"
        },
        "article2":{
            category: "Examples",
            title: "Test Article 2",
            body1: "This is the body 1 of the Article test.",
            body2: "This is the body 2 of the Article test.",
            img: "Images are not supported yet.",
            url: "/article"
        },
        "article3":{
            category: "News",
            title: "Test Article 3",
            body1: "This is the body 1 of the Article test.",
            body2: "This is the body 2 of the Article test.",
            img: "Images are not supported yet.",
            url: "/article"
        }
    });

    const changeArticleSelected = (id) => {
        setArticleSelected(id)
    }

    const changeFilterSelected = (filter) => {
        setFilterSelected(filter)
        let newArticlesToShow = {}
        Object.keys(articlesToShow)
        .map(requiredArticleKey => {
            if(articlesToShow[requiredArticleKey]["category"] === filter){
                newArticlesToShow.requiredArticleKey = {...articlesToShow[requiredArticleKey]}
            }
        });
        setArticlesToShow(newArticlesToShow)
    }

    return (
        <Container className={styles["WebBuilder"]}>
            <Router basename="Code_land">
                <Row>
                    <Header changeFilterSelected={changeFilterSelected}/>
                </Row>
                <Row>
                    <Container>
                        
                            <Switch>
                                <Route exact path="/">
                                    <Articles articlesToShow={articlesToShow} changeArticleSelected={changeArticleSelected}/>
                                </Route>
                                <Route path="/article">
                                    <ArticleContent articleToShow={articlesToShow[articleSelected]}/>
                                </Route>
                            </Switch>
                        
                    </Container>
                </Row>
            </Router>
        </Container>
    );
}

export default WebBuilder;