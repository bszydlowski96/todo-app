import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "grid", gap: 12, padding: 24 }}>
      <Button label="Primary" onClick={() => setCount((c) => c + 1)} />
      <Button label="Secondary" variant="secondary" />
      <Button label="Danger" variant="danger" size="lg" />
      <Button label="Disabled" disabled />
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
