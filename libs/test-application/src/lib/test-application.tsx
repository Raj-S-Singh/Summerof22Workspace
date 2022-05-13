import styles from './test-application.module.css';

/* eslint-disable-next-line */
export interface TestApplicationProps {}

export function TestApplication(props: TestApplicationProps) {
  return (
    <div className={styles['container']}>
      {/* <h1>Welcome to TestApplication!</h1> */}
    </div>
  );
}

export default TestApplication;
