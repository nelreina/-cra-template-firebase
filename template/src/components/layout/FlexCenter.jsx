import React from "react";

const FlexCenter = ({ children, height = "100%", direction = "column" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: direction,
        height,
      }}
    >
      {children}
    </div>
  );
};

export default FlexCenter;
