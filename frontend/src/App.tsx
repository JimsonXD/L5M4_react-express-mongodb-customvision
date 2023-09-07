import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import SimilarCars from "./components/SimilarCars";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <SimilarCars />
      <Footer />
    </div>
  );
}

export default App;