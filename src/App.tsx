import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertVisible2, setAlertVisible2] = useState(false);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <Gallery
        alertMessage="Clicked on the image!"
        setAlertVisible={setAlertVisible2}
        alertVisible={alertVisible2}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          One day I will make money programming!
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;
