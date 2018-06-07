import React, { Component } from "react";
import HeroComponent from "../../components/Hero";

class PortfolioContainer extends Component {
  render() {
    return (
      <div style={{ minHeight: "3000px" }}>
        <HeroComponent title="Portfolio" subtitle="Some examples of my work." size="is-medium">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>Overview</a>
                </li>
                <li>
                  <a>Modifiers</a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  <a>Components</a>
                </li>
                <li>
                  <a>Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </HeroComponent>
      </div>
    );
  }
}

export default PortfolioContainer;
