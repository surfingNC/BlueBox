import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ImageButton from "./components/ImageButton";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ImageButton></ImageButton>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          One day, I will make money programming
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
