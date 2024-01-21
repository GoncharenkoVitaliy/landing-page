import Navbar from '../components/Navbar/Navbar';
import AboutStec from '../components/AboutStec/AboutStec';
import SectionOne from '../components/SectionOne/SectionOne';
import './App.css';
import MagicGallery from '../components/MagicGallery/MagicGallery';
import News from '../components/News/News';
import Questions from '../components/Questions/Questions';
import Footer from '../components/Footer/Footer';
import ContactMe from '../components/ContactMe/ContactMe'
import MyWorks from '../components/MyWorks/MyWorks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionOne/>
      <AboutStec />
      <MyWorks />
      <MagicGallery />
      <News />
      <Questions />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
