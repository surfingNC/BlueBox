import React from "react";
import Alert from "./Alert";
import img1 from "./images/bluesBoxLogo.png";

interface GalleryProps {
  alertMessage: string;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
  alertVisible: boolean;
}

const Gallery: React.FC<GalleryProps> = ({
  alertMessage,
  setAlertVisible,
  alertVisible,
}) => {
  const handleImageClick = () => {
    // Display alert when image is clicked
    // Assuming that you have a state to manage the visibility of the alert
    // and a function to toggle that state (e.g., setAlertVisible)
    setAlertVisible(true);
  };

  const handleAlertClose = () => {
    // Close the alert
    // Assuming that you have a state to manage the visibility of the alert
    // and a function to toggle that state (e.g., setAlertVisible)
    setAlertVisible(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src={img1}
        alt=""
        style={{ cursor: "pointer" }}
        onClick={handleImageClick}
      />
      {alertVisible && <Alert onClose={handleAlertClose}>{alertMessage}</Alert>}
    </div>
  );
};

export default Gallery;
