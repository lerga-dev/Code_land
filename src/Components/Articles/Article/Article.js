import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import styles from './Article.module.css'


const article = (props) => {
    return(
        <Container className={styles["Article"]}>
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={props.img}/>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body1}</p>
                    <Link to={props.url + "/" + props.identifier}>
                        <button className="btn btn-primary" variant="contained" onClick={() => props.changeArticleSelected(props.identifier)}>Open</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
};

export default article;