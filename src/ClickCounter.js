import React, { useState, useEffect } from "react";

function ClickCounter() {
  const [clickCount, setClickCount] = useState(
    parseInt(localStorage.getItem("clickCount")) || 0
  );

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  useEffect(() => {
    localStorage.setItem("clickCount", clickCount);
  }, [clickCount]);

  const buttonStyle = {
    display: "block",
    margin: "0 auto",
    marginTop: "50px",
    fontSize: "24px",
    padding: "12px 24px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "4px",
    border: "none"
  };

  const countStyle = {
    textAlign: "center",
    fontSize: "48px",
    marginTop: "24px"
  };

  return (
    <div>
      <button onClick={handleClick} style={buttonStyle}>
        Click me!
      </button>
      <div style={countStyle}>{clickCount}</div>
    </div>
  );
  
}

export default ClickCounter;
