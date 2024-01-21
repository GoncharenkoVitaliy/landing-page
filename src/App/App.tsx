import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import MyWorksPages from "../components/pages/MyWorksPages";
import ContactMePages from "../components/pages/ContactMePages";
import NotFound from "../components/pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="myWork" element={<MyWorksPages />} />
        <Route path="contact" element={<ContactMePages />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
