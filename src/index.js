import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import createHistory from "history/createHashHistory";
import "./assets";
import "./scrollspy";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Portfolio from "./containers/Portfolio";
import Blog from "./containers/Blog";
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Navbar />
      <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route path="/cv" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
      </ScrollToTop>
      <a role="button" className="scrollTop">
        <i className="fas fa-chevron-up" />
      </a>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
