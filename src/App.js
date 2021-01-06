import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import About from "./pages/about";
import News from "./pages/news";
import Home from "./pages/home";
import GetInvolved from "./pages/get-involved";
import Statistics from './pages/statistics';

function App() {
  return (

    <Router>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"/>
          <div className="container">
        <Navbar/>
      
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/about" component={About}/>
          <Route path="/statistics" component={Statistics}/>
        </div>
    </Router>
  );
}

export default App;
