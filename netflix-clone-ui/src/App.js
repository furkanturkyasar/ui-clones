import "./App.scss";
import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import Titles from "./components/Titles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
