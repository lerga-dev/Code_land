import Container from 'react-bootstrap/Container';
import styles from './Article.module.css'


const article = (props) => {
    return(
        <Container className={styles["Article"]}>
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" src={props.img}/>
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.body1}</p>
                    <a class="btn btn-primary" href={props.url} role="button">go to article content</a>
                </div>
            </div>
        </Container>
    )
};

export default article;