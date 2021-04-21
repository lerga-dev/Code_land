import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import styles from './Header.module.css';


const header = (props) => {
    return(
        <Container className={styles["Header"]}>
            <div className="jumbotron">
                <h1 className="display-4">Code land</h1>
                <p className="lead">This site is currently under development.</p>
            </div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => props.changeFilterSelected(selectedKey)}
                >
                <Nav.Item>
                    <Nav.Link eventKey="Home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Tools">Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Examples">Code Examples</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="News">News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Webs">Webs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Books">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Dummies">4 Dummies</Nav.Link>
                </Nav.Item>
            </Nav>

        </Container>
    )
};

export default header;