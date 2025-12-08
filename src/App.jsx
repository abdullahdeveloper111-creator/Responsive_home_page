// App.jsx
import React from "react";
import Top from "./components/Top.jsx";
import Backgrounds from "./components/Backgrounds.jsx";
import Expert from "./components/Expert.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Card from "./components/Card.jsx";
import Foote from "./components/Foote.jsx";

import StatsBar from "./components/StatsBar.jsx";

const App = () => {
  const heroData = [
    { text1: "Welcome to our Channel", text2: "Your gateway to Learning" },
    { text1: "Learn Web", text2: "Build amazing web applications" },
    { text1: "Master our Course", text2: "Become an expert today" },
  ];

  return (
    <>
      <Top />
      <Backgrounds heroData={heroData} />
      <StatsBar />
      <Card />

      <Expert />
      <Newsletter />
      <Foote />
    </>
  );
};

export default App;
