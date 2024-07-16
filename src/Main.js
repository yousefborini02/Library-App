import React from "react";
import initState from "./object"; // Assuming this is where your initial state (list of books) is imported

function Main() {
  const cardStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardItemStyles = {
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    background: "linear-gradient(to bottom right, #ff5e62, #ff9966)",
    color: "#ffffff",
    textDecoration: "none",
    transition: "transform 0.3s ease-in-out",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardTitleStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cardDetailStyles = {
    fontSize: "1rem",
    marginBottom: "5px",
  };

  return (
    <div>
     <div style={cardStyles}>
        {initState.books.map((element) => (
          <a key={element.isbn} href="#" style={cardItemStyles}>
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <div>
              <h3 style={cardTitleStyles}>{element.Title}</h3>
              <p style={cardDetailStyles}>Author: {element.author}</p>
              <p style={cardDetailStyles}>ISBN: {element.isbn}</p>
            </div>
            <p style={{ marginTop: "auto" }}>More details</p>
          </a>
        ))}
      </div> 
    </div>
  );
}

export default Main;
