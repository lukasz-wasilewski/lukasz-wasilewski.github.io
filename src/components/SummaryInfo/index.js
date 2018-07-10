import React from 'react';
import './style.css';

const SummaryInfoComponent = props => (
  <div className="content summary-header">
    <div className="is-flex">
      <div className="summary-position">
        <h1 id="name" className="title">
          {props.name.first} {props.name.last}
        </h1>
        <h4 id="position" className="subtitle">
          {props.position}
        </h4>
      </div>
      <div className="summary-experience">
        <h3>{props.experience}</h3>
      </div>
    </div>
    <div id="resume-footer">
      <div v-if="person.about">
        <p dangerouslySetInnerHTML={{ __html: props.about }} />
      </div>
    </div>
  </div>
);

export default SummaryInfoComponent;
