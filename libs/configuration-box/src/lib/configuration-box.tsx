import styles from './configuration-box.module.css';
import { Card, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ConfigurationBoxProps {
    onConfigSubmit: (
        noOfOptions: number,
        noOfQuestions: number,
        timerDuartion: number
    ) => void;
}

export const ConfigurationBox = (props: ConfigurationBoxProps) => {
    const [noOfQuestions, setNoOfQuestions] = useState(30);
    const [noOfOptions, setNoOfOptions] = useState(4);
    const [timerDuration, setTimerDuration] = useState(60);

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
                            <input
                                type="number"
                                value={noOfQuestions}
                                onChange={(e) =>
                                    setNoOfQuestions(e.target.valueAsNumber)
                                }
                            />{' '}
                            X{' '}
                            <input
                                type="number"
                                min={2}
                                max={6}
                                value={noOfOptions}
                                onChange={(e) =>
                                    setNoOfOptions(e.target.valueAsNumber)
                                }
                            />
                            <br />
                            <br />
                            <b>Timer (in mins) :</b>{' '}
                            <input
                                type="number"
                                value={timerDuration}
                                min={30}
                                max={180}
                                onChange={(e) =>
                                    setTimerDuration(e.target.valueAsNumber)
                                }
                            />
                        </Card.Text>
                        <Button
                            variant="dark"
                            onClick={() =>
                                props.onConfigSubmit(
                                    noOfOptions,
                                    noOfQuestions,
                                    timerDuration
                                )
                            }
                        >
                            Confirm
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default ConfigurationBox;
