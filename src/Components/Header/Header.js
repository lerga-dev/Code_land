import Container from '../Container/Container';
import classes from './Header.css';

const header = (props) => {
    return(
        <Container className={classes.Header}>
            <div>This is a header!</div>
        </Container>
    )
};

export default header;