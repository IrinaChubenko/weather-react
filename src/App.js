import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Warsaw" />
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
