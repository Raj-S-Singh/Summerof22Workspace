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
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Configure</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Configure your OMR</Card.Title>
            <Card.Text>
              <input type="number" value={30} /> X{' '}
              <input type="number" min={2} max={6} value={4} />
              <br />
              <br />
              <b>Timer (in mins) :</b>{' '}
              <input type="number" value={60} min={30} max={180} />
            </Card.Text>
            <Button variant="dark">Confirm</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ConfigurationBox;
