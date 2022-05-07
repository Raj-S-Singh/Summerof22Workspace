// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigationbar } from '@final-summer-workspace/navigationbar';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Navigationbar></Navigationbar>
      <NxWelcome title="mock-test-platform" />
      <div />
    </>
  );
}

export default App;
