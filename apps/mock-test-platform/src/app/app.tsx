// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConfigurationBox } from '@final-summer-workspace/configuration-box';
import { Navigationbar } from '@final-summer-workspace/navigationbar';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <ConfigurationBox></ConfigurationBox>
    </>
  );
}

export default App;
