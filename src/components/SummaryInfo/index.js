import React from "react";
import './style.css';

const SummaryInfoComponent = (props) => (
  <div className="content">
    <h1 id="name" className="title">
      {props.name.first} {props.name.last}
    </h1>
    <h2 id="position" className="subtitle">
      {props.position}
    </h2>
    <div id="resume-footer">
      <div v-if="person.about">
        <p>{props.about}</p>
      </div>
    </div>
  </div>
);

export default SummaryInfoComponent;
