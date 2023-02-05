import "./App.css";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

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
          <div>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
