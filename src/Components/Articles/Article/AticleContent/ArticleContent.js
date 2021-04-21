import Container from 'react-bootstrap/Container';

const articleContent = (props) => {
    return(
        <Container>
            <div className="jumbotron">
                <img className="card-img-top" src={props.articleToShow["img"]}/>
                <h1 className="display-4">{props.articleToShow["title"]}</h1>
                <p className="lead">{props.articleToShow["body1"]}</p>
                <hr className="my-4"/>
                <p>{props.articleToShow["body2"]}</p>
            </div>
        </Container>
    )
};

export default articleContent;