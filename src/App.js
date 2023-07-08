import React,{Suspense} from "react";
import Header from "./components/Header";
// import Home from "./Pages/HomePage";
// import Mint from "./Pages/MintPage";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home =React.lazy(()=>import('./Pages/HomePage'))
const Mint =React.lazy(()=>import('./Pages/MintPage'))
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Suspense fallback={<div>Loading..</div>}>
        <Route exact path="/">
         <Home/>
          </Route>
          <Route exact path="/mint">
           <Mint/>
          </Route>
        </Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
