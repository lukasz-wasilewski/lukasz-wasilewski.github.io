import React from "react";
import './style.css';

export default ({ skills }) => (
  <div className="resume-skills">
    <h2 className="title">Skills</h2>
    <div className="skill-group columns">
      {skills.map((skill, index) => (
        <div className="column tags" key={index}>
          <div className="skill-group-name">{skill.name}</div>
          {skill.skills.map((skill, index) => (
            <span className="tag is-primary" key={index}>
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
