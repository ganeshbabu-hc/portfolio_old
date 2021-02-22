import "./styles.css";
import "animate.css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
    </>
  );
}
