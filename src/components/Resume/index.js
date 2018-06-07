import React from "react";
import './style.css';
import withTimeline from "../TimelineHOC";
import ExperienceComponent from "../Experience";
import EducationComponent from "../Education";
import ContactInfoComponent from "../ContactInfo";
import SummaryInfoComponent from "../SummaryInfo";
import SkillsComponent from '../Skills';

const ExperienceTimelineComponent = withTimeline(ExperienceComponent);
const EducationTimelineComponent = withTimeline(EducationComponent);

export default ({ person }) => (
  <div className="resume" id="template">
    <div className="resume-header">
      <SummaryInfoComponent {...person.summary} />
      <ContactInfoComponent {...person.contact} />
    </div>

    <div className="resume-body">
      <SkillsComponent skills={person.skills} />
      <ExperienceTimelineComponent
        title={"Experience"}
        timepoints={person.self_experience}
      />
      <div className="html2pdf__page-break" />
      <ExperienceTimelineComponent
        timepoints={person.experience}
      />
      <div className="html2pdf__page-break" />
      <EducationTimelineComponent
        title={"Education"}
        timepoints={person.education}
      />
      <div className="resume-hobbies">
        <h1 className="title">Hobbies:</h1>
        <ul id="skill-list">
          {person.hobbies.map((hobby, index) => (
            <li className="skill" key={index}>
              <span className="list-item-black">{hobby}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="adnotation">{person.adnotation}</div>
  </div>
);
