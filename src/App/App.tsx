import Navbar from '../components/Navbar/Navbar';
import AboutStec from '../components/AboutStec/AboutStec';
import SectionOne from '../components/SectionOne/SectionOne';
import './App.css';
// import MagicDevelopment from '../components/MagicDevelopment/MagicDevelopment';
import MagicGallery from '../components/MagicGallery/MagicGallery';
import News from '../components/News/News';
import Questions from '../components/Questions/Questions';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne/>
      <AboutStec />
      <MagicGallery />
      <News />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
