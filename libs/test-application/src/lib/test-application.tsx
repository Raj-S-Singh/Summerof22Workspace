import { Form } from 'react-bootstrap';
import styles from './test-application.module.css';

/* eslint-disable-next-line */
export interface TestApplicationProps {
    // noOfQuestions: number;
    noOfOptions: number;
}

export function TestApplication(props: TestApplicationProps) {
    return (
        <div className={styles['container']}>
            <div className={styles['questions']}>Questions</div>
            <div className={styles['options']}>
                Choose the correct answer
                <Form>
                    {[...Array(props.noOfOptions).keys()]
                        .map((i) => i + 1)
                        .map((optionNo) => (
                            <Form.Check
                                type="checkbox"
                                name="group-checkbox"
                                id={`checkbox-${optionNo}`}
                                label={`${optionNo}`}
                            />
                        ))}
                </Form>
            </div>
        </div>
    );
}

export default TestApplication;
