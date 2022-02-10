import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

function App() {
  return (
    <div className="flexbox">
      <div className="left-column">
      <Header />
      <Button />
      <Footer />
      </div>
      <div className="right-column">
        <p className="right-column-p">Please connect your wallet.</p>
      </div>
    </div>
  );
}

export default App;
