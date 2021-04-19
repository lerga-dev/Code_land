import Container from 'react-bootstrap/Container';

import Article from './Article/Article';
import styles from './Articles.module.css'

const articles = (props) => {
    let requiredArticles = Object.keys(props.articlesToShow)
    .map(requiredArticleKey => {
        return [...Array(props.articlesToShow[requiredArticleKey])].map((_,i) => {
            return <Article key={requiredArticleKey+i} 
                        title={props.articlesToShow[requiredArticleKey]["title"]}
                        body1={props.articlesToShow[requiredArticleKey]["body1"]}
                        img={props.articlesToShow[requiredArticleKey]["img"]}
                        url={props.articlesToShow[requiredArticleKey]["url"]}/>
        });
    }).reduce((arr,el) => {
        return arr.concat(el);
    }, []);

    if (requiredArticles.length === 0){
        requiredArticles = <p>Sorry, no articles have been found</p>;
    }
    
    return(
        <Container className={styles["Articles"]}>
            {requiredArticles}
        </Container>
    )
};

export default articles;