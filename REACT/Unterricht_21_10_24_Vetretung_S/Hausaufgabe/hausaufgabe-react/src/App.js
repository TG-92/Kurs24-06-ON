import logo from './logo.svg';
import './App.css';

function App() {
  let begruessung = "Hallo mein Name ist Tim und IT find ich super gut.";
  return (
    <>
    <h1>Willkommen zu meiner ersten React-App</h1>
    <h2>{begruessung}</h2>
    <h3>Das Ergebnis von 13+21 ist {13+21}</h3>
    </>
  );
}

export default App;