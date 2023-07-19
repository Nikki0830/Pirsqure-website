import "./App.css";
import Footer from "./Componet/Footer/Footer";
import Navbar from "./Componet/Header/Navbar";
import Routefile from "./Componet/Router/Routefile";

// import Career from "./Componet/Career/Career";
// import { About_us, Home_page } from "./Componet/Constants/Constant";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routefile />
      <Footer/>
    </div>
  );
}

export default App;
