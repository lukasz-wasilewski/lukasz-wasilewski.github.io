import React, { Component } from "react";
import HeroComponent from '../../components/Hero';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HeroComponent
          title="Łukasz Wasilewski Site"
          subtitle="Online Resume and Blog."
          size="is-fullheight"
        />
      </div>
    );
  }
}

export default HomeContainer;
