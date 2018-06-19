import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { Router, Route, Link, Switch, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Hoooked from "./pages/Hoooked";
import Finance from "./pages/Finance";
import NavBar from "./components/NavBar";
import Hamburger from "./components/Hamburger";

class App extends Component {
  state = {
    hamburger: "closed"
  };
  clickBurger = () => {
    console.log("button clicked!")
    console.log(window.location.hash)
    if (this.state.hamburger == "closed") {
      this.setState({
        hamburger: "open"
      })
    }
    else if (this.state.hamburger == "open") {
      this.setState({
        hamburger: "closed"
      })
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Hamburger
            clickBurger={this.clickBurger}
            hamburger={this.state.hamburger}
          />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/hoooked" component={Hoooked} />
            <Route exact path="/portfolio/finance" component={Finance} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
