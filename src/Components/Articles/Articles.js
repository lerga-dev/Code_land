import Container from '../Container/Container';
import Article from './Article/Article';

const articles = (props) => {
    return(
        <Container>
            <Article/>
            <Article/>
            <Article/>
        </Container>
    )
};

export default articles;