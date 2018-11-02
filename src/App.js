import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import RouteConfig from "./route/route.config";
import Header from "./components/Header/Header";
import LeftNav from "../src/components/Nav/LeftNav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container-fluid custom-bg">
          <Router>
            <div>
              <div className="row">
                <div className="col-md-3">
                  <div className="left-section">
                    <LeftNav />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="content-section">
                    {RouteConfig.map((route, index) => (
                      <Route
                        path={route.path}
                        key={index}
                        component={route.component}
                        exact={route.exact}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
