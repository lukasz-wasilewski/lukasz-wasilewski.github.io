import React from "react";

const HeroComponent = ({ title, subtitle, children, size }) => (
  <section className={`hero is-primary is-bold ${size}`}>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>

    <div className="hero-foot">
      {children}
    </div>
  </section>
);

export default HeroComponent;
