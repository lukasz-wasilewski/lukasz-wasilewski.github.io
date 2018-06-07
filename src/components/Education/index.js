import React from "react";
import './style.css';

const EducationComponent = props => (
  <div>
    <h2 className="degree title">{props.degree}</h2>
    <div className="education-description">{props.description}</div>
  </div>
);

export default EducationComponent;