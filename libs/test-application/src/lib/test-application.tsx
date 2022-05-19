import { useState } from 'react';
import { Button, Form, Table, Toast, ToggleButton } from 'react-bootstrap';
import ResultCard from './result-card';
import styles from './test-application.module.css';

/* eslint-disable-next-line */
export interface TestApplicationProps {
    noOfQuestions: number;
    noOfOptions: number;
    showResults: boolean;
}

export function TestApplication(props: TestApplicationProps) {
    const navigatorRows: number = Math.ceil(props.noOfQuestions / 10);
    const navigatorCols: number = 10;

    const [currQuestion, setCurrQuestion] = useState(1);

    const [answerSheet, setAnswerSheet]: [
        number[],
        React.Dispatch<React.SetStateAction<number[]>>
    ] = useState(new Array(props.noOfQuestions + 1));

    const [showConfirmation, setShowConfirmation] = useState(false);
    const toggleShowConfirmation = () => setShowConfirmation(!showConfirmation);

    return (
        <div className={styles['container']}>
            {props.showResults ? (
                <ResultCard answerSheet={answerSheet} />
            ) : (
                <>
                    <div className={styles['questions']}>
                        <div id={styles['questions-header']}>
                            Navigator Deck
                        </div>
                        <Table
                            className={styles['navigator-deck']}
                            size="sm"
                            variant="dark"
                        >
                            <tbody>
                                {[...Array(navigatorRows).keys()].map(
                                    (rowNo) => (
                                        <tr>
                                            {[...Array(navigatorCols).keys()]
                                                .map(
                                                    (colNo) =>
                                                        rowNo * 10 + colNo + 1
                                                )
                                                .filter(
                                                    (index) =>
                                                        index <=
                                                        props.noOfQuestions
                                                )
                                                .map((index) => (
                                                    <td>
                                                        <ToggleButton
                                                            variant="outline-light"
                                                            type="checkbox"
                                                            id={`button-${index}`}
                                                            size="sm"
                                                            value={index}
                                                            checked={
                                                                currQuestion ==
                                                                index
                                                            }
                                                            onChange={() => {
                                                                setCurrQuestion(
                                                                    index
                                                                );
                                                            }}
                                                        >
                                                            {index}
                                                        </ToggleButton>
                                                    </td>
                                                ))}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <div className={styles['options']}>
                        Choose the correct answer
                        <Form>
                            {[...Array(props.noOfOptions).keys()].map(
                                (optionNo) => (
                                    <Form.Check
                                        type="checkbox"
                                        name="group-checkbox"
                                        id={`checkbox-${optionNo + 1}`}
                                        label={`${optionNo + 1}`}
                                        onClick={() => {
                                            let newArr = [...answerSheet];
                                            newArr[currQuestion] = optionNo + 1;
                                            setAnswerSheet(newArr);
                                        }}
                                        checked={
                                            answerSheet[currQuestion] ===
                                            optionNo + 1
                                        }
                                    />
                                )
                            )}
                            <Button
                                id={styles['previous-button']}
                                variant="outline-info"
                                onClick={() => {
                                    toggleShowConfirmation();
                                    setCurrQuestion(currQuestion - 1);
                                }}
                            >
                                Previous
                            </Button>
                            <Button
                                id={styles['next-button']}
                                variant="outline-info"
                                onClick={() => {
                                    toggleShowConfirmation();
                                    setCurrQuestion(currQuestion + 1);
                                }}
                            >
                                Next
                            </Button>
                        </Form>
                        <Toast
                            onClose={toggleShowConfirmation}
                            show={showConfirmation}
                            animation={true}
                            delay={1000}
                            bg="dark"
                            autohide
                        >
                            <Toast.Body
                                className={styles['option-notification']}
                            >
                                Options saved !!
                            </Toast.Body>
                        </Toast>
                    </div>
                </>
            )}
        </div>
    );
}

export default TestApplication;
