import { Navbar, Container, Nav } from 'react-bootstrap';
import { Timer } from './timer';

export interface NavigationbarProps {
    timerDuration: number;
    showTimer: boolean;
    onTimerExpire: () => void;
}

export const Navigationbar = (props: NavigationbarProps) => {
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
                            isTimer={props.showTimer}
                            timerDuration={props.timerDuration * 60}
                            currentTime={new Date().valueOf()}
                            onTimerExpire={props.onTimerExpire}
                        />
                    </Navbar.Text>
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigationbar;
