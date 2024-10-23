import React, { useState } from "react";  // useState hinzufügen
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import StandardBtn from "./components/common/standard-btn/StandardBtn";
import CustomTextField from "./components/common/customtxtfield/CustomTxtField";

function App() {
  // useState-Hook, um den Zustand für das Eingabefeld zu verwalten
  var [inputValue, setInputValue] = useState('');

  // Funktion zur Verarbeitung der Eingabe
  var handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="main-container">
      <Navbar />
      <Content>
        <div>Hello from Earth</div>
        <StandardBtn>IT</StandardBtn>
        <CustomTextField 
          label="Tim"
          placeholder="Gib deinen Namen ein"
          onChange={handleInputChange}  // handleInputChange Funktion
        />
        <p>Eingegebener Text: {inputValue}</p>  {/* Anzeige des eingegebenen Textes */}
      </Content>
      <Footer />
    </div>
  );
}

export default App;
