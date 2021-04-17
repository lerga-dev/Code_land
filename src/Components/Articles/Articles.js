import Container from '../Container/Container';
import Article from './Article/Article';

const articles = (props) => {
    return(
        <Container>
            <div>This is the list for the articles!</div>
            <Article/>
        </Container>
    )
};

export default articles;