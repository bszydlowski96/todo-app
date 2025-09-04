import { Button } from "./components/Button";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Button label="Primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Danger" variant="danger" size="lg" />
      <Button label="Disabled" disabled />
    </div>
  );
}

export default App;
