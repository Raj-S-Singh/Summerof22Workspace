import { useState } from 'react';
import { ConfigurationBox } from '@final-summer-workspace/configuration-box';
import { Navigationbar } from '@final-summer-workspace/navigationbar';
import { TestApplication } from '@final-summer-workspace/test-application';

import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
    const [launchTest, setLaunchTest] = useState(false);

    const [noOfOptions, setNoOfOptions] = useState(4);
    const [noOfQuestions, setNoOfQuestions] = useState(30);
    const [timerDuration, setTimerDuration] = useState(60);
    const [showTimer, setShowTimer] = useState(false);

    const [showResults, setShowResults] = useState(false);

    return (
        <>
            <Navigationbar
                timerDuration={timerDuration}
                showTimer={showTimer}
                onTimerExpire={() => {
                    setShowTimer(false);
                    setShowResults(true);
                }}
            ></Navigationbar>
            {launchTest ? (
                <TestApplication
                    noOfOptions={noOfOptions}
                    noOfQuestions={noOfQuestions}
                    showResults={showResults}
                />
            ) : (
                <div id={styles['main-container']}>
                    <ConfigurationBox
                        onConfigSubmit={(
                            no_of_options,
                            no_of_questions,
                            timer_duration
                        ) => {
                            setNoOfOptions(no_of_options);
                            setNoOfQuestions(no_of_questions);
                            setTimerDuration(timer_duration);
                            setShowTimer(true);
                            setLaunchTest(true);
                        }}
                    ></ConfigurationBox>
                </div>
            )}

            <footer id={styles['footer-container']}>
                <p>
                    Author: Raj Shree Singh <br />
                    <a href="mailto:rssingh1999david@gmail.com">
                        Personal Email
                    </a>
                </p>
            </footer>
        </>
    );
}

export default App;
