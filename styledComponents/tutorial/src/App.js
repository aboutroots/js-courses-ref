import React, { useState } from "react";
import "./App.css";
import { Banner, SecondBanner } from "./components/Banners";

function App() {
  return (
    <div>
      <Banner>
        <h1>first banners</h1>
      </Banner>
      <SecondBanner>
        <h2>second banner</h2>
      </SecondBanner>
    </div>
  );
}

export default App;
