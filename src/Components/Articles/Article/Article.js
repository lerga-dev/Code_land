import Container from "../../Container/Container";


const article = (props) => {
    return(
        <Container>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Article title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go to Article content</a>
                </div>
            </div>
        </Container>
    )
};

export default article;