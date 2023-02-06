import "./App.css";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
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
      </Container>
      <Footer />
    </div>
  );
}

export default App;
