import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [imageAlertVisible, setImageAlertVisible] = useState(false);
  const [loginAlertVisible, setLoginAlertVisible] = useState(false);
  const [createAccountAlertVisible, setCreateAccountAlertVisible] =
    useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAlertClose = () => {
    setAlertVisible(false);
    setImageAlertVisible(false);
    setLoginAlertVisible(false);
    setCreateAccountAlertVisible(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Gallery
        alertMessage="Clicked on the image!"
        setAlertVisible={setImageAlertVisible}
        alertVisible={imageAlertVisible}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          One day I will make money programming!
        </Alert>
      )}
      <div style={{ marginTop: "20px" }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          color="primary"
          onClick={() => setLoginAlertVisible(true)}
          style={{ marginRight: "100px" }}
        >
          Login
        </Button>
        <Button
          color="primary"
          onClick={() => setCreateAccountAlertVisible(true)}
        >
          Create Account
        </Button>
      </div>
      {loginAlertVisible && (
        <Alert onClose={() => setLoginAlertVisible(false)}>
          Login button clicked.
        </Alert>
      )}
      {createAccountAlertVisible && (
        <Alert onClose={() => setCreateAccountAlertVisible(false)}>
          Create Account button clicked.
        </Alert>
      )}
    </div>
  );
};

export default App;
