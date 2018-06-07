import React from "react";
import './style.css';

function withTimeline(WrappedComponent) {
  return (props) => (
    <div className="resume-education">
      <h2 className="title">{props.title}</h2>
      <div className="timeline">
      {props.timepoints.map((item, index) => (
        <div className="point" key={index}>
          <div className="timeperiod">
            {item.timeperiod}
          </div>

          <div className="details">
            <WrappedComponent {...item} />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default withTimeline;
