import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, color = "primary", style }: Props) => {
  const buttonStyle: React.CSSProperties = {
    // Add consistent styles for the buttons
    padding: "10px 20px", // Adjust padding to your preference
    width: "150px", // Set a consistent width
    height: "40px", // Set a consistent height
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    ...style, // Merge the provided style with the consistent styles
  };

  return (
    <button
      className={"btn btn-" + color}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
