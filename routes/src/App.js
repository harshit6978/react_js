import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Gallary from './Component/Gallary/Gallery.jsx'
import Menu from './Component/Menu/Menu.jsx'
import Service from "./Component/Service/Service.jsx";
import Carddata from "./Component/Carddata.jsx";

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/:id" exact element={<Carddata />} />
      </Routes>
    </>
  );
}

export default App;
