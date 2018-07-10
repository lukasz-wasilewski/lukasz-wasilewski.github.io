import React from "react";
import './style.css';

const ContactInfoComponent = (props) => (
  <div id="info-flex">
    <span id="email">
      <a href={"mailto:" + props.email}>
        <i className="fa fa-envelope" aria-hidden="true" />{" "}
        {props.email}
      </a>
    </span>
    <span id="phone">
      <i className="fa fa-phone" aria-hidden="true" /> {props.phone}
    </span>
    <span id="city">
      <i className="fa fa-map-marker" aria-hidden="true" />{" "}
      {props.city}
    </span>
    
    <span id="github">
      <a href={"https://github.com/"+ props.github}>
        <i className="fab fa-github" aria-hidden="true" />{" "}
        github.com/{props.github}
      </a>
    </span>
  </div>
);
/*<span id="website">
      <a href={"https://"+props.website}>
        <i className="fa fa-home" aria-hidden="true" /> {props.website}
      </a>
    </span>*/
export default ContactInfoComponent;
