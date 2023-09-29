
import './App.css';
import Navbar from './componets/navbar'
import Carousel from './componets/carousel'
import Feature from './componets/feature'
import Footer from './componets/footer'
import Tour from './componets/tour';
import Contact from './componets/contact';
import Album from './componets/album';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Feature />
      <Tour />
      <Contact />
      <Album />
      <Footer />
      
    </div>
  );
}

export default App;
