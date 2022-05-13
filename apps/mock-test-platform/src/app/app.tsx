// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConfigurationBox } from '@final-summer-workspace/configuration-box';
import { Navigationbar } from '@final-summer-workspace/navigationbar';
import styles from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestApplication } from '@final-summer-workspace/test-application';

export function App() {
  return (
    <>
      <Navigationbar></Navigationbar>
      {/* <div id={styles['main-container']}>
        <ConfigurationBox></ConfigurationBox>
      </div> */}
      <TestApplication />
      <footer id={styles['footer-container']}>
        <p>
          Author: Hege Refsnes <br />
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </footer>
    </>
  );
}

export default App;
