import styles from './configuration-box.module.css';
import { Card, Button, Nav } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface ConfigurationBoxProps {}

export const ConfigurationBox = (props: ConfigurationBoxProps) => {
  return (
    <>
      <div id={styles['card-container']}>
        <Card bg="light" text="dark">
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ConfigurationBox;
