import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project coded by Iryna Chubenko{" "}
          <a
            href=" https://github.com/IrinaChubenko/weather-react"
            target="_blank"
          >
            open-sorsed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
