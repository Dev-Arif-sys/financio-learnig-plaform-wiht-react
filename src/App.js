import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      
   
      <Route path="/home" element={<Home/>}/>
     
      
      <Route path="/service" element={<Services/>}/>
     
      <Route path="/about" element={<About/>}/>
      
      <Route path="/contact" element={<Contact/>}/>
       
      <Route path="*" element={<NotFound/>}/>
      
      </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
