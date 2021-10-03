import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
      <Switch>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/service">
      <Services></Services>
      </Route>
      <Route path="*">
      <NotFound></NotFound>
      </Route>
      </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
