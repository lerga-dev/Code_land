import ArticleContent from '../Articles/Article/AticleContent/ArticleContent';
import Articles from '../Articles/Articles';
import Container from '../Container/Container';

const content = (props) => {
    return(
        <Container>
            <div>This is a placeholder for the content!</div>
            <Articles/>
            <ArticleContent/>
        </Container>
    )
};

export default content;