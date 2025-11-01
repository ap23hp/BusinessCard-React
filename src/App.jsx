import Header from "./Components/Header";
import Name from "./Components/Name";
import Buttons from "./Components/Button";
import About from "./Components/About";
import Interests from "./Components/Interest";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main-content">
        <Name />
        <Buttons />
        <About />
        <Interests />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
