import React from "react";
import Header from "./components/Header";
import GetStarted from "./components/SectionIntro";
import SectionFeature from "./components/SectionFeature";
import SectionProductive from "./components/SectionProductive";
import SectionTestimoni from "./components/SectionTestimoni";
import SectionAccess from "./components/SectionAccess";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <SectionFeature />
      <SectionProductive />
      <SectionTestimoni />
      <SectionAccess />
      <Footer/>
    </div>
  );
}

export default App;
