import React from "react";
import initState from "./books.js";

function Main() {
  const cardStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const cardItemStyles = {
    width: "300px",
    margin: "10px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    background: "linear-gradient(to bottom right, #ff5e62, #ff9966)",
    color: "#ffffff",
  };

  return (
    <div style={cardStyles}>
      {initState.books.map((element) => (
        <div key={element.isbn} style={cardItemStyles}>
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            {/* Icon or any other content */}
          </div>
          <h3 className="fs-2 text-body-emphasis">{element.title}</h3>
          <p>Author: {element.author}</p>
          <p>ISBN: {element.isbn}</p>
          <a href="#" className="icon-link">
            More details
          </a>
        </div>
      ))}
    </div>
  );
}

export default Main;