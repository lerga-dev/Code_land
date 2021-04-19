import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import styles from './Header.module.css';


const header = (props) => {
    return(
        <Container className={styles["Header"]}>
            <div class="jumbotron">
                <h1 class="display-4">Code land</h1>
                <p class="lead">This site is currently under development.</p>
            </div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Code Examples</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Webs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">4 Dummies</Nav.Link>
                </Nav.Item>
            </Nav>

        </Container>
    )
};

export default header;