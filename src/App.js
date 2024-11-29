import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
