import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import styles from './navigationbar.module.css';

/* eslint-disable-next-line */
export interface NavigationbarProps {}

export function Navigationbar(props: NavigationbarProps) {
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
      </Navbar>{' '}
      <div>
        <h1>Welcome to Navigationbar!</h1>
      </div>
    </>
  );
}

export default Navigationbar;
