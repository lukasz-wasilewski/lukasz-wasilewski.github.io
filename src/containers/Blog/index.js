import React, { Component } from "react";
import HeroComponent from "../../components/Hero";

class BlogContainer extends Component {
  render() {
    return (
      <div style={{ minHeight: "3000px" }}>
        <HeroComponent
          title="Blog"
          subtitle="About User Experience, Javascript and beyond."
          size="is-medium"
        />
      </div>
    );
  }
}

export default BlogContainer;
