import Container from 'react-bootstrap/Container';

const articleContent = (props) => {
    return(
        <Container>
            <div class="jumbotron">
                <img class="card-img-top" src={props.articleToShow["img"]}/>
                <h1 class="display-4">{props.articleToShow["title"]}</h1>
                <p class="lead">{props.articleToShow["body1"]}</p>
                <hr class="my-4"/>
                <p>{props.articleToShow["body2"]}</p>
            </div>
        </Container>
    )
};

export default articleContent;