import React from "react";
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Mint from "./components/Mint";
function App() {
  useEffect(() => {
		AOS.init();
	}, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mint">
            <Mint/>
          </Route>
          
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
