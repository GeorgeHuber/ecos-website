
import './App.css';
//import {BrowserRouter as Router, Route} from "react-router-dom";

//import Navbar from "./components/navbar.component"
import About from "./pages/about";
//import News from "./pages/news";
//import Home from "./pages/home";
//import GetInvolved from "./pages/get-involved";
//import Statistics from './pages/statistics';

import Footer from "./components/footer.component"
//import Article from './pages/article';
function App() {
  return (
    <div>
    <About/>
    {/*<Router>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Hanalei&family=Open+Sans&display=swap" rel="stylesheet"/>
          <div className="container">
        <Navbar/>
      
          <Route path="/" exact component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/articles/:id" component={Article}/>
          <Route path="/about" component={About}/>
          <Route path="/statistics" component={Statistics}/>
        </div>
        
    </Router>*/}
    <Footer/>
    </div>
  );
}

export default App;
