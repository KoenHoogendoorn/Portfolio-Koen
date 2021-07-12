import React from "react";
import classes from "./ProjectPreview.module.scss";

import { Link } from "react-router-dom";

const ProjectPreview = (props) => (
  <Link to={props.to} id={props.id} className={classes.ProjectPreview}>
    <div className={classes.ProjectImageContainer}>
      <img className={classes.ProjectImage} src={props.image} alt={props.alt} />
    </div>
    <h3 className={classes.ProjectName}>{props.name}</h3>
    <p className={classes.ProjectTagline}>{props.tagline}</p>
  </Link>
);

export default ProjectPreview;
