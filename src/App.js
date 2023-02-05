import "./App.css";
import City from "./City";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <div>
            <header className="App-header">
              <Navigation />
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
