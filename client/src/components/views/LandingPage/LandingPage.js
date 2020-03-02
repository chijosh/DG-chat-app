import React from "react";
import { FaStackExchange } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaStackExchange style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Start Chating!</span>
      </div>
    </>
  );
}

export default LandingPage;
