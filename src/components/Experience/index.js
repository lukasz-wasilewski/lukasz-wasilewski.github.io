import React from "react";
import "./style.css";

const ExperienceComponent = props => (
  <div>
    <h2 className="company title">{props.company}</h2>
    <p className="company-position subtitle">{props.position}</p>

    <ul className="company-projects-list">
      {props.projects.map((item, index) => (
        <li className="company-project" key={index}>
          <div>
            <div>{item.role}</div>
            <div>{item.description}</div>
            <div className="tags">
              {item.skills.map((skill, index) => (
                <div className="tag" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceComponent;
