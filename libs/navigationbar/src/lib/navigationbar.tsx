import { Navbar, Container, Nav } from 'react-bootstrap';
import { Timer } from './timer';
// import styles from './navigationbar.module.css';

/* eslint-disable-next-line */
export interface NavigationbarProps {}

export const Navigationbar = (props: NavigationbarProps) => {
    console.log('Hello World');

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
                <Nav className="me-auto">
                    <Navbar.Text>
                        <Timer
                            isTimer={true}
                            timerDuration={60}
                            currentTime={new Date().valueOf()}
                        />
                    </Navbar.Text>
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigationbar;
