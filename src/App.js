import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/header";
import Welcome from "./pages/welcomePage";
import Main from "./pages/main";
import About from "./pages/aboutPage";
import Contact from "./pages/contactPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/allProjects" component={Main} />
            <Route path="/project/:id" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
