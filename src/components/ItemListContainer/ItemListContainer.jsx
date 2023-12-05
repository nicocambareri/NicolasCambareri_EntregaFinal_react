import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        fontSize: "3rem",
        width: "100vw",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      {greeting}
    </div>
  );
};

export default ItemListContainer;
