// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Divkomponente from "./components/layout/divkomponente/Divkomponente";
import Footerkomponente from "./components/layout/footerkomponente/Footerkomponente";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Divkomponente />
      <Footerkomponente />
    </div>
  );
}

export default App;
