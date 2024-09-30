import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Myprojects from "./components/Myprojects";
import Mystory from "./components/Mystory";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Story />
      <Mystory />
      <Myprojects />
      <Footer />
    </>
  );
}

export default App;
