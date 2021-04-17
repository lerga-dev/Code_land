import ArticleContent from '../Articles/Article/AticleContent/ArticleContent';
import Articles from '../Articles/Articles';
import Container from '../Container/Container';

const content = (props) => {
    return(
        <Container>
            <Articles/>
            <ArticleContent/>
        </Container>
    )
};

export default content;